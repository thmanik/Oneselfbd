export type Product = {
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
