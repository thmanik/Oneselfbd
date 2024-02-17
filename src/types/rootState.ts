import { TShippingData } from "@/app/checkout/components/ShippingAddress";
import { TUser } from "@/redux/features/auth/interface";
import { TOrderPayment } from "./order/orderPayment";

export type TRootState = {
  auth: {
    user: TUser;
  };
  shippingClass: { _id: string; amount: number };
  shippingAddress: TShippingData;
  paymentInfo: TOrderPayment;
};
