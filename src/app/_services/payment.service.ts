import { PaymentData } from './../_models/payment-data';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(
  private http: HttpClient
) { }

// HTTP Post - Submit Payment Data
public submitPaymentData(paymentData: PaymentData): Observable<PaymentData> {
  return this.http.post<PaymentData>(API_URL + '/submit-payment', paymentData)
    .pipe(
      catchError(this.handleError)
    );
}

// Handle Error Method
private handleError (error: Response | any) {
  console.error('ApiService::handleError', error);
  return Observable.throw(error);
}

}
