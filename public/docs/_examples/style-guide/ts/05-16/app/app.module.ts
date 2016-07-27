import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes';

export const route =  { path: '05-16', component: AppComponent };

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeroComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
