import baseApi from "@/redux/baseApi/baseApi";

const TrackOrder = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    OderTracker: builder.query({
      query: (orderId) => `/orders/track/${orderId}`,
    }),
  }),
});

export const { useOderTrackerQuery } = TrackOrder;
