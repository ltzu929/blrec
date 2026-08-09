import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';

const LEGACY_STUDIO_ROUTES: Record<string, string> = {
  tasks: '/studio/slices',
  uploads: '/studio/uploads',
  settings: '/studio/settings',
};

@Injectable({ providedIn: 'root' })
export class LegacyStudioRedirectGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const studioView = route.queryParamMap.get('studio');
    const target = studioView ? LEGACY_STUDIO_ROUTES[studioView] : undefined;
    return target ? this.router.parseUrl(target) : true;
  }
}
