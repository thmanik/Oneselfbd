import { TImage } from "./image";

export type TPaymentMethodMerchantACInfo = {
  accountType: string;
  accountNo: string;
};

export type TPaymentMethod = {
  _id: string;
  name: string;
  image: TImage;
  description: string;
  merchantACInfo?: TPaymentMethodMerchantACInfo;
  isPaymentDetailsNeeded: boolean;
};
