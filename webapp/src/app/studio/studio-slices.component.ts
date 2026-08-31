import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin, interval, of, Subject } from 'rxjs';
import { catchError, startWith, switchMap, takeUntil } from 'rxjs/operators';

import {
  StudioApiService,
  StudioRoom,
  StudioSegment,
  StudioSourceDetail,
  StudioSourceRecording,
} from './studio-api.service';

@Component({
  selector: 'app-studio-slices',
  templateUrl: './studio-slices.component.html',
  styleUrls: ['./studio-slices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioSlicesComponent implements OnInit, OnDestroy {
  loading = true;
  detailLoading = false;
  actionBusy = false;
  error = '';
  roomFilter = '';
  rooms: StudioRoom[] = [];
  recordings: StudioSourceRecording[] = [];
  selectedTaskId = '';
  detail: StudioSourceDetail | null = null;
  selectedSegmentId = '';
  titleDraft = '';
  descriptionDraft = '';
  tagsDraft = '';
  startDraft = 0;
  endDraft = 0;
  progress: Record<string, any> = {};
  diagnostics: Record<string, any> = {};
  worker: Record<string, any> = {};

  private readonly destroyed = new Subject<void>();

  constructor(
    private api: StudioApiService,
    private message: NzMessageService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refresh();
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() =>
          forkJoin({
            progress: this.api.getSliceProgress().pipe(catchError(() => of({}))),
            diagnostics: this.api
              .getSliceDiagnostics()
              .pipe(catchError(() => of({}))),
            worker: this.api.getWorkerStatus().pipe(catchError(() => of({}))),
          })
        ),
        takeUntil(this.destroyed)
      )
      .subscribe((state) => {
        this.progress = state.progress;
        this.diagnostics = state.diagnostics;
        this.worker = state.worker;
        this.changeDetector.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  refresh(): void {
    this.loading = true;
    this.error = '';
    forkJoin({
      rooms: this.api.getRooms().pipe(catchError(() => of([]))),
      recordings: this.api
        .getSourceRecordings(this.roomFilter || undefined)
        .pipe(catchError((error) => {
          this.error = this.describeError(error);
          return of([]);
        })),
    }).subscribe(({ rooms, recordings }) => {
      this.rooms = rooms;
      this.recordings = recordings;
      this.loading = false;
      if (!this.recordings.some((item) => item.task_id === this.selectedTaskId)) {
        this.selectedTaskId = this.recordings[0]?.task_id || '';
      }
      if (this.selectedTaskId) this.loadDetail(this.selectedTaskId);
      this.changeDetector.markForCheck();
    });
  }

  onRoomChanged(): void {
    this.selectedTaskId = '';
    this.detail = null;
    this.refresh();
  }

  selectRecording(taskId: string): void {
    this.selectedTaskId = taskId;
    this.loadDetail(taskId);
  }

  selectSegment(segment: StudioSegment): void {
    this.selectedSegmentId = segment.segment_id;
    this.titleDraft = segment.title || '';
    this.descriptionDraft = segment.description || '';
    this.tagsDraft = (segment.tags || []).join(', ');
    this.startDraft = Number(segment.start_seconds || 0);
    this.endDraft = Number(segment.end_seconds || 0);
  }

  get selectedSegment(): StudioSegment | null {
    return (
      this.detail?.segments?.find(
        (segment) => segment.segment_id === this.selectedSegmentId
      ) || null
    );
  }

  get selectedMediaUrl(): string {
    return this.detail?.source_media_id
      ? this.api.getMediaUrl(this.detail.source_media_id)
      : '';
  }

  get diagnosticItems(): Array<{ status?: string; title?: string; message?: string }> {
    return Array.isArray(this.diagnostics.items) ? this.diagnostics.items : [];
  }

  get groupedRecordings(): Array<{ room: string; items: StudioSourceRecording[] }> {
    const groups = new Map<string, StudioSourceRecording[]>();
    for (const item of this.recordings) {
      const room = item.room_name || item.room_id || '未分组';
      groups.set(room, [...(groups.get(room) || []), item]);
    }
    return Array.from(groups.entries()).map(([room, items]) => ({ room, items }));
  }

  startSlice(): void {
    this.runRequest(
      this.api.startSlice(),
      '已提交待处理录播',
      () => this.refresh()
    );
  }

  startSelectedSlice(): void {
    if (!this.selectedTaskId) return;
    this.runRequest(
      this.api.startSlice(this.selectedTaskId),
      '已提交当前录播',
      () => this.refresh()
    );
  }

  stopWorker(): void {
    if (
      !window.confirm(
        '停止会立即中断正在进行的 MiMo、ASR 或渲染，并将任务退回待处理队列。确认停止吗？'
      )
    ) {
      return;
    }
    this.runRequest(this.api.stopWorker(), '已请求停止切片 worker');
  }

  wakeWorker(): void {
    this.runRequest(this.api.wakeWorker(), '已请求唤醒切片 worker');
  }

  saveRange(): void {
    const segment = this.selectedSegment;
    if (!segment || this.endDraft <= this.startDraft) {
      this.message.warning('出点必须大于入点');
      return;
    }
    this.runSegmentAction('range', {
      start_seconds: this.startDraft,
      end_seconds: this.endDraft,
    });
  }

  finalizeSegment(): void {
    const segment = this.selectedSegment;
    if (!segment) return;
    this.runSegmentAction('finalize', {
      title: this.titleDraft,
      description: this.descriptionDraft,
      tags: this.tagsDraft
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      start_seconds: this.startDraft,
      end_seconds: this.endDraft,
    });
  }

  dropSegment(): void {
    const segment = this.selectedSegment;
    if (segment) this.runSegmentAction('drop');
  }

  retrySegment(): void {
    if (this.selectedSegment) this.runSegmentAction('retry-judge');
  }

  renderSegment(): void {
    if (this.selectedSegment) this.runSegmentAction('render');
  }

  statusLabel(status: string | undefined): string {
    const labels: Record<string, string> = {
      ready: '待处理',
      pending: '已排队',
      processing: '处理中',
      running: '处理中',
      done: '已完成',
      failed: '失败',
      skipped: '已跳过',
      review: '待复核',
      keep: '已保留',
      manual_keep: '已保留',
      judge_failed: '判断失败',
      drop: '已丢弃',
    };
    return labels[status || ''] || status || '未知';
  }

  statusColor(status: string | undefined): string {
    if (['failed', 'judge_failed', 'queue_failed'].includes(status || '')) {
      return 'error';
    }
    if (['done', 'keep', 'manual_keep'].includes(status || '')) return 'success';
    if (['pending', 'processing', 'running'].includes(status || '')) return 'processing';
    return 'default';
  }

  private loadDetail(taskId: string): void {
    this.detailLoading = true;
    this.api.getSourceRecording(taskId).subscribe({
      next: (detail) => {
        this.detail = detail;
        this.detailLoading = false;
        const first = detail.segments?.find(
          (segment) => segment.segment_id === this.selectedSegmentId
        ) || detail.segments?.[0];
        if (first) this.selectSegment(first);
        else this.selectedSegmentId = '';
        this.changeDetector.markForCheck();
      },
      error: (error) => {
        this.detailLoading = false;
        this.error = this.describeError(error);
        this.changeDetector.markForCheck();
      },
    });
  }

  private runSegmentAction(action: string, payload?: Record<string, unknown>): void {
    const segment = this.selectedSegment;
    if (!segment || this.actionBusy) return;
    this.actionBusy = true;
    this.api.segmentAction(segment.segment_id, action, payload).subscribe({
      next: (result) => {
        this.actionBusy = false;
        this.message.success(
          result.status_url ? '已提交 Windows worker 处理' : '操作已保存'
        );
        if (this.selectedTaskId) this.loadDetail(this.selectedTaskId);
        this.changeDetector.markForCheck();
      },
      error: (error) => {
        this.actionBusy = false;
        this.message.error(this.describeError(error));
        this.changeDetector.markForCheck();
      },
    });
  }

  private runRequest<T>(
    request: import('rxjs').Observable<T>,
    successMessage: string,
    after?: () => void
  ): void {
    this.actionBusy = true;
    request.subscribe({
      next: () => {
        this.actionBusy = false;
        this.message.success(successMessage);
        after?.();
        this.changeDetector.markForCheck();
      },
      error: (error) => {
        this.actionBusy = false;
        this.message.error(this.describeError(error));
        this.changeDetector.markForCheck();
      },
    });
  }

  private describeError(error: any): string {
    return String(error?.error?.detail || error?.message || '工作台接口不可用');
  }
}
