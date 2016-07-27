// #docplaster
// #docregion
// #docregion route-config
import { Routes } from '@angular/router';

// #enddocregion route-config
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';

// #docregion route-config
export const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent }
];

export const appRouterProviders: any[] = [

];
// #enddocregion route-config
