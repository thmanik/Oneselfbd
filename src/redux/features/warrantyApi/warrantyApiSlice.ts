// import baseApi from "@/redux/baseApi/baseApi";

// const apiSlice = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     searchProduct: builder.query({
//       query: (payload) => ({
//         url: `warranty-claim/check-warranty/`,
//         body: payload,
//       }),
//     }),
//   }),
// });

// export const { useSearchProductQuery } = apiSlice;
// export default apiSlice.reducer;

import baseApi from "@/redux/baseApi/baseApi";

export const warrantyApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkWarranty: builder.query({
      query: ({ phoneNumber, warrantyCodes }) => ({
        url: `/warranty-claim/check-warranty`,
        method: "POST",
        body: { phoneNumber, warrantyCodes },
      }),
    }),
    claimRequest: builder.mutation({
      query: (formData) => ({
        url: "/warranty-claim/",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCheckWarrantyQuery, useClaimRequestMutation } =
  warrantyApiSlice;
// Corrected capitalization
