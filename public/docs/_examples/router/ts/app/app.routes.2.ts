// #docplaster
// #docregion
// #docregion route-config
import { provideRouter, RouterConfig } from '@angular/router';

// #enddocregion route-config
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';

// #docregion route-config
const APP_ROUTES: RouterConfig = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

export const APP_COMPONENTS = [
  CrisisListComponent,
  HeroListComponent
];
// #enddocregion route-config
