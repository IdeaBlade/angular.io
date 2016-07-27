// #docregion
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { TodoAppComponent }   from './todo_app';

bootstrap(TodoAppComponent, {
  imports: [FormsModule]
});


