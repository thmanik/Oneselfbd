"use client";

import EcButton from "@/components/EcButton/EcButton";
import CartItems from "@/components/cartItems/CartItems";
import ContainerMax from "@/components/containerMax/ContainerMax";
import Box from "@/components/ui/ec/Box";
import useCart from "@/hooks/useCart";

import TShippingCharges from "@/types/shippingCharge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartCalculation from "./CartCalculation";

const CartPageComponent = ({
  shippingCharges,
}: {
  shippingCharges: TShippingCharges[] | undefined;
}) => {
  const { data: cartItems } = useCart();
  const router = useRouter();
  // const [{ data: shippingCharges }] =
  //   await useQuery<TShippingCharges[]>("/shipping-charges");

  return (
    <section className="pt-10 md:pt-20 mb-10">
      <ContainerMax>
        {cartItems?.data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Box className="col-span-1 md:col-span-2">
              <CartItems />
            </Box>
            <Box>
              <h2 className="font-bold border-b-2 p-2">Cart total</h2>
              <CartCalculation shippingCharges={shippingCharges} />
              <div>
                <Link href="/checkout" className="block">
                  <EcButton className="w-full mt-2 bg-muted hover:bg-secondary text-white">
                    Proceed to checkout
                  </EcButton>
                </Link>
              </div>
            </Box>
          </div>
        ) : (
          <div className="text-center p-6">
            <p className="text-xl  text-gray-600 mb-4">
              There are no items in this cart
            </p>
            <EcButton
              onClick={() => router.push("/shop")}
              className="text-white"
            >
              CONTINUE SHOPPING
            </EcButton>
          </div>
        )}
      </ContainerMax>
    </section>
  );
};

export default CartPageComponent;
