import baseApi from "@/redux/baseApi/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cart: builder.query({
      query: () => "/carts",
      providesTags: ["carts"],
    }),
    updateCartQuantity: builder.mutation({
      query: (updatedInfo) => ({
        url: "/carts/update-quantity",
        method: "PATCH",
        body: updatedInfo,
      }),
      invalidatesTags: ["carts"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/carts/add-to-cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),
    deleteFromCart: builder.mutation({
      query: (updatedInfo) => ({
        url: "/carts/delete-from-cart",
        method: "DELETE",
        body: updatedInfo,
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});

export const {
  useCartQuery,
  useUpdateCartQuantityMutation,
  useDeleteFromCartMutation,
  useAddToCartMutation,
} = cartApi;
