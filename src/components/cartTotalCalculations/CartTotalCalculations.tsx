"use client";
import useCart from "@/hooks/useCart";
import { setShipping } from "@/redux/features/shippingClasses/shippingClass";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "../ui/skeleton";

const CartTotalCalculations = ({
  shippingCharges,
}: {
  shippingCharges: TShippingCharges[];
}) => {
  const selectedShipping = useSelector(
    (state: TRootState) => state.shippingClass
  );
  const { totalCost, isLoading } = useCart();
  const dispatch = useDispatch();

  const handleShippingChargeChange = (id: string, amount: number) => {
    dispatch(setShipping({ _id: id, amount }));
  };
  useEffect(() => {
    if (!selectedShipping._id) {
      dispatch(
        setShipping({
          _id: shippingCharges[0]._id,
          amount: shippingCharges[0].amount,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedShipping._id]);
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
      <div className="flex justify-between items-center py-3 px-2 border-b-2">
        <div>
          <h2 className="font-bold">Shipping</h2>
        </div>
        <div className=" flex flex-col items-end">
          {shippingCharges.map((item) => (
            <div key={item._id} className="py-1">
              <label
                htmlFor={item?._id}
                className="select-none px-2 font-semibold text-sm cursor-pointer"
              >
                {item?.name}:{" "}
                <span className="text-secondary">{item.amount} &#2547;</span>
              </label>
              <input
                type="radio"
                id={item?._id}
                name="shipping_name"
                value={item?._id}
                checked={selectedShipping._id === item?._id}
                onChange={() =>
                  handleShippingChargeChange(item?._id, item?.amount)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between py-3 px-2">
        <p className="font-bold">Total</p>
        <div className="font-bold">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <>{totalCost + selectedShipping.amount} &#2547;</>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotalCalculations;
