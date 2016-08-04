// #docregion
import { Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';

export const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];
