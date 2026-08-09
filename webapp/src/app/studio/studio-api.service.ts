import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StudioRoom {
  room_id: string;
  name?: string;
}

export interface StudioSourceRecording {
  task_id: string;
  room_id: string;
  room_name?: string;
  source_name?: string;
  source_rel_path?: string;
  source_media_id?: string;
  status?: string;
  message?: string;
  source_size_mb?: number;
  segment_count?: number;
  summary_counts?: Record<string, number>;
  failure?: Record<string, unknown> | null;
}

export interface StudioSegment {
  segment_id: string;
  title?: string;
  description?: string;
  tags?: string[];
  judge_status?: string;
  upload_status?: string;
  start_seconds?: number;
  end_seconds?: number;
  candidate_media_id?: string;
  quality_score?: number;
  completeness_score?: number;
  confidence?: number;
  danmaku_count?: number;
  burst_ratio?: number;
  quality?: Record<string, unknown>;
  failure?: {
    summary?: string;
    technical_details?: string;
    recovery_action?: string;
  } | null;
  action_state?: {
    action?: string;
    status?: string;
    job_id?: string;
  };
  subtitle_style?: Record<string, number>;
}

export interface StudioSourceDetail extends StudioSourceRecording {
  density_points?: Array<{
    start_seconds?: number;
    end_seconds?: number;
    count?: number;
    normalized?: number;
  }>;
  segments?: StudioSegment[];
  history_status?: string;
}

export interface UploadDashboard {
  queue_counts?: Record<string, number>;
  items?: Array<{
    id?: number;
    name?: string;
    room?: string;
    status?: string;
    attempts?: number;
    last_error?: string;
    bvid?: string;
    updated_at?: number;
  }>;
  database?: string;
  worker?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class StudioApiService {
  constructor(private http: HttpClient) {}

  getRooms(): Observable<StudioRoom[]> {
    return this.http.get<StudioRoom[]>('/api/rooms');
  }

  getSourceRecordings(roomId?: string): Observable<StudioSourceRecording[]> {
    let params = new HttpParams();
    if (roomId) params = params.set('room_id', roomId);
    return this.http.get<StudioSourceRecording[]>('/api/source-recordings', {
      params,
    });
  }

  getSourceRecording(taskId: string): Observable<StudioSourceDetail> {
    return this.http.get<StudioSourceDetail>(
      `/api/source-recordings/${encodeURIComponent(taskId)}`
    );
  }

  getSliceProgress(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>('/api/slice-progress');
  }

  getSliceDiagnostics(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>('/api/slice-diagnostics');
  }

  getWorkerStatus(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>('/api/worker-trigger/status');
  }

  startSlice(taskId?: string): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>('/api/slice/start',
      taskId ? { task_id: taskId } : {}
    );
  }

  wakeWorker(): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>('/api/worker-trigger/wake', {});
  }

  stopWorker(): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>('/api/worker-trigger/stop', {});
  }

  getJob(jobId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`/api/jobs/${encodeURIComponent(jobId)}`);
  }

  segmentAction(
    segmentId: string,
    action: string,
    payload?: Record<string, unknown>
  ): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(
      `/api/segments/${encodeURIComponent(segmentId)}/${action}`,
      payload || {}
    );
  }

  getUploadDashboard(): Observable<UploadDashboard> {
    return this.http.get<UploadDashboard>('/api/upload-dashboard');
  }

  getDashboardSettings(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>('/api/dashboard-settings');
  }

  getMediaUrl(mediaId: string, preview = false): string {
    const resource = preview ? 'preview' : 'media';
    return `/api/${resource}/${encodeURIComponent(mediaId)}`;
  }
}
