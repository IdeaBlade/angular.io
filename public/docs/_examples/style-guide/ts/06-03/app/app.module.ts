import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValidatorDirective } from './shared';

export const route =  { path: '06-03', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    ValidatorDirective
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
