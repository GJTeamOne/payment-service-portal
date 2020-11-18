import { PaymentData } from './../../../_models/payment-data';
import { PaymentService } from './../../../_services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { Subscription } from 'rxjs';
import { PaymentInputDialogComponent } from './payment-input-dialog/payment-input-dialog.component';

const moment = _moment;

@Component({
  selector: 'app-payment-input',
  templateUrl: './payment-input.component.html',
  styleUrls: ['./payment-input.component.scss']
})
export class PaymentInputComponent implements OnInit {
  paymentDataForm: FormGroup;
  minDate: Moment;
  minDigit: number;
  paymentStatusSubscription : Subscription;

  constructor(
    private formBuilder : FormBuilder,
    private paymentService : PaymentService,
    private dialog: MatDialog
  ) { }

  // ngOnInit Method
  ngOnInit() {
    // Initialize Form
    this.paymentDataForm = this.formBuilder.group({
      creditCardNumber: ['', [Validators.required, Validators.maxLength(19)]],
      cardholder: ['', [Validators.required, Validators.maxLength(100)]],
      expirationDate: ['', [Validators.required, Validators.maxLength(100)]],
      securityCode: ['', [Validators.min(100), Validators.max(999), Validators.minLength(3), Validators.maxLength(3)]],
      amount: ['', [Validators.required, Validators.min(1), Validators.minLength(1)]],
    });

    // Set Minimum Digit to 3
    this.minDigit = 3;

    // Get Current Date as Minimum Date
    this.minDate = moment();
  }

  // Submit Method
  submit() {
    if (!this.paymentDataForm.valid) {
      return;
    }

    const selectedDate = this.paymentDataForm.value.expirationDate;
    const convertTime = moment(selectedDate).format("YYYY-MM-DD");
    this.paymentDataForm.value.expirationDate = convertTime;

    this.paymentStatusSubscription = this.paymentService.submitPaymentData(this.paymentDataForm.value).subscribe(
      response => {
        this.openDialog(response);
      }, error => {
        console.log(error);
      }
    );
  }

  // Form Value Getters
  get creditCardNumber() {
    return this.paymentDataForm.get("creditCardNumber");
  }
  get cardholder() {
    return this.paymentDataForm.get("cardholder");
  }
  get expirationDate() {
    return this.paymentDataForm.get("expirationDate");
  }
  get securityCode() {
    return this.paymentDataForm.get("securityCode");
  }
  get amount() {
    return this.paymentDataForm.get("amount");
  }


  //Open Dialog
  openDialog(paymentData: PaymentData) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = paymentData;

    this.dialog.open(PaymentInputDialogComponent, dialogConfig);
  }

  //ngOnDestroy Method
  ngOnDestroy(): void {
    this.paymentStatusSubscription.unsubscribe();
  }
}
