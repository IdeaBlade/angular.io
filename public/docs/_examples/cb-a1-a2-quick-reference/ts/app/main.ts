// #docregion
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, {
  imports: [FormsModule],
  providers: [appRouterProviders]
});
