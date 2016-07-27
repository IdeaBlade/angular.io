import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './+heroes';

export const route =  { path: '04-14', component: AppComponent };

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
