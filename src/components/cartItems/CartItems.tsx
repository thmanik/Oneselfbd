"use client";
import CartItem from "@/components/cartItems/components/CartItem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import useCart from "@/hooks/useCart";
import { useDeleteFromCartMutation } from "@/redux/features/cart/cartApi";
import { TCartItem } from "@/types/cart";
import CartItemSkeleton from "./components/CartItemSkeleton";

const CartItems = () => {
  const [deleteFromCart] = useDeleteFromCartMutation();
  const { data: cartItems, isLoading } = useCart();
  const { toast } = useToast();

  // delete an item from cart
  const handleRemoveFromCart = async (itemId: string) => {
    try {
      const res = await deleteFromCart({ itemId }).unwrap();
      if (res?.success) {
        toast({
          title: "Success",
          description: res.message,
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: "Success",
        description: error.message,
      });
    }
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            {/* <TableHead>Attributes</TableHead> */}
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            [1, 2, 3].map((item) => <CartItemSkeleton key={item} />)
          ) : (
            <>
              {(cartItems?.data?.cartItems as TCartItem[])?.map((item) => (
                <CartItem
                  key={item._id}
                  cartItem={item.item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default CartItems;
