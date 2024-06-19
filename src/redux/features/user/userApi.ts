import baseApi from "@/redux/baseApi/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-customer",
        method: "POST",
        body: userInfo,
      }),
    }),

    getUserData: builder.query({
      query: () => "/users/profile",
      providesTags: ["UserProfile"],
    }),
    getOrderedProducts: builder.query({
      query: () => "/orders/customer",
    }),
    getOrderProductById: builder.query({
      query: (_id) => `/orders/customer/${_id}`,
    }),
    updateUserData: builder.mutation({
      query: (updatedData) => ({
        url: "/customers",
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["UserProfile"],
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useGetUserDataQuery,
  useGetOrderedProductsQuery,
  useGetOrderProductByIdQuery,
  useUpdateUserDataMutation,
} = userApi;
