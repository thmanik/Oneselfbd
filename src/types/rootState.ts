import { TUser } from "@/redux/features/auth/interface";
import { ProductToClaim } from "@/redux/features/tableData/tableData";
import { TPaymentInfoState } from "./order/paymentInfo";
import { TShippingInfoState } from "./order/shippingInfo";

export type TRootState = {
  coupon: {
    maxDiscountAmount: number;
    coupon: string;
    percentage: number;
  };
  tableData: ProductToClaim[];
  auth: {
    user: TUser;
  };
  tableDataSlice: ProductToClaim[];
  shippingClass: { _id: string; amount: number };
  shippingInfo: TShippingInfoState;
  paymentInfo: TPaymentInfoState;
};
