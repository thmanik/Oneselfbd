import { TImage } from "./image";

type TProduct = {
  image: {
    thumbnail: TImage;
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

type TAttribute = {
  _id: string;
  name: string;
  value: string;
};

export type TCartItemData = {
  _id: string;
  product: TProduct;
  quantity: number;
  attributes: TAttribute[];
};

export type TCartItem = {
  item: TCartItemData;
  _id: string;
};

export type TCart = {
  _id: string;
  cartItems: TCartItem[];
};
