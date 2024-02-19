"use client";
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
  basUrl,
  handleRemoveFromCart,
}: {
  cartItem: TCartItemData;
  basUrl?: string;
  // eslint-disable-next-line no-unused-vars
  handleRemoveFromCart: (itemId: string) => void;
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { toast } = useToast();
  const [updateQuantity, { data, isLoading }] = useUpdateCartQuantityMutation();
  const price = cartItem.product.price.salePrice
    ? cartItem.product.price.salePrice
    : cartItem.product.price.regularPrice;
  const quantityUpdateHandler = (command: "inc" | "dec") => {
    let newQuantity = quantity;
    if (command === "inc") {
      newQuantity += 1;
    } else if (command === "dec") {
      newQuantity -= 1;
    }
    updateQuantity({
      cartItemId: cartItem._id,
      quantity: newQuantity,
    });
  };
  useEffect(() => {
    if (data?.success) {
      setQuantity(cartItem.quantity);
      toast({
        title: "Success",
        description: data.message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  useEffect(() => {
    setQuantity(cartItem.quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem.quantity]);
  return (
    <TableRow>
      <TableCell className="font-medium flex gap-3 items-center justify-center min-w-48">
        <EcButton
          className="rounded-full w-6 h-6 md:w-10 md:h-10 p-0 hover:text-white hover:bg-secondary"
          variant="ghost"
          type="icon"
          onClick={() => handleRemoveFromCart(cartItem._id)}
        >
          <IoCloseSharp className="w-3 h-3 md:w-5 md:h-5" />
        </EcButton>

        <Link
          href={`/products/slug/${cartItem.product.slug}`}
          className="hover:text-secondary flex-grow flex gap-3 justify-center items-center font-bold flex-wrap text-center"
        >
          <Image
            src={`${basUrl}/uploads/public${cartItem?.product?.image?.thumbnail?.src}`}
            alt={cartItem?.product?.image?.thumbnail?.alt}
            height={200}
            width={200}
            className="w-14 h-14 md:w-20 md:h-20 mx-auto"
          />
          <span className="text-xs md:text-base">{cartItem.product.title}</span>
        </Link>
      </TableCell>
      <TableCell className="min-w-24">&#2547; {price}</TableCell>
      <TableCell className="flex items-center">
        <EcButton
          variant="ghost"
          className="text-xl hover:text-white hover:bg-secondary"
          onClick={() => quantityUpdateHandler("dec")}
        >
          -
        </EcButton>
        <div className="w-10 p-3 select-none">{quantity}</div>

        <EcButton
          variant="ghost"
          className="text-xl hover:text-white hover:bg-secondary"
          onClick={() => quantityUpdateHandler("inc")}
        >
          +
        </EcButton>
      </TableCell>
      <TableCell>
        {cartItem.attributes.map((item) => (
          <div key={item._id} className="uppercase">
            <span className="capitalize font-bold">{item.name}</span> :{" "}
            {item.value}
          </div>
        ))}
      </TableCell>
      <TableCell className="text-right min-w-24">
        {isLoading ? (
          "Loading..."
        ) : (
          <>&#2547; {(price * cartItem.quantity).toFixed(2)}</>
        )}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
