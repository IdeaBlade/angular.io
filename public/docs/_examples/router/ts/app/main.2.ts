/* Second version */
// For Milestone #2
// Also includes digression on HashPathStrategy (not used in the final app)
// #docplaster
// #docregion
// main entry point
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { routes }               from './app.routes';

// #enddocregion

/* Can't use AppComponent ... but display as if we can
// #docregion
bootstrap(AppComponent, {
// #enddocregion
*/
// Actually use the v.2 component
import { AppComponent as ac } from './app.component.2'; // './app.component.2';

bootstrap(ac, {
// #docregion
  imports:   [
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }) // .../#/crisis-center/
  ]
});
// #enddocregion
