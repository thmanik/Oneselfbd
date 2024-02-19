"use client";

import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import useCart from "@/hooks/useCart";
import { MdOutlineShoppingBag } from "react-icons/md";

const CartData = () => {
  const { totalCartItem, totalCost, isLoading } = useCart();

  return (
    <>
      <span>
        <span className="relative">
          <MdOutlineShoppingBag className="w-6 h-6" />
          <span className="absolute -bottom-3 -right-1">
            <Badge variant="outline" className="bg-primary text-white">
              {isLoading ? (
                <Skeleton className="h-4 w-4 md:w-12 rounded-full" />
              ) : (
                <>{totalCartItem ?? 0}</>
              )}
            </Badge>
          </span>
        </span>
      </span>
      <span className="flex items-center gap-1">
        {isLoading ? (
          <Skeleton className="h-4 w-4 md:w-12" />
        ) : (
          <>
            &#2547; <span> {totalCost}</span>
          </>
        )}
      </span>
    </>
  );
};

export default CartData;
