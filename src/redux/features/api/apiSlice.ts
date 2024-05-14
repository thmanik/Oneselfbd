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

export const apiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkWarranty: builder.query({
      query: ({ phoneNumber, warrantyCodes }) => ({
        url: `/warranty-claim/check-warranty`,
        method: "POST",
        body: { phoneNumber, warrantyCodes },
      }),
    }),
  }),
});

export const { useCheckWarrantyQuery } = apiSlice;
// Corrected capitalization
