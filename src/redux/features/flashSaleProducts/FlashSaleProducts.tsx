import baseApi from "@/redux/baseApi/baseApi";

const FlashSaleProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlashSaleProducts: builder.query({
      query: () => "/products/featured",
    }),
  }),
});

export const { useGetFlashSaleProductsQuery } = FlashSaleProduct;
