"use client";
import useCart from "@/hooks/useCart";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { useSelector } from "react-redux";
import SelectShippingMethod from "../selectShippingMethod/selectShippingMethod";
import { Skeleton } from "../ui/skeleton";

const CartTotalCalculations = ({
  shippingCharges,
}: {
  shippingCharges?: TShippingCharges[];
}) => {
  const selectedShipping = useSelector(
    (state: TRootState) => state.shippingClass
  );
  const { totalCost, isLoading } = useCart();

  return (
    <div>
      <div className="flex gap-2 justify-between items-center py-5 px-2 border-b-2">
        <span className="font-bold">Subtotal</span>
        <span className="text-sm font-semibold">
          {isLoading ? (
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
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <>
              {totalCost + selectedShipping.amount
                ? totalCost + selectedShipping.amount
                : 0}{" "}
              &#2547;
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotalCalculations;
