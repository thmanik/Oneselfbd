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
    }),
  }),
});

export const { useCreateCustomerMutation, useGetUserDataQuery } = userApi;
