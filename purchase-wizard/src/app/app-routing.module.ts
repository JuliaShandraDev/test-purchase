import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditCardComponent} from "./credit-card/credit-card.component";
import {CardInfoComponent} from "./credit-card/children/card-info/card-info.component";

const routes: Routes = [
  {path: "credit-card", component: CardInfoComponent, pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
