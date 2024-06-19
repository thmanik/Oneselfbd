import { ReactNode } from "react";

export type Product = {
  createdAt: string | number | Date;
  advance: {
    createdAt: string;
  };
  orderId: string;
  status: ReactNode;
  _id: string;
  title: string;
  quantity: number;
  unitPrice: number;
  total: number;
  image: {
    src: string;
    alt: string;
  };
};
