import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioFrameComponent } from './studio-frame.component';

@NgModule({
  declarations: [StudioFrameComponent],
  imports: [CommonModule, NzIconModule, NzSpinModule, StudioRoutingModule],
})
export class StudioModule {}
