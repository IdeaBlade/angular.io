// #docregion
import { provideRouter, RouterConfig }  from '@angular/router';

import { CrisisCenterComponent }  from './crisis-center/crisis-center.component';
import { CRISIS_CENTER_ROUTES }   from './crisis-center/crisis-center.routes';

import { HEROES_ROUTES,
         HEROES_COMPONENTS }      from './heroes/heroes.routes';

import { LOGIN_ROUTES,
         LOGIN_COMPONENTS,
         AUTH_PROVIDERS }         from './login.routes';

const APP_ROUTES: RouterConfig = [
  ...HEROES_ROUTES,
  ...LOGIN_ROUTES,
  ...CRISIS_CENTER_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES),
  AUTH_PROVIDERS
];

export const APP_COMPONENTS = [
  ...HEROES_COMPONENTS,
  ...LOGIN_COMPONENTS,
  CrisisCenterComponent
];
