// 04-10
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule }    from './shared/shared.module';

export const route =  {  path: '04-10', component: AppComponent  };

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {}
