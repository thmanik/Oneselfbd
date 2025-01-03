"use client";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import useCart from "@/hooks/useCart";
import TShippingCharges from "@/types/shippingCharge";

const CartCalculation = ({
  shippingCharges,
}: {
  shippingCharges?: TShippingCharges[];
}) => {
  const { totalCost, isLoading: cartCostLoading } = useCart();

  // Get the coupon info from Redux store

  return (
    <>
      <CartTotalCalculations
        shippingCharges={shippingCharges}
        totalCost={totalCost}
        costLoading={cartCostLoading}
      />
    </>
  );
};

export default CartCalculation;
