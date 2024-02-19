export type TOrderPayment = {
  selectedPaymentMethod?: string;
  success?: boolean;
  transactionInfo?: {
    accountInfo?: {
      IDType?: string;
      value?: string;
    };
    transactionId?: string;
  };
};
