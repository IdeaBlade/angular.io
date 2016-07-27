// #docregion
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { FormsModule }          from '@angular/forms';
import { XHRBackend }           from '@angular/http';
import { appRouterProviders }   from './app.routes';
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

import { HeroData }         from './hero-data';
import { InMemoryBackendService,
         SEED_DATA }        from 'angular2-in-memory-web-api';

import { AppComponent }     from './app.component';

// #docregion bootstrap
bootstrap(AppComponent, {
  imports: [FormsModule],
  providers: [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: HeroData } // in-mem server data
  ]
});
// #enddocregion bootstrap
