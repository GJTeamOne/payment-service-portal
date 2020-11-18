import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PaymentWebApp';
  show: boolean = false;

  constructor(
    private location: Location, private router: Router) {}

  ngOnInit(): void {
    //display or don't display button
    this.show = this.location.path() === '' ? true : false;
  }

  showPaymentPage(){
    this.show = false;
    this.router.navigate(['payment-page']);
  }
}
