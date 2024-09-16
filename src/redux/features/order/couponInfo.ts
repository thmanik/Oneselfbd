import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the coupon
type TCouponState = {
  coupon: string | null;
  percentage: number | null;
  maxDiscountAmount: number | null;
  error: string | null;
};

const initialState: TCouponState = {
  coupon: null,
  percentage: null,
  maxDiscountAmount: null,
  error: null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupon: (
      state,
      action: PayloadAction<{
        coupon: string;
        percentage: number;
        maxDiscountAmount: number;
      }>
    ) => {
      state.coupon = action.payload.coupon; // Set the coupon code
      state.percentage = action.payload.percentage; // Set the discount percentage
      state.maxDiscountAmount = action.payload.maxDiscountAmount; // Set the maximum discount amount
      state.error = null; // Reset the error when a valid coupon is applied
    },
    setCouponError: (state, action: PayloadAction<string>) => {
      state.error = action.payload; // Set an error if the coupon is invalid
    },
    resetCoupon: (state) => {
      state.coupon = null; // Reset the coupon code
      state.percentage = null; // Reset the percentage
      state.maxDiscountAmount = null; // Reset the max discount amount
      state.error = null; // Clear any existing error
    },
  },
});

// Export actions
export const { setCoupon, setCouponError, resetCoupon } = couponSlice.actions;

// Export the reducer
export default couponSlice.reducer;
