// #docregion
import { provideRouter, RouterConfig }  from '@angular/router';

import { CrisisCenterComponent }  from './crisis-center/crisis-center.component';
import { CRISIS_CENTER_ROUTES }   from './crisis-center/crisis-center.routes';

import { HEROES_ROUTES,
         HEROES_COMPONENTS }      from './heroes/heroes.routes';

export const APP_ROUTES: RouterConfig = [
  ...HEROES_ROUTES,
  ...CRISIS_CENTER_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

export const APP_COMPONENTS = [
  ...HEROES_COMPONENTS,
  CrisisCenterComponent
];
