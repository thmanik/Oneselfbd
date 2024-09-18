type TImage = {
  alt: string;
  src: string;
  thumbnail: string;
};

type TProduct = {
  _id: string;
  title: string;
  image: TImage;
};

type TPrice = {
  regularPrice: number;
  salePrice: number;
};

type TAttribute = {
  name: string;
  value: string;
};

type TVariation = {
  _id: string;
  attributes: TAttribute[];
};

export type TCartItemData = {
  image: {
    src: string;
    alt: string;
  };
  _id: string;
  product: TProduct;
  price: TPrice;
  quantity: number;
  variation: TVariation;
};

export type TCart = {
  _id: string;
  cartItems: TCartItemData[];
  data: object;
};
