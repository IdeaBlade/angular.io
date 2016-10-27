import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model';

@Component({
  moduleId: module.id,
  selector:    'dashboard-hero',
  templateUrl: 'dashboard-hero.component.html',
  styleUrls: [ 'dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.next(this.hero); }
}
