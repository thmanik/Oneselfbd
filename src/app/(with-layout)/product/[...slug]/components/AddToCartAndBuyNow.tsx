"use client";
import Quantity from "@/app/(with-layout)/checkout/components/paymentGateway/Quantity";
import EcButton from "@/components/EcButton/EcButton";
// import CartQuantityChangeBtn from "@/components/cartQuantityChangeBtn/CartQuantityChangeBtn";
import { toast } from "@/components/ui/use-toast";
import TGenericResponse from "@/types/response";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const AddToCartAndBuyNow = ({
  quantity,
  setQuantity,
  addToCartHandler,
  addToCartStatus,
}: {
  addToCartHandler: () => void;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  addToCartStatus: {
    data: TGenericResponse;
    isLoading: boolean;
  };
}) => {
  const [needRedirect, setNeedRedirect] = useState(0);
  const { data, isLoading } = addToCartStatus;
  const router = useRouter();

  const handleAddToCart = () => {
    addToCartHandler();
  };
  const handleBuyNow = () => {
    addToCartHandler();
    setNeedRedirect(needRedirect + 1);
  };

  useEffect(() => {
    if (data?.success) {
      toast({
        title: "Success",
        description: data?.message,
        className: "bg-success text-white text-2xl",
      });
    }
  }, [data?.success, data?.message]);

  useEffect(() => {
    if (needRedirect) {
      router.push("/checkout");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.success]);

  return (
    <>
      <div className="flex gap-3 items-center">
        <p>Quantity: </p>{" "}
        {/* <CartQuantityChangeBtn quantity={quantity} setQuantity={setQuantity} /> */}
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex gap-3 mt-4">
        <div className="flex-grow flex gap-2">
          <EcButton
            className="flex-grow text-white"
            onClick={handleAddToCart}
            disabled={isLoading}
            id="addToCart"
          >
            Add to cart
          </EcButton>
          <EcButton
            className="flex-grow text-white"
            onClick={handleBuyNow}
            disabled={isLoading}
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
