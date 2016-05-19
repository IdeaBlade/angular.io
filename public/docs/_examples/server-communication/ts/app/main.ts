// #docplaster
// #docregion v1, final
import { bootstrap }         from '@angular/platform-browser-dynamic';
// #docregion http-providers
import { HTTP_PROVIDERS }    from '@angular/http';
// #enddocregion http-providers

import { AppComponent }      from './app.component';

// #enddocregion v1, final
/*
// #docregion v1
bootstrap(AppComponent, [ HTTP_PROVIDERS ]);
// #enddocregion v1
 */

// #docregion final
// #docregion in-mem-web-api-imports
// in-memory web api imports
import { InMemoryBackendService,
        SEED_DATA }          from 'angular2-in-memory-web-api/core';
import { HeroData }          from './hero-data';

import { provide }           from '@angular/core';
import { XHRBackend }        from '@angular/http';

// #enddocregion in-mem-web-api-imports
// #docregion in-mem-web-api-providers
bootstrap(AppComponent, [
   // HTTP providers and the in-memory web api provider replacements
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
]);
// #enddocregion final, in-mem-web-api-providers
