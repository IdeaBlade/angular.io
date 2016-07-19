// #docregion
// main entry point
import {bootstrapModule} from '@angular/core';
import {browserDynamicPlatform} from '@angular/platform-browser-dynamic';
import {MyAppModule} from './app.module';

bootstrapModule(MyAppModule, browserDynamicPlatform())
  .catch(err => console.error(err));
