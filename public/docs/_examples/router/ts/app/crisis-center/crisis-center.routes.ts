// #docregion
import { Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisAdminComponent }  from './crisis-admin.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';
import { AuthGuard }             from '../auth-guard.service';

export const crisisCenterRoutes: Routes = [
  {
    path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full'
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      // #docregion admin-route
      {
        path: 'admin',
        component: CrisisAdminComponent,
        canActivate: [AuthGuard]
      },
      // #enddocregion admin-route
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: CrisisListComponent
      }
    ]
  }
];
