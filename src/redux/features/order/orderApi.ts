import baseApi from "@/redux/baseApi/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["carts"],
    }),
    createOrderFromSalesPage: builder.mutation({
      query: (orderData) => ({
        url: "/orders/landing-page",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useCreateOrderFromSalesPageMutation } =
  orderApi;
