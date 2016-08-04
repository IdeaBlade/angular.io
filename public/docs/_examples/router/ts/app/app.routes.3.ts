// #docplaster
// #docregion
import { Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list.component';

export const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent }
];

export const appRouterProviders: any[] = [

];
