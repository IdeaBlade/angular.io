// #docregion
import { Routes } from '@angular/router';

import { loginRoutes,
         authProviders }  from './login.routes';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const appRoutes: Routes = [
  ...loginRoutes
];

export const appRouterProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];
