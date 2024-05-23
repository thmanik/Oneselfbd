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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import baseApi from "./baseApi/baseApi";

import { apiSlice } from "./features/api/apiSlice";
import paymentInfo from "./features/order/paymentInfo";
import shippingInfo from "./features/order/shippingInfo";
import shippingClass from "./features/shippingClasses/shippingClass";
import { tableDataSlice } from "./features/tableData/tableData";
const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    apiSlice: apiSlice.reducer,
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
