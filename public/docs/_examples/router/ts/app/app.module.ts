// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }       from './app.component';
import { appRouterProviders,
         appRoutes }          from './app.routes';

import { HeroesModule }           from './heroes/heroes.module';
import { CrisisCenterModule }     from './crisis-center/crisis-center.module';

import { LoginComponent } from './login.component';

import { DialogService }  from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HeroesModule,
    CrisisCenterModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRouterProviders,
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
// #enddocregion
