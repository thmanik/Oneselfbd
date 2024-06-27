import baseApi from "@/redux/baseApi/baseApi";

export const searchProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findSearchProduct: builder.query({
      query: (searchValue) => `/products?search=${searchValue}`,
    }),
  }),
});

export const { useFindSearchProductQuery } = searchProductApi;
