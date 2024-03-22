"use client";
import { toast } from "@/components/ui/use-toast";
import * as fbq from "@/lib/connectors/FacebookPixel";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { TSingleProduct } from "@/types/products/singleProduct";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { useState } from "react";
import AddToCartAndBuyNow from "../components/AddToCartAndBuyNow";

const SingleProductClientContent = ({
  product,
}: {
  product?: TSingleProduct;
}) => {
  // add to cart handler
  const [quantity, setQuantity] = useState(1);

  const [addToCart, { isLoading: isAddToCartLoading }] = useAddToCartMutation();
  const addToCartHandler = async (): Promise<boolean> => {
    let success = false;
    fbq.event("AddToCart", {
      content_name: product?.title,
      content_category: product?.category,
      content_ids: [product?._id],
      content_type: "product",
      value: Number(product?.price) * (Number.isNaN(quantity) ? 0 : quantity), // Product price
      currency: "BDT",
    });
    const cartInfo = {
      product: product?._id,
      quantity,
      attributes: [
        {
          name: "Size",
          value: "xl",
        },
        {
          name: "brand",
          value: "db",
        },
      ],
    };
    try {
      const result = (await addToCart(cartInfo).unwrap()) as TGenericResponse;
      if (result.success) {
        toast({
          title: "Success",
          description: result?.message,
          className: "bg-success text-white text-2xl",
        });
      }
      success = true;
    } catch (error) {
      const sanitizedError = error as TGenericErrorResponse;
      toast({
        title: "Failed",
        description: sanitizedError.message,
      });
      success = false;
    }
    return success;
  };
  return (
    <div>
      <AddToCartAndBuyNow
        quantity={quantity}
        setQuantity={setQuantity}
        addToCartHandler={addToCartHandler}
        isAddToCartLoading={isAddToCartLoading}
      />
    </div>
  );
};

export default SingleProductClientContent;
