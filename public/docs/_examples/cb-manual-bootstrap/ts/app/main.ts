// #docregion
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {createPlatform, coreLoadAndBootstrap, ReflectiveInjector} from '@angular/core';
import {BROWSER_PROVIDERS} from '@angular/platform-browser';
import {bootstrap, BROWSER_APP_DYNAMIC_PROVIDERS} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

// Components
import {AppComponent} from './app.component';
import {HeroAppComponent} from './hero-app.component';
import {Hero2AppComponent} from './hero2-app.component';

// Services
import {TokenService} from './token.service';
import {APP_TOKEN} from './tokens';

// Platform level providers
let platform = createPlatform(ReflectiveInjector.resolveAndCreate([
  BROWSER_PROVIDERS,
  HTTP_PROVIDERS,
  TokenService
]));

// Platform level token service
let tokenService: TokenService = platform.injector.get(TokenService);

// Applicaton level providers
let appProviders: any[] = [];
let appInjector: ReflectiveInjector;

bootstrap(Hero2AppComponent, [
  { provide: APP_TOKEN, useValue: '8F34217B-C4F6-48EF-A273-63467DBAD41E' }
]);

// Retrieve the application token
tokenService.getAppToken()
  .do((token: string) => {
    // Add token to application providers
    appProviders = appProviders.concat([
      { provide: APP_TOKEN, useValue: token }
    ])
  })
  .subscribe(() => {
    // create application injector
    appInjector = ReflectiveInjector.resolveAndCreate([
     BROWSER_APP_DYNAMIC_PROVIDERS,
     appProviders
    ], platform.injector);

   // bootstrap applications with shared injector
   coreLoadAndBootstrap(appInjector, AppComponent);
   coreLoadAndBootstrap(appInjector, HeroAppComponent);
  });
