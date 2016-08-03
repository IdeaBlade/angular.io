import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes';
import { UsersComponent } from './users';

export const route =  { path: '02-07', component: AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    UsersComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
