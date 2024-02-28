import { TPaymentInfoState } from "@/types/order/paymentInfo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TPaymentInfoState = {
  data: null,
  errors: null,
};

const paymentInfo = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    setPaymentInfo: (state, { payload }) => {
      state.data = payload;
    },
    setPaymentInfoError: (state, { payload }) => {
      state.errors = payload?.errors;
    },
  },
});

export const { setPaymentInfo, setPaymentInfoError } = paymentInfo.actions;

export default paymentInfo.reducer;
