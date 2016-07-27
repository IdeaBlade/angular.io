import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroButtonComponent } from './heroes';

export const route =  { path: '09-01', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    HeroButtonComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
