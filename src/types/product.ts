type TProductBrand = {
  _id: string;
  name: string;
};

type TProductCategory = { _id: string; name: string };

export type TProductImage = {
  _id: string;
  src: string;
  alt: string;
};

export type TProduct = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  regularPrice: number;
  price: number;
  salePrice: number;
  discountPercent: number;
  stock: "In stock" | "Out of stock" | "On backorder";
  stockAvailable: number;
  category?: TProductCategory;
  brand?: TProductBrand[];
  image: TProductImage;
  totalReview: number;
  averageRating: null | number;
};
