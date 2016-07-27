import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroButtonComponent } from './heroes';

export const route =  { path: '05-02', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    HeroButtonComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
