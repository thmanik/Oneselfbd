export type TPaymentMethodRequiredFields = {
  fieldID: string;
  fieldName: string;
  placeHolder: string;
};

export type TPaymentMethodMerchantACInfo = {
  name: string;
  type: string;
  accountNo: string;
};

export type TPaymentMethodImage = {
  src: string;
  alt: string;
};

export type TPaymentMethod = {
  _id: string;
  name: string;
  image: TPaymentMethodImage;
  requiredFields?: TPaymentMethodRequiredFields[];
  description: string;
  merchantACInfo?: TPaymentMethodMerchantACInfo;
};
