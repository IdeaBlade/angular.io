import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Hero} from '../hero';
import {HeroJobBoard} from './hero-job-board';
import {JobService} from './job-service';

@Component({
  selector: 'invited-hero',
  template: `
  <div class="invited-hero">
    <h3 class="hero-name">Job Request for {{hero.name}}</h4>
    <h4 class=job-request
      [class.announced]="request"
      [class.undertaken]="undertaken">
      {{request || 'No job announced'}}
    </h4>
    <h2 *ng-if="winner"
      [class.won] ="undertaken && winner==hero"
      [class.lost]="undertaken && winner!=hero"
      [class.else]="!undertaken">
      {{finalState}}
    </h2>
    <button
      [disabled]="!request || undertaken"
      [hidden]="winner"
      (click)="takeJob()">
      I'll take it!
    </button>
  </div>
    `,
  styleUrls: ['app/invited-hero.css']
})
export class InvitedHero {
  @Input() hero: Hero;
  request: string;
  undertaken: boolean;
  winner: Hero;

  constructor(private jobService: JobService) {
    jobService.jobPostEvent.subscribe(
      (request: string) => {
        this.request = request;
        this.undertaken = false;
        this.winner = null;
      });
    jobService.jobAssignedEvent.subscribe(
      (winner: Hero) => this.winner = winner);
  }

  takeJob() {
    this.jobService.take(this.hero);
    this.undertaken = true;
  }

  get finalState() {
    return this.winner == this.hero ?
      "I won the job !!!" :
      (this.undertaken ? "I lost the job :-(" : "Job taken.");
  }
}