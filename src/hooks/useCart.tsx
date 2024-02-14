"use client";
import { useCartQuery } from "@/redux/features/cart/cartApi";
import { TCart } from "@/types/cart";

const useCart = () => {
  const { data } = useCartQuery({});
  let totalCartItem = 0;
  let totalCost = 0;
  if (data?.success) {
    totalCartItem = data?.data?.cartItems.length;
    (data?.data as TCart)?.cartItems?.forEach(({ item }) => {
      const currentProductCost =
        item.quantity * item.product.price.salePrice
          ? item.product.price.salePrice
          : item.product.price.regularPrice;
      totalCost += currentProductCost;
    });
  }
  totalCost = Number(totalCost.toFixed(2));
  return { data, totalCartItem, totalCost };
};

export default useCart;
