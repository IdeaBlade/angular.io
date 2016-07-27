// #docregion
import { Routes }  from '@angular/router';

import { loginRoutes,
         authProviders }      from './login.routes';

export const routes: Routes = [
  ...loginRoutes
];

export const appRouterProviders: any[] = [
  authProviders
];
