import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentPageComponent } from './_pages/payment-page/payment-page.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'payment-page', component: PaymentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
