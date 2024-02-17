import EcButton from "@/components/EcButton/EcButton";
import CartItems from "@/components/cartItems/CartItems";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ContainerMax from "@/components/containerMax/ContainerMax";
import config from "@/config/config";
import useQuery from "@/hooks/useQuery";
import TShippingCharges from "@/types/shippingCharge";
import Link from "next/link";

const CartPage = async () => {
  const { data } = await useQuery("/shipping-charges");
  const shippingCharges = (data?.data as unknown as TShippingCharges[]) ?? [];
  return (
    <section className="pt-10 md:pt-20">
      <ContainerMax>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-2 ring-1 shadow-md rounded-md p-5 ring-base-100">
            <CartItems basUrl={config.base_url} />
          </div>
          <div className="ring-1 shadow-md rounded-md p-5 ring-base-100">
            <h2 className="font-bold border-b-2 p-2">Cart total</h2>
            <CartTotalCalculations shippingCharges={shippingCharges} />
            <div>
              <Link href="/checkout" className="block">
                <EcButton className="w-full mt-2 bg-muted hover:bg-secondary text-white">
                  Proceed to checkout
                </EcButton>
              </Link>
            </div>
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default CartPage;
