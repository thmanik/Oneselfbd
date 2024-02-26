import { TPaymentMethod } from "../paymentMethod";

export type TPaymentInfo = {
  selectedPaymentMethod: TPaymentMethod;
  phoneNumber: string | null;
  transactionId: string | null;
};

export type TPaymentInfoState = {
  data: null | TPaymentInfo;
  errors: string[] | null;
};
