import { PaymentData } from './../../../../_models/payment-data';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-payment-input-dialog',
  templateUrl: './payment-input-dialog.component.html',
  styleUrls: ['./payment-input-dialog.component.scss']
})
export class PaymentInputDialogComponent implements OnInit {
  paymentData: {};

  constructor(
    private dialogRef: MatDialogRef<PaymentInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.paymentData = data;
    }

  // ngOnInit Method
  ngOnInit() {
    // Received Response Data from Backend Server
    console.log(this.paymentData);
  }

  // close dialog method
  close() {
    this.dialogRef.close();
  }

}
