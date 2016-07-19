// #docregion
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1 class="deviating-style" id="output">My First Angular 2 App</h1>',
  styles: [`
    .deviating-style {
      color: green;
      font-weight: bold;
    }`]
})
export class AppComponent { }
