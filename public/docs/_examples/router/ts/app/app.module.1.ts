// #docplaster
// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
// #docregion import-router
import { RouterModule }   from '@angular/router';
// #enddocregion import-router

// #docregion router-basics
import { AppComponent }       from './app.component';
import { appRoutes,
         appRouterProviders } from './app.routes';

import { HeroListComponent }    from './hero-list.component';
import { CrisisListComponent }  from './crisis-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent
  ],
  providers: [
    appRouterProviders
  ],
  bootstrap: [ AppComponent ]
})
// #enddocregion router-basics
export class AppModule {
}
// #enddocregion
