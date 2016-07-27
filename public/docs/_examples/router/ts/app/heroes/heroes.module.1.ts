// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  exports: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}
// #enddocregion
