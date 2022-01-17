import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CardInfoComponent} from './children/card-info/card-info.component';
import {OrderPreviewComponent} from './children/order-preview/order-preview.component';
import {PaymentResultComponent} from './children/payment-result/payment-result.component';


const routes: Routes = [
  { path: '', component: CardInfoComponent, pathMatch: 'full' },
  { path: '', component: OrderPreviewComponent, pathMatch: 'full' },
  { path: '', component: PaymentResultComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetSupportRoutingModule {
}
