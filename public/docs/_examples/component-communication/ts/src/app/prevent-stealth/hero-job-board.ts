import {Component, provide, CORE_DIRECTIVES} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';
import {JobService, JobBoardFacade, InvitedHeroFacade} from './job-service';

import {Hero} from '../hero';

let jobService = new JobService();

@Component({
  selector: 'hero-job-board',
  template: `
  <div class='request-panel'>
      <h2>Hero Job Board</h2>
      <div>
          <button (click)='inviteHeroes()'>Invite heroes</button>
      </div>
      <h3>Job Request</h3>
      <label>Request:</label>
      <input #box (keyup)="0" style='width: 400px;' [value]='jobRequest' />
      <button (click)='announceJob(box.value)'
          [disabled]='!box?.value.trim().length > 0'>
          Ask
      </button>
      <h3>{{getJobStatus()}}</h3>
      <div *ng-if='!winner'>
          <div class='responding-hero'
              *ng-for='#hero of respondingHeroes'>
              <span class='hero-name'>{{hero.name}}</span>
              <button (click)='assignJob(hero)'>Assign</button>
          </div>
      </div>
      <div *ng-if='winner'>
          The winner is
          <span class='winner'>{{winner.name}}
      </div>
  </div>
  <div class='invited-hero-list'>
      <invited-hero *ng-for='#hero of invitedHeroes'
          [hero]='hero'>
      </invited-hero>
  </div>
  `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero],
  providers: [
    provide(JobBoardFacade, { useValue: jobService }),
    provide(InvitedHeroFacade, { useValue: jobService })
  ]
})
export class HeroJobBoard {
  constructor(private jobBoardFacade: JobBoardFacade) {
    jobBoardFacade.post(null);
  }

  heroes = Hero.heroes;
  invitedHeroes: Hero[] = [];

  get jobRequest(): string {
    return this.jobBoardFacade.jobRequest();
  }

  get respondingHeroes(): Hero[] {
    return this.jobBoardFacade.respondingHeroes();
  }

  get winner(): Hero {
    return this.jobBoardFacade.assignedTo();
  }

  inviteHeroes() {
    this.invitedHeroes = this.heroes;
    this.jobBoardFacade.post(null);
  }

  getJobStatus() {
    if (!this.jobRequest) {
      return "No job request announced"
    }
    else if (this.winner) {
      return "Job assigned";
    } else {
      return this.jobBoardFacade.respondingHeroes.length > 0
        ? "Responding heroes"
        : "No responding heroes";
    }
  }

  announceJob(request: string) {
    this.jobBoardFacade.post(request.trim());
  }

  assignJob(hero: Hero) {
    this.jobBoardFacade.assign(hero);
  }
}