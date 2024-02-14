import baseApi from "@/redux/baseApi/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cart: builder.query({
      query: () => "/carts",
    }),
  }),
});

export const { useCartQuery } = cartApi;
