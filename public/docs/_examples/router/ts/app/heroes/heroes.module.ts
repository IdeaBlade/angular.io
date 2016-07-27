// #docregion
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

// #docregion heroes-routes
import { heroesRoutes } from './heroes.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(heroesRoutes)
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
// #enddocregion heroes-routes
export class HeroesModule {}
// #enddocregion
