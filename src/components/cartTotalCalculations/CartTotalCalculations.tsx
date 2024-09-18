"use client";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { useSelector } from "react-redux";

import SelectShippingMethod from "../selectShippingMethod/SelectShippingMethod";
import { Skeleton } from "../ui/skeleton";

const CartTotalCalculations = ({
  shippingCharges,
  totalCost,
  costLoading = false,
}: {
  shippingCharges?: TShippingCharges[];
  totalCost?: number;
  costLoading?: boolean;
}) => {
  const selectedShipping = useSelector(
    (state: TRootState) => state.shippingClass
  );

  const couponInfo = useSelector((state: TRootState) => state.coupon);

  const discount = (couponInfo.percentage / 100) * (totalCost ? totalCost : 0);

  const applicableDiscount =
    discount > couponInfo.maxDiscountAmount
      ? couponInfo.maxDiscountAmount
      : discount;

  // Calculate ultimateTotalCost
  const ultimateTotalCost = (totalCost ? totalCost : 0) - applicableDiscount;

  // Add shipping amount if there is a selected shipping method
  const totalWithShipping = ultimateTotalCost + (selectedShipping.amount || 0);

  return (
    <div>
      <div className="flex gap-2 justify-between items-center py-5 px-2 border-b-2">
        <span className="font-bold">Subtotal</span>
        <span className="text-sm font-semibold">
          {costLoading ? (
            <>
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <>{totalCost} &#2547;</>
          )}
        </span>
      </div>
      <SelectShippingMethod shippingCharges={shippingCharges} />

      <div className="flex justify-between py-3 px-2">
        <p className="font-bold">Total</p>
        <div className="font-bold">
          {costLoading ? (
            <>
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <>{totalWithShipping} &#2547;</>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotalCalculations;
