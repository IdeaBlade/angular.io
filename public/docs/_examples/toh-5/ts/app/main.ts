// #docregion
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes }       from './app.routes';

bootstrap(AppComponent, {
  imports: [
    FormsModule,
    RouterModule.forRoot(routes, {})
  ]
});
