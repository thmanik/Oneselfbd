"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import baseApi from "./baseApi/baseApi";
import paymentInfo from "./features/order/paymentInfo";
import shippingInfo from "./features/order/shippingInfo";

import { searchProductApi } from "./features/searchProduct/searchProuctApi";
import shippingClass from "./features/shippingClasses/shippingClass";
import { tableDataSlice } from "./features/tableData/tableData";
import { userApi } from "./features/user/userApi";
import { warrantyApiSlice } from "./features/warrantyApi/warrantyApiSlice";
const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    warrantyApiSlice: warrantyApiSlice.reducer,
    userApi: userApi.reducer,
    searchProductApi: searchProductApi.reducer,
    auth: persistedAuthReducer,
    shippingClass: shippingClass,
    paymentInfo: paymentInfo,
    shippingInfo: shippingInfo,
    tableData: tableDataSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

persistStore(store);
