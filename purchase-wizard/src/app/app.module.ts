import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanSectionComponent } from './plan-section/plan-section.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponent } from './shared/shared.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    PlanSectionComponent,
    CreditCardComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
