import baseApi from "@/redux/baseApi/baseApi";

const TrackOrder = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    OderTracker: builder.query({
      query: (_id) => `/orders/track/${_id}`,
    }),
  }),
});

export const { useOderTrackerQuery } = TrackOrder;
