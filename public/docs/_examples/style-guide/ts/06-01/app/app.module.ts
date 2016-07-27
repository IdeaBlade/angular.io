import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './shared';

export const route =  { path: '06-01', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
