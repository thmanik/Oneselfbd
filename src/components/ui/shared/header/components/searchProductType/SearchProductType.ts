export type Product = {
  thumbnail: {
    src: string;
    alt: string;
  };
  stockStatus: string;
  _id: string;
  title: string;
  regularPrice: number;
  price: number;
  salePrice: number;
};

export type ApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  isLoading: boolean;
  isError: boolean;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Product[];
};
