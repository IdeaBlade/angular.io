// #docregion
// #docregion import
// import { platformBrowser} from '@angular/platform-browser';  // soon
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule }      from './app.module';
// #enddocregion import

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModule(AppModule); // soon
