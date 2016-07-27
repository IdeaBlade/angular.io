// #docregion
import { RouterConfig }    from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];
