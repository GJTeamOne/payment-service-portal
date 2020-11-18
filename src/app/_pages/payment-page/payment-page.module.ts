import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './payment-page.component';
import { PaymentInputModule } from 'src/app/_shared/components/payment-input/payment-input.module';

@NgModule({
  declarations: [PaymentPageComponent],
  imports: [
    PaymentInputModule
  ]
})
export class PaymentPageModule {}
