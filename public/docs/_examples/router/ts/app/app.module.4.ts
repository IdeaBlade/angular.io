// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { appRoutes }      from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })  // .../#/crisis-center/
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
