import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent, HeroListComponent } from './heroes';

export const route =  { path: '05-17', component: AppComponent };

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
