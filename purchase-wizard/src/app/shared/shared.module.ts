import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbAccordionModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
