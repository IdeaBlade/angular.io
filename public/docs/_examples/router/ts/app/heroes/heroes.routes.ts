// #docregion
import { RouterConfig }          from '@angular/router';
import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent }   from './hero-detail.component';

export const HEROES_ROUTES: RouterConfig = [
  { path: 'heroes',  component: HeroListComponent },
// #docregion hero-detail-route
  { path: 'hero/:id', component: HeroDetailComponent }
// #enddocregion hero-detail-route
];

export const HEROES_COMPONENTS = [
  HeroListComponent,
  HeroDetailComponent
];
// #enddocregion
