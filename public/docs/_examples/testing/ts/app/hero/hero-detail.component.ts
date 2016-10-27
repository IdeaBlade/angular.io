/* tslint:disable:member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import 'rxjs/add/operator/pluck';

import { Hero }              from '../model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  moduleId: module.id,
  selector:    'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls:  ['hero-detail.component.css' ],
  providers:  [ HeroDetailService ]
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroDetailService: HeroDetailService,
    private route:  ActivatedRoute,
    private router: Router) {
  }


  @Input() hero: Hero;

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.params.pluck<string>('id')
      .forEach(id => this.getHero(id))
      .catch(() => this.hero = new Hero()); // no id; should edit new hero
  }

  private getHero(id: string): void {
    this.heroDetailService.getHero(id).then(hero => {
      if (hero) {
        this.hero = hero;
      } else {
        this.gotoList(); // id not found; navigate to list
      }
    });
  }

  save(): void {
    this.heroDetailService.saveHero(this.hero).then(() => this.gotoList());
  }

  cancel() { this.gotoList(); }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
