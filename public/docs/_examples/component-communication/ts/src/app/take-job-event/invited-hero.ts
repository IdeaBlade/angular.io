// #docregion import
import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
// #enddocregion import
import {Hero} from '../hero';
import {HeroJobBoard} from './hero-job-board';

@Component({
    selector: 'invited-hero',
    template: `
    <div class='invited-hero'>
        <h3 class='hero-name'>Job Request for {{hero.name}}</h4>
        <h4 class=job-request
            [class.announced]='request'
            [class.undertaken]='undertaken'>
            {{getRequest()}}
        </h4>
        <button [disabled]="!request || undertaken"
            (click)='takeJob()'>
            I'll take it!
        </button>
    </div>
    `,
  styleUrls: ['app/invited-hero.css']
})
// #docregion component
export class InvitedHero {
    @Input() hero: Hero;
    @Input() request: string;
    @Output() onHeroResponse = new EventEmitter<Hero>();

    undertaken: boolean;

    getRequest() {
        return this.request
          ? this.request : "No job announced";
    }

    takeJob() {
        this.onHeroResponse.next(this.hero);
        this.undertaken = true;
    }
}
// #enddocregion component