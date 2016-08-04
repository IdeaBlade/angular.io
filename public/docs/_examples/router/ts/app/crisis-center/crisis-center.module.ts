// #docplaster
// #docregion
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { CrisisService }        from './crisis.service';
// #docregion crisis-detail-resolve
import { CrisisDetailResolve }  from './crisis-detail-resolve.service';
// #enddocregion crisis-detail-resolve

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisAdminComponent }  from './crisis-admin.component';

import { crisisCenterRoutes } from './crisis-center.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisAdminComponent
  ],
  exports: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisAdminComponent
  ],
  // #docregion crisis-detail-resolve

  providers: [
    CrisisService,
    CrisisDetailResolve
  ]
  // #enddocregion crisis-detail-resolve
})
export class CrisisCenterModule {}
// #enddocregion
