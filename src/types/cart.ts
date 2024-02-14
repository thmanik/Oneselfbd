import { TProductImage } from "./product";

type TProduct = {
  image: {
    thumbnail: TProductImage;
  };
  price: {
    salePrice: number;
    regularPrice: number;
    _id: string;
  };
  slug: string;
  title: string;
  _id: string;
};

type TCartItemData = {
  _id: string;
  product: TProduct;
  quantity: number;
};

type TCartItem = {
  item: TCartItemData;
  _id: string;
};

export type TCart = {
  _id: string;
  cartItems: TCartItem[];
};
