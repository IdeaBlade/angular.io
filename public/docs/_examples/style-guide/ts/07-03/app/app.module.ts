import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes';

export const route =  { path: '07-03', component: AppComponent };

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
