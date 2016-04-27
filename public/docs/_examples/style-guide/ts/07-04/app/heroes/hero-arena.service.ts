// #docregion
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HeroService } from './shared/index';

// #docregion example
@Injectable()
export class HeroArena {
  constructor(
    private heroService: HeroService,
    private http: Http) {}
}
// #enddocregion example
