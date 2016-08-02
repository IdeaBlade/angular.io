// #docregion
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

//  Soon
// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ AppComponent ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule { }


// For Now
import { ApplicationRef } from '@angular/core';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
