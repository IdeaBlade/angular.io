// #docregion
import { Component }            from '@angular/core';

import { CrisisService }        from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  providers:  [CrisisService]
})
export class CrisisCenterComponent { }
// #enddocregion
