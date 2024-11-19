import { TImage } from "../image";
import { TTag } from "../tags/tag";

export type TDate = {
  start: string;
  end: string;
};

export type TPrice = {
  date: TDate;
  _id: string;
  regularPrice: number;
  salePrice: number;

  discountPercent: number;
  save: number;
};

export type TGalleryImage = {
  src: string;
  alt: string;
  gallery: TImage;
};

export type TInventory = {
  _id: string;
  sku: string;
  stockStatus: string;
  stockQuantity: number;
  lowStockWarning: number;
  manageStock: boolean;
  showStockQuantity: boolean;
  showStockWithText: boolean;
  hideStock: boolean;
  soldIndividually: boolean;
  stockAvailable: number;
};

export type TAttribute = {
  name: string;
  values: string[];
};

export type TBrand = {
  _id: string;
  name: string;
};

export type TCategory = {
  slug: string;
  name: string;
  _id: {
    _id: string;
    name: string;
  };
  subCategory: {
    _id: string;
    name: string;
  }[];
};

export type TPublishedStatus = {
  status: string;
  visibility: string;
  date: string;
};

export type TSeoData = {
  _id: string;
  focusKeyphrase: string;
  metaTitle: string;
  slug: string;
  metaDescription: string;
};

export type TSingleProduct = {
  _id: string;
  id: string;
  title: string;
  permalink: string;
  type: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  usageGuidelines?: string;
  additionalInfo?: string;
  downloadable: boolean;
  featured: boolean;
  review: boolean;
  price: TPrice;
  thumbnail: TGalleryImage;
  gallery: TGalleryImage[];
  image: TGalleryImage;
  inventory: TInventory;
  attribute: TAttribute[];
  brand: TBrand;
  category: TCategory;
  tag: TTag[];
  publishedStatus: TPublishedStatus;
  seoData: TSeoData;
  createdBy: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  variations: Tvariations[];
};
export type Tvariations = {
  options: string[];
  priceDifference: number;
  id: string;
  salePrice?: number;
  regularPrice?: number;
  name: string;
  _id: string;
  length: number;
  attributes: {
    [key: string]: string;
  };
  price: TPrice;
  inventory: TInventory;
};

export type VariationSelectorProps = {
  variations: Tvariations[];
  initialPrice: {
    regularPrice: number;
    salePrice: number;
  };
};
