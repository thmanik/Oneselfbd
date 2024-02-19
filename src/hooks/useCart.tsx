"use client";
import { useCartQuery } from "@/redux/features/cart/cartApi";
import { TCart } from "@/types/cart";

const useCart = () => {
  const { data, isLoading } = useCartQuery({});
  let totalCartItem = 0;
  let totalCost = 0;
  if (data?.success) {
    totalCartItem = data?.data?.cartItems.length;
    (data?.data as TCart)?.cartItems?.forEach(({ item }) => {
      const price = item.product.price.salePrice
        ? item.product.price.salePrice
        : item.product.price.regularPrice;
      const currentProductCost = item.quantity * price;

      totalCost += currentProductCost;
    });
  }
  totalCost = Number(totalCost.toFixed(2));
  // console.log(totalCost);
  return { data, isLoading, totalCartItem, totalCost };
};

export default useCart;