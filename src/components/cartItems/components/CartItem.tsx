"use client";
import Quantity from "@/app/(with-layout)/checkout/components/paymentGateway/Quantity";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateCartQuantityMutation } from "@/redux/features/cart/cartApi";
import { TCartItemData } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import EcButton from "../../EcButton/EcButton";
import { TableCell, TableRow } from "../../ui/table";

const CartItem = ({
  cartItem,
  handleRemoveFromCart,
}: {
  cartItem: TCartItemData;
  // eslint-disable-next-line no-unused-vars
  handleRemoveFromCart: (itemId: string) => void;
}) => {
  const [quantity, setQuantity] = useState(cartItem?.quantity);
  const { toast } = useToast();
  const [updateQuantity, { isLoading }] = useUpdateCartQuantityMutation();
  const price = cartItem?.price?.salePrice
    ? cartItem?.price?.salePrice
    : cartItem?.price?.regularPrice;

  const callBack = async (newQuantity: number) => {
    const res = await updateQuantity({
      cartItemId: cartItem?._id,
      quantity: newQuantity,
    }).unwrap();

    if (res?.success) {
      setQuantity(cartItem?.quantity);
      toast({
        title: "Success",
        description: res?.message,
        className: "bg-success text-white text-2xl",
      });
    }
  };

  useEffect(() => {
    setQuantity(cartItem?.quantity);
  }, [cartItem?.quantity]);

  return (
    <TableRow>
      <TableCell className="font-medium flex gap-3 items-center justify-center min-w-48">
        <EcButton
          className="rounded-full w-6 h-6 md:w-10 md:h-10 p-0 hover:text-white hover:bg-secondary"
          variant="ghost"
          type="icon"
          onClick={() => handleRemoveFromCart(cartItem?._id)}
        >
          <IoCloseSharp className="w-3 h-3 md:w-5 md:h-5" />
        </EcButton>

        <Link
          href={`/product/${cartItem?.product?._id}`}
          className="hover:text-secondary flex-grow flex flex-col gap-3 justify-center items-center font-semibold flex-wrap text-center"
        >
          <Image
            src={cartItem?.product?.image?.src || ""}
            alt={cartItem?.product?.image?.alt || ""}
            height={200}
            width={200}
            className="w-14 h-14 md:w-20 md:h-20 mx-auto"
          />
          <span className="text-xs md:text-base">
            {cartItem?.product?.title}
          </span>
        </Link>
      </TableCell>
      <TableCell className="min-w-24">&#2547; {price}</TableCell>
      <TableCell className="flex justify-center items-center">
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          callBack={callBack}
        />
      </TableCell>
      <TableCell className="text-right min-w-24">
        {isLoading ? (
          "Loading..."
        ) : (
          <>&#2547; {(price * cartItem?.quantity)?.toFixed(2)}</>
        )}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
