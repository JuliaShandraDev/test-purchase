import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './children/card-info/card-info.component';
import { OrderPreviewComponent } from './children/order-preview/order-preview.component';
import { PaymentResultComponent } from './children/payment-result/payment-result.component';



@NgModule({
  declarations: [
    CardInfoComponent,
    OrderPreviewComponent,
    PaymentResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreditCardModule { }
