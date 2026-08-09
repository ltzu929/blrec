import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StudioApiService } from './studio-api.service';

const STORAGE_KEY = 'bilive-studio-preferences';

@Component({
  selector: 'app-studio-settings',
  templateUrl: './studio-settings.component.html',
  styleUrls: ['./studio-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioSettingsComponent implements OnInit {
  loading = true;
  dashboardSettings: Record<string, any> = {};
  refreshInterval = 30;
  compactQueue = false;
  collapseSidebar = false;

  constructor(
    private api: StudioApiService,
    private message: NzMessageService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      this.refreshInterval = Number(stored.refreshInterval || 30);
      this.compactQueue = Boolean(stored.compactQueue);
      this.collapseSidebar = Boolean(stored.collapseSidebar);
    } catch {
      // Ignore malformed local preferences and fall back to defaults.
    }
    this.api.getDashboardSettings().subscribe({
      next: (settings) => {
        this.dashboardSettings = settings || {};
        this.loading = false;
        this.changeDetector.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.changeDetector.markForCheck();
      },
    });
  }

  save(): void {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        refreshInterval: this.refreshInterval,
        compactQueue: this.compactQueue,
        collapseSidebar: this.collapseSidebar,
      })
    );
    this.message.success('工作台偏好已保存到当前浏览器');
  }
}
