import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudioFrameComponent } from './studio-frame.component';

const routes: Routes = [
  {
    path: 'slices',
    component: StudioFrameComponent,
    data: { title: '切片', legacyPath: '/tasks' },
  },
  {
    path: 'uploads',
    component: StudioFrameComponent,
    data: { title: '上传', legacyPath: '/uploads' },
  },
  {
    path: 'settings',
    component: StudioFrameComponent,
    data: { title: '工作台设置', legacyPath: '/settings' },
  },
  { path: '', pathMatch: 'full', redirectTo: 'slices' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioRoutingModule {}
