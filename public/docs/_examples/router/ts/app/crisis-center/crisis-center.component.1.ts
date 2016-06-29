import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

// #docregion precompile
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
// #enddocregion precompile
// #docregion precompile-admin
import { CrisisAdminComponent }  from './crisis-admin.component';
// #enddocregion precompile-admin

import { CrisisService }        from './crisis.service';

// #docregion minus-imports
@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
// #docregion providers
  providers:  [CrisisService],
// #enddocregion providers
// #docregion precompile, precompile-admin
  precompile: [
    CrisisDetailComponent,
    CrisisListComponent,
    // #enddocregion precompile
  ]
// #docregion precompile
// #enddocregion precompile, precompile-admin
})
export class CrisisCenterComponent { }
// #enddocregion  minus-imports
