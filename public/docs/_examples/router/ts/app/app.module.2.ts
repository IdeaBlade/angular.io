// #docplaster
// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }       from './app.component';
import { appRoutes,
         appRouterProviders } from './app.routes';

// #docregion hero-import
import { HeroesModule }         from './heroes/heroes.module';

import { CrisisListComponent }  from './crisis-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HeroesModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent
  ],
  providers: [
    appRouterProviders
  ],
  bootstrap: [ AppComponent ]
})
// #enddocregion hero-import
export class AppModule {
}
// #enddocregion
