// #docregion
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesListComponent } from './heroes-list.component';
import { HeroesService } from './heroes.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroesService ],
  declarations: [ HeroesListComponent ],
  bootstrap: [ HeroesListComponent ]
})
export class AppModule { }

/* Documentation artifact below
// #docregion bad-alternative
// Don't do this!
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroesService, RestoreService],
  declarations: [ HeroesListComponent ],
  bootstrap: [ HeroesListComponent ]
})
// #enddocregion bad-alternative
*/
