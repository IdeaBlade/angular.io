// #docregion
import {Component}   from 'angular2/angular2';
import {RouterLink}  from 'angular2/router';

@Component({
// #docregion chat-links
  template: `
    <p>Would you like to chat with an agent?</p>
    <h3 [router-link]="['ChatDetail', {id: 1}]">Yes</h3>
    <!-- This link should cancel the aux link -->
    <h5>No</h5>
  `,
// #enddocregion chat-links
  directives: [RouterLink]
})
export class ChatInitComponent { }
