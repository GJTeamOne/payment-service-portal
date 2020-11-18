// DTO - Payment Data Fields
export interface PaymentData {
  creditCardNumber: string,
  cardholder: string,
  expirationDate: Date,
  securityCode?: string,
  amount: number
}
