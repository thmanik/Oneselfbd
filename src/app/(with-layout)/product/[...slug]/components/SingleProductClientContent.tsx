"use client";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { TSingleProduct } from "@/types/products/singleProduct";
import { useState } from "react";
import * as fbq from "../../../../../lib/connectors/FacebookPixel";
import AddToCartAndBuyNow from "../components/AddToCartAndBuyNow";

const SingleProductClientContent = ({
  product,
}: {
  product?: TSingleProduct;
}) => {
  // add to cart handler
  const [quantity, setQuantity] = useState(1);

  const [addToCart, addToCartStatus] = useAddToCartMutation();
  const addToCartHandler = () => {
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
    addToCart(cartInfo);
  };

  return (
    <div>
      <AddToCartAndBuyNow
        quantity={quantity}
        setQuantity={setQuantity}
        addToCartHandler={addToCartHandler}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        addToCartStatus={addToCartStatus as any}
      />
    </div>
  );
};

export default SingleProductClientContent;
