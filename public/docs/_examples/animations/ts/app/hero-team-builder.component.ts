import { Component } from '@angular/core';
import { Heroes } from './hero.service';
import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroListInlineStylesComponent } from './hero-list-inline-styles.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListEnterLeaveStatesComponent } from './hero-list-enter-leave-states.component';
import { HeroListCombinedTransitionsComponent } from './hero-list-combined-transitions.component';
import { HeroListTwowayComponent } from './hero-list-twoway.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
// Enable when CSS parser integration has been added
// import {HeroListClassesComponent} from './hero-list-classes.component';
import { HeroListGroupsComponent } from './hero-list-groups.component';
// Enable when CSS parser integration has been added
// import {HeroListKeyframesComponent} from './hero-list-keyframes.component';
import { HeroListMultistepComponent } from './hero-list-multistep.component';
import { HeroListTimingsComponent } from './hero-list-timings.component';

@Component({
  selector: 'hero-team-builder',
  template: `
    <div class="buttons">
      <button [disabled]="!heroes.canAdd()" (click)="heroes.add()">Add hero</button>
      <button [disabled]="!heroes.canRemove()" (click)="heroes.remove()">Remove hero</button>
    </div>
    <div class="columns">
      <div class="column">
        <h4>Basic State</h4>
        <p>Switch between active/inactive on click.</p>
        <hero-list-basic [heroes]=heroes></hero-list-basic>
      </div>
      <div class="column">
        <h4>Styles inline in transitions</h4>
        <p>Animated effect on click, no persistend end styles.</p>
        <hero-list-inline-styles [heroes]=heroes></hero-list-inline-styles>
      </div>
      <div class="column">
        <h4>Combined transition syntax</h4>
        <p>Switch between active/inactive on click. Define just one transition used in both directions.</p>
        <hero-list-combined-transitions [heroes]=heroes></hero-list-combined-transitions>
      </div>
      <div class="column">
        <h4>Two-way transition syntax</h4>
        <p>Switch between active/inactive on click. Define just one transition used in both directions using the <=> syntax.</p>
        <hero-list-twoway [heroes]=heroes></hero-list-twoway>
      </div>
      <div class="column">
        <h4>Enter & Leave</h4>
        <p>Enter and leave animations using the void state.</p>
        <hero-list-enter-leave [heroes]=heroes></hero-list-enter-leave>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h4>Enter & Leave & States</h4>
        <p>
          Enter and leave animations combined with active/inactive state animations.
          Different enter and leave transitions depending on state.
        </p>
        <hero-list-enter-leave-states [heroes]=heroes></hero-list-enter-leave-states>
      </div>
      <div class="column">
        <h4>Auto Style Calc</h4>
        <p>Leave animation from the current computed height using the auto-style value *.</p>
        <hero-list-auto [heroes]=heroes></hero-list-auto>
      </div>
      <div class="column">
        <h4>Different Timings</h4>
        <p>Enter and leave animations with different easings, ease-in for enter, ease-out for leave.</p>
        <hero-list-timings [heroes]=heroes></hero-list-timings>
      </div>
      <div class="column">
        <h4>Multiple Keyframes</h4>
        <p>Enter and leave animations with three keyframes in each, to give the transition some bounce.</p>
        <hero-list-multistep [heroes]=heroes></hero-list-multistep>
      </div>
      <div class="column">
        <h4>Parallel Groups</h4>
        <p>Enter and leave animations with multiple properties animated in parallel with different timings.</p>
        <hero-list-groups [heroes]=heroes></hero-list-groups>
      </div>
      <!--div class="column">
        <h4>CSS Classes</h4>
        <p>Switch between active/inactive on click. Pull the actual CSS styles in from component stylesheet.</p>
        <hero-list-classes [heroes]=heroes></hero-list-classes>
      </div-->
      <!--div class="column">
        <h4>CSS Keyframes</h4>
        <p>
          Enter and leave animations with three keyframes in each, to give the transition some bounce.
          Pull in the actual keyframes from CSS keyframes in component stylesheet.
        </p>
        <hero-list-multistep [heroes]=heroes></hero-list-multistep>
        <hero-list-keyframes [heroes]=heroes></hero-list-keyframes>
      </div-->
    </div>
  `,
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  directives: [
    HeroListBasicComponent,
    HeroListInlineStylesComponent,
    HeroListCombinedTransitionsComponent,
    HeroListTwowayComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStatesComponent,
    HeroListAutoComponent,
    HeroListTimingsComponent,
    // HeroListClassesComponent,
    // HeroListKeyframesComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent
  ],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) { }
}
