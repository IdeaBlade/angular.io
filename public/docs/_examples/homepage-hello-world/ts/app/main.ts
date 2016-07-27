// #docregion
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { HelloWorldComponent } from './hello_world';

bootstrap(HelloWorldComponent, {
  imports: [FormsModule]
});

