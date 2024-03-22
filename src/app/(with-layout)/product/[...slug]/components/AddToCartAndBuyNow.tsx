"use client";
import Quantity from "@/app/(with-layout)/checkout/components/paymentGateway/Quantity";
import EcButton from "@/components/EcButton/EcButton";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const AddToCartAndBuyNow = ({
  quantity,
  setQuantity,
  addToCartHandler,
  isAddToCartLoading,
}: {
  addToCartHandler: () => Promise<boolean>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  isAddToCartLoading: boolean;
}) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    await addToCartHandler();
  };
  const handleBuyNow = async () => {
    const isSuccess = await addToCartHandler();
    if (isSuccess) {
      router.push("/checkout");
    }
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        <p>Quantity: </p>{" "}
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex gap-3 mt-4">
        <div className="flex-grow flex gap-2">
          <EcButton
            className="flex-grow text-white"
            onClick={handleAddToCart}
            disabled={isAddToCartLoading}
            id="addToCart"
          >
            Add to cart
          </EcButton>
          <EcButton
            className="flex-grow text-white"
            onClick={handleBuyNow}
            disabled={isAddToCartLoading}
            variant="secondary"
          >
            Buy now
          </EcButton>
        </div>
      </div>
    </>
  );
};

export default AddToCartAndBuyNow;
