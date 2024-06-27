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
    singleOrder: builder.query({
      query: (data) => `/orders/customer/${data.id}`,
    }),
  }),
});

export const { useCreateOrderMutation, useSingleOrderQuery } = orderApi;
