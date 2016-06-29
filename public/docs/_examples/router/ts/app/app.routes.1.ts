// #docplaster
// #docregion
// #docregion route-config
import { provideRouter, RouterConfig } from '@angular/router';

// #enddocregion route-config
// #enddocregion

// #docregion base-routes
import { CrisisCenterComponent }  from './crisis-center/crisis-center.component';
import { HeroDetailComponent }    from './heroes/hero-detail.component';
import { HeroListComponent }      from './hero-list.component';
// #enddocregion base-routes

// #docregion
// #docregion route-config
const APP_ROUTES: RouterConfig = [
  // #docregion route-defs
  { path: 'crisis-center', component: CrisisCenterComponent },
  { path: 'heroes', component: HeroListComponent },
  // #enddocregion route-defs
  // #docregion hero-detail-route
  { path: 'hero/:id', component: HeroDetailComponent }
  // #enddocregion hero-detail-route
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

export const APP_COMPONENTS = [
  CrisisCenterComponent,
  HeroDetailComponent,
  HeroListComponent
];
// #enddocregion route-config
// #enddocregion
