import { ReactNode } from "react";

export type Shipping = {
  fullAddress: string;
  fullName: string;
  phoneNumber: string;
};
export type Product = {
  total: number;
  status: ReactNode;
  updatedAt: string | number | Date;
  shipping: Shipping;
  phoneNumber: string;
  warranty: Warranty | null;
  image: ImageInfo;
  title: string;
  unitPrice: number;
  quantity: number;
  _id: string;
  orderId: string;
  products: ProductItem[];
};

export type ProductItem = {
  _id: string;
  productId: string;
  title: string;
  image: ImageInfo;
  warranty: Warranty | null;
  unitPrice: number;
  quantity: number;
};

export type ImageInfo = {
  src: string;
  alt: string;
};

export type Warranty = {
  duration: string;
  startDate: string;
  endsDate: string;
  warrantyCodes: { code: string }[];
};
