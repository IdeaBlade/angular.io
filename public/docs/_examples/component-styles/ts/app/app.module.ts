import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroAppComponent } from './hero-app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HeroAppComponent ],
  bootstrap: [ HeroAppComponent ]
})
export class AppModule { }
