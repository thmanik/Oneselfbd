"use client";
import { Input } from "@/components/ui/input";
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
}: {
  cartItem: TCartItemData;
  basUrl?: string;
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [updateQuantity] = useUpdateCartQuantityMutation();
  const price = cartItem.product.price.salePrice
    ? cartItem.product.price.salePrice
    : cartItem.product.price.regularPrice;

  const quantityUpdateHandler = (command: "inc" | "dec") => {
    if (command === "inc") {
      setQuantity(quantity + 1);
    } else if (command === "dec") {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    updateQuantity({
      cartItemId: cartItem._id,
      quantity,
    });
  }, [quantity]);
  // eslint-disable-next-line no-console
  // console.log(data);
  return (
    <TableRow>
      <TableCell className="font-medium flex gap-3 items-center justify-center">
        <EcButton
          className="rounded-full w-10 h-10 p-0 hover:text-white"
          variant="ghost"
          type="icon"
        >
          <IoCloseSharp className="w-5 h-5" />
        </EcButton>

        <Link
          href={`/products/slug/${cartItem.product.slug}`}
          className="hover:text-secondary flex-grow flex gap-3 items-center font-bold"
        >
          <Image
            src={`${basUrl}/uploads/public${cartItem?.product?.image?.thumbnail?.src}`}
            alt={cartItem?.product?.image?.thumbnail?.alt}
            height={200}
            width={200}
            className="w-20 h-20"
          />

          <span>{cartItem.product.title}</span>
        </Link>
      </TableCell>
      <TableCell> &#2547; {price}</TableCell>
      <TableCell className="flex">
        <EcButton
          variant="ghost"
          className="text-xl hover:text-white hover:bg-secondary"
          onClick={() => quantityUpdateHandler("dec")}
        >
          -
        </EcButton>
        <Input
          defaultValue={quantity}
          className="w-11 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <EcButton
          variant="ghost"
          className="text-xl hover:text-white hover:bg-secondary"
          onClick={() => quantityUpdateHandler("inc")}
        >
          +
        </EcButton>
        <input type="number" defaultValue={quantity} />
      </TableCell>
      <TableCell>
        {cartItem.attributes.map((item) => (
          <div key={item._id}>
            <span className="capitalize">{item.name}</span> : {item.value}
          </div>
        ))}
      </TableCell>
      <TableCell className="text-right">
        &#2547; {(price * cartItem.quantity).toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
