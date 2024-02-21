"use client";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { TSingleProduct } from "@/types/products/singleProduct";
import { useState } from "react";
import AddToCartAndBuyNow from "../components/AddToCartAndBuyNow";

const SingleProductClientContent = ({
  product,
}: {
  product: TSingleProduct;
}) => {
  // add to cart handler
  const [quantity, setQuantity] = useState(1);
  const [addToCart, addToCartStatus] = useAddToCartMutation();
  const addToCartHandler = () => {
    const cartInfo = {
      product: product._id,
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
