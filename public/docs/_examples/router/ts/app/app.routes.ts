// #docregion
import { provideRoutes, RouterConfig }  from '@angular/router';

import { crisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { heroesRoutes }       from './heroes/heroes.routes';

import { loginRoutes,
         authProviders }      from './login.routes';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const routes: RouterConfig = [
  ...heroesRoutes,
  ...loginRoutes,
  ...crisisCenterRoutes
];

export const appRouterProviders = [
  provideRoutes(routes),
  authProviders,
  CanDeactivateGuard
];
