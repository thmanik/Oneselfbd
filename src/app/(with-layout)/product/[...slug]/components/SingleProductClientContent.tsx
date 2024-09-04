// SingleProductClientContent.tsx

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
  selectedVariation,
}: {
  product?: TSingleProduct;
  selectedVariation?: TSingleProduct["variations"][0];
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addToCart, { isLoading: isAddToCartLoading }] = useAddToCartMutation();

  const addToCartHandler = async (): Promise<boolean> => {
    let success = false;

    // Facebook Pixel event tracking
    fbq.event("AddToCart", {
      content_name: product?.title,
      content_category: product?.category,
      content_ids: [product?._id],
      content_type: "product",
      variation: selectedVariation?._id,
      value:
        Number(
          selectedVariation?.price?.salePrice
            ? selectedVariation?.price?.salePrice
            : product?.price?.regularPrice
        ) * Number(quantity || 0),
      currency: "BDT",
    });

    // Prepare cart info to match the server's expected format
    const cartInfo = {
      product: product?._id,
      quantity,
      variation: selectedVariation?._id, // Send variation as a top-level field
    };

    try {
      const result = (await addToCart(cartInfo).unwrap()) as TGenericResponse;
      if (result.success) {
        toast({
          title: "Success",
          description: result?.message,
          className: "bg-success text-white text-2xl",
        });
        success = true;
      }
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

  // Ensure isDisabled is a boolean value
  const isDisabled = !!(
    product?.variations &&
    product.variations.length > 0 &&
    !selectedVariation
  );

  return (
    <div>
      <AddToCartAndBuyNow
        quantity={quantity}
        setQuantity={setQuantity}
        addToCartHandler={addToCartHandler}
        isAddToCartLoading={isAddToCartLoading}
        isDisabled={isDisabled} // Pass the isDisabled prop
      />
    </div>
  );
};

export default SingleProductClientContent;
