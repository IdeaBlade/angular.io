// #docplaster
// #docregion
import { RouterConfig } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list.component';
import { heroesRoutes }        from './heroes/heroes.routes';

export const routes: RouterConfig = [
  ...heroesRoutes,
  { path: 'crisis-center', component: CrisisListComponent }
];

export const appRouterProviders: any[] = [

];
