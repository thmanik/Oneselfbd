export type Product = {
  _id: string;
  title: string;
  price: number;
  image: {
    src: string;
  };
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
