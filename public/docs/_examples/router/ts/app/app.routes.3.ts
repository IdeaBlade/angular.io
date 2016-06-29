// #docplaster
// #docregion
import { provideRouter }       from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list.component';
import { HEROES_ROUTES,
         HEROES_COMPONENTS }   from './heroes/heroes.routes';

const APP_ROUTES = [
  ...HEROES_ROUTES,
  { path: 'crisis-center', component: CrisisListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

export const APP_COMPONENTS = [
  CrisisListComponent,
  ...HEROES_COMPONENTS
];
