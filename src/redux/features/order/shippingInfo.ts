import { TShippingInfoState } from "@/types/order/shippingInfo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TShippingInfoState = {
  data: null,
  errors: null,
  fullAddress: "",
  fullName: "",
  phoneNumber: "",
  notes: "",
  email: undefined,
};

const shippingInfo = createSlice({
  name: "shippingInfo",
  initialState,
  reducers: {
    setShippingInfo: (state, { payload }) => {
      state.data = payload;
    },
    setShippingInfoError: (state, { payload }) => {
      state.errors = payload?.errors;
    },
  },
});

export const { setShippingInfo, setShippingInfoError } = shippingInfo.actions;

export default shippingInfo.reducer;

// import { TShippingInfoState } from "@/types/order/shippingInfo";
// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// const initialState: TShippingInfoState = {
//   data: null,
//   errors: null,
//   fullAddress: "",
//   fullName: "",
//   phoneNumber: "",
//   notes: "",
//   email: undefined,
// };

// const shippingInfo = createSlice({
//   name: "shippingInfo",
//   initialState,
//   reducers: {
//     setShippingInfo: (state, action: PayloadAction<TShippingInfoState>) => {
//       state.data = action.payload;
//     },
//     setShippingInfoError: (state, { payload }) => {
//       state.errors = payload?.errors;
//     },
//   },
// });

// export const { setShippingInfo, setShippingInfoError } = shippingInfo.actions;

// export default shippingInfo.reducer;
