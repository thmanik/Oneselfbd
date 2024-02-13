"use client";
import CartItem from "@/components/cartItems/components/CartItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCart from "@/hooks/useCart";
import { TCartItem } from "@/types/cart";

const CartItems = ({ basUrl }: { basUrl?: string }) => {
  const { data: cartItems, isLoading } = useCart();

  return (
    <>
      <Table>
        <TableCaption>Your cart items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Product</TableHead>
            <TableHead>price</TableHead>
            <TableHead>quantity</TableHead>
            <TableHead>Attributes</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(cartItems?.data?.cartItems as TCartItem[])?.map((item) => (
            <CartItem key={item._id} cartItem={item.item} basUrl={basUrl} />
          ))}
        </TableBody>
      </Table>
      {isLoading ? "Please wait..." : ""}
    </>
  );
};

export default CartItems;
