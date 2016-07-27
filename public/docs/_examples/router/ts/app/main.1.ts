/* First version */
// #docplaster
// #docregion all
// main entry point
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes }       from './app.routes';
// #enddocregion all

/* Can't use AppComponent ... but display as if we can
// #docregion all

bootstrap(AppComponent, {
// #enddocregion all
*/
// Actually use the v.1 component
import { AppComponent as ac } from './app.component.1';

bootstrap(ac, {
// #docregion all
  imports:   [
    FormsModule,
    RouterModule.forRoot(routes, {})
  ]
});
// #enddocregion all
