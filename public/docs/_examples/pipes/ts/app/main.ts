import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FormsModule }  from '@angular/forms';
import 'rxjs/Rx';

import { AppComponent } from './app.component';

bootstrap(AppComponent, {
  imports: [FormsModule]
});

