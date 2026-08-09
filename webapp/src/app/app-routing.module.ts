import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteScrollBehaviour } from './core/services/router-scroll.service.intf';
import { LegacyStudioRedirectGuard } from './studio/legacy-studio-redirect.guard';

const routes: Routes = [
  {
    path: 'tasks',
    canActivate: [LegacyStudioRedirectGuard],
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'studio',
    loadChildren: () =>
      import('./studio/studio.module').then((m) => m.StudioModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
    data: {
      scrollBehavior: RouteScrollBehaviour.KEEP_POSITION,
    },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/tasks' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
