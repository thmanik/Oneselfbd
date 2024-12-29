// import config from "@/config/config";
// import {
//   BaseQueryFn,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";
// import { logOut, setUser } from "../features/auth/authSlice";
// import { RootState } from "../store";

// const baseUrl = `${config.base_url}/api/v1`;

// const baseQuery = fetchBaseQuery({
//   baseUrl,
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;
//     // If we have a token set in state, let's assume that we should be passing it.
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const customBaseQueryWithRefreshToken: BaseQueryFn = async (
//   args,
//   api,
//   extraOptions
// ) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.status === 401) {
//     // request for getting access token
//     const res = await fetch(`${baseUrl}/auth/refresh-token`, {
//       method: "POST",
//       credentials: "include",
//     });
//     const data = await res.json();
//     if (data.data?.accessToken) {
//       const user = (api.getState() as RootState).auth.user;
//       api.dispatch(setUser({ user: user, token: data.data.accessToken }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

// const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: customBaseQueryWithRefreshToken,
//   endpoints: () => ({}),
//   tagTypes: ["carts", "UserProfile"],
// });

// export default baseApi;

import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logOut, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

// Define the base URL for your API
const baseUrl = `https://electrocommerce.mustaqim.site/api/v1`;
//electrocommerce.mustaqim.site
// Create a base query using fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Create a custom base query that handles token refresh
const customBaseQueryWithRefreshToken: BaseQueryFn = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check for 401 Unauthorized response
  if (result?.error?.status === 401) {
    // Request for getting access token
    const res = await fetch(`${baseUrl}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    // Check if we received a new access token
    if (data.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      // Ensure user is not null before dispatching setUser
      if (user) {
        api.dispatch(setUser({ user: user, token: data.data.accessToken }));
      }
      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // If no new token, log out the user
      api.dispatch(logOut());
    }
  }
  return result;
};

// Create the base API instance
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["carts", "UserProfile"],
});

// Export the base API instance
export default baseApi;
