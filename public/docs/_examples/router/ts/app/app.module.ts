import { AppModule, ApplicationRef }        from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import { RouterModule, ROUTER_DIRECTIVES }  from '@angular/router';
import { appRouterProviders }               from './app.routes';
import { AppComponent }                     from './app.component';

import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';

@AppModule({
  modules: [ BrowserModule, RouterModule, FormsModule ],
  directives: [ ],
  providers: [
    appRouterProviders,
    HeroService,
    DialogService
  ],
  precompile: [ AppComponent ]
})
export class MyAppModule {
  constructor(appRef:ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
