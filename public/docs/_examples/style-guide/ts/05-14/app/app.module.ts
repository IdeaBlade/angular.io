import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastComponent } from './shared';

export const route =  { path: '05-14', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
