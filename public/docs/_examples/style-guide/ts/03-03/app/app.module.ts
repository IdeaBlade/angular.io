import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

export const route =  { path: '03-03', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
