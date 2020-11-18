import { PaymentInputDialogComponent } from './payment-input-dialog/payment-input-dialog.component';
import { NgModule } from '@angular/core';
import { PaymentInputComponent } from './payment-input.component';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PaymentInputComponent, PaymentInputDialogComponent],
  imports: [AngularMaterialModule , ReactiveFormsModule, CommonModule],
  exports: [PaymentInputComponent, PaymentInputDialogComponent]
})
export class PaymentInputModule {}
