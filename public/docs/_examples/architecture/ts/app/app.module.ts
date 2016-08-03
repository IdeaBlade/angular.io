import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { SalesTaxComponent } from './sales-tax.component';
import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';
import { HeroService }    from './hero.service';
import { BackendService } from './backend.service';
import { Logger }         from './logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent
  ],
  providers: [
    BackendService,
    HeroService,
    Logger,
    SalesTaxService,
    TaxRateService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
