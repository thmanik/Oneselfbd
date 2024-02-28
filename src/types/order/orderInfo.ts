import { TImage } from "../image";
import { TSingleProduct } from "../products/singleProduct";
import TShippingCharges from "../shippingCharge";

export type orderedProductsDetails = {
  productDetails: { product: TSingleProduct }[];
};

type TShipping = {
  _id: string;
  fullAddress: string;
  fullName: string;
  orderId: string;
  phoneNumber: string;
  updatedAt: string;
  createdAt: string;
  __v: string;
};

type TPayment = {
  orderId: string;
  paymentMethod: { _id: string; name: string; image: TImage };
  phoneNumber: string;
  transactionId: string;
  _id: string;
};

export type TOrderInfo = {
  orderId: string;
  orderedProductsDetails: orderedProductsDetails;
  subtotal: number;
  shippingCharge: TShippingCharges;
  total: number;
  status: string;
  createdAt: string;
  shipping: TShipping;
  payment: TPayment;
};
