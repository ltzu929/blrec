import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-studio-frame',
  templateUrl: './studio-frame.component.html',
  styleUrls: ['./studio-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioFrameComponent {
  readonly title: string;
  readonly frameUrl: SafeResourceUrl;
  loading = true;

  constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
    const routeData = route.snapshot.data as {
      title?: string;
      legacyPath?: string;
    };
    this.title = routeData.title || '工作台';
    this.frameUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.buildFrameUrl(routeData.legacyPath || '/tasks')
    );
  }

  onFrameLoad(): void {
    this.loading = false;
  }

  private buildFrameUrl(path: string): string {
    const current = new URL(window.location.href);
    current.port = '2234';
    current.pathname = path;
    current.search = 'embed=blrec';
    current.hash = '';
    return current.toString();
  }
}
