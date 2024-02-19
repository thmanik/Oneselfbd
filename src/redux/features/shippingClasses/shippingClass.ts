import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  _id: string;
  amount: 0;
};

const initialState: TInitialState = {
  _id: "",
  amount: 0,
};

const shippingClass = createSlice({
  name: "shippingClass",
  initialState,
  reducers: {
    setShipping: (state, { payload }) => {
      state._id = payload._id;
      state.amount = payload.amount;
    },
  },
});

export const { setShipping } = shippingClass.actions;

export default shippingClass.reducer;
