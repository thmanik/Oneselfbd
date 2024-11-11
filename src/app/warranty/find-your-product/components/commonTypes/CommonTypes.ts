// import { ReactNode } from "react";

// export type Shipping = {
//   fullAddress: string;
//   fullName: string;
//   phoneNumber: string;
// };
// export type Product = {
//   total: number;
//   status: ReactNode;
//   updatedAt: string | number | Date;
//   shipping: Shipping;
//   phoneNumber: string;
//   warranty: Warranty | null;
//   image: ImageInfo;
//   title: string;
//   unitPrice: number;
//   quantity: number;
//   _id: string;
//   orderId: string;
//   products: ProductItem[];
// };

// export type ProductItem = {
//   _id: string;
//   productId: string;
//   title: string;
//   image: ImageInfo;
//   warranty: Warranty | null;
//   unitPrice: number;
//   quantity: number;
// };

// export type ImageInfo = {
//   src: string;
//   alt: string;
// };

// export type Warranty = {
//   duration: string;
//   startDate: string;
//   endsDate: string;
//   warrantyCodes: { code: string }[];
// };

import { ReactNode } from "react";

// Type for the shipping details of the product
export type Shipping = {
  fullAddress: string;
  fullName: string;
  phoneNumber: string;
};

// Type for product image details
export type ImageInfo = {
  src: string;
  alt: string;
};

// Type for warranty details of a product
export type Warranty = {
  duration: string;
  startDate: string;
  endsDate: string;
  warrantyCodes: { code: string }[]; // List of warranty codes
};

// Type for each product item in the order
export type ProductItem = {
  adjustedQuantity: number;
  _id: string; // Product ID
  productId: string; // Product's unique identifier
  title: string; // Title of the product
  image: ImageInfo; // Product image details
  warranty: Warranty | null; // Warranty details (can be null if no warranty)
  unitPrice: number; // Unit price of the product
  quantity: number; // Quantity of the product in the order
};

// Type for the product details in the order
export type Product = {
  total: number; // Total price for the product (quantity * unit price)
  status: ReactNode; // The status of the product (could be JSX or plain text)
  updatedAt: string | number | Date; // Last updated date
  shipping: Shipping; // Shipping details of the order
  phoneNumber: string; // Customer's phone number
  warranty: Warranty | null; // Warranty details of the product (if any)
  image: ImageInfo; // Image of the product
  title: string; // Title of the product
  unitPrice: number; // Unit price of the product
  quantity: number; // Quantity of the product in the order
  _id: string; // Product's unique ID
  orderId: string; // Order ID this product belongs to
  products: ProductItem[]; // List of product items within an order
};
