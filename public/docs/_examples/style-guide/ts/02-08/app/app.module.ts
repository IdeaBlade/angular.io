import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValidateDirective } from './shared';

export const route =  { path: '02-08', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent, 
    ValidateDirective
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
