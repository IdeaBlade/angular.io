// #docregion
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChatComponent}         from './chat/chat.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

@Component({
  selector: 'my-app',
// #docregion template
  template: `
    <h1 class="title">Component Router</h1>
    <a [router-link]="['CrisisCenter']">Crisis Center</a>
    <a [router-link]="['Heroes']">Heroes</a>
    <a [router-link]="['Chat']">Chat</a>
    <router-outlet></router-outlet>
    <router-outlet name="chat"></router-outlet>
  `,
// #enddocregion template
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/chat/...',          name: 'Chat',         component: ChatComponent},
  {path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true},
  {path: '/heroes',            name: 'Heroes',       component: HeroListComponent},
  {path: '/hero/:id',          name: 'HeroDetail',   component: HeroDetailComponent}
])
export class AppComponent { }
