import { TUser } from "@/redux/features/auth/interface";
import { TPaymentInfoState } from "./order/paymentInfo";
import { TShippingInfoState } from "./order/shippingInfo";

export type TRootState = {
  auth: {
    user: TUser;
  };
  shippingClass: { _id: string; amount: number };
  shippingInfo: TShippingInfoState;
  paymentInfo: TPaymentInfoState;
};
