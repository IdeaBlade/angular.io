// #docregion
import { RouterConfig }  from '@angular/router';

import { crisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { heroesRoutes }       from './heroes/heroes.routes';

import { loginRoutes,
         authProviders }      from './login.routes';

export const routes: RouterConfig = [
  ...heroesRoutes,
  ...loginRoutes,
  ...crisisCenterRoutes
];

export const appRouterProviders: any[] = [
  authProviders
];
