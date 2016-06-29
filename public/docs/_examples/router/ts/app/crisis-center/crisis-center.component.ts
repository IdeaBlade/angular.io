// #docregion
import { Component }             from '@angular/core';
import { ROUTER_DIRECTIVES }     from '@angular/router';

import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisAdminComponent }  from './crisis-admin.component';

import { CrisisService }         from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:  [CrisisService],
  precompile: [
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisAdminComponent
  ]
})
export class CrisisCenterComponent { }
// #enddocregion
