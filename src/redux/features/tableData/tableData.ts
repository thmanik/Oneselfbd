// tableDataSlice.ts

import { Shipping } from "@/app/warranty/find-your-product/components/commonTypes/CommonTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductToClaim = {
  warrantyCodes: string[];
  shippingDetails: Shipping;
};

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState: [] as ProductToClaim[],
  reducers: {
    setTableDataToClaim: (state, action: PayloadAction<ProductToClaim[]>) => {
      return action.payload;
    },
  },
});

export const { setTableDataToClaim } = tableDataSlice.actions;

export default tableDataSlice.reducer;
