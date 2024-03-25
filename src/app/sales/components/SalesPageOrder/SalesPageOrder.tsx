import ContainerMax from "@/components/containerMax/ContainerMax";
import useQuery from "@/hooks/useQuery";
import { TPaymentMethod } from "@/types/paymentMethod";
import { TSingleProduct } from "@/types/products/singleProduct";
import TShippingCharges from "@/types/shippingCharge";
import SalesHeadingPrimary from "../ui/SalesHeadingPrimary/SalesHeadingPrimary";
import SalesPageShipping from "./SalesPageShipping";

const SalesPageOrder = async ({ product }: { product?: TSingleProduct }) => {
  const [{ data: shippingCharges = [] }] =
    await useQuery<TShippingCharges[]>("/shipping-charges");
  const [{ data: paymentMethods = [] }] =
    await useQuery<TPaymentMethod[]>("/payment-method");

  return (
    <section id="order-form" className="bg-red-0">
      <ContainerMax>
        <SalesHeadingPrimary
          title="তাই আর দেরি না করে আজই অর্ডার করুন"
          className="pt-20"
        />
        <SalesPageShipping
          paymentMethods={paymentMethods}
          shippingCharges={shippingCharges}
          product={product}
        />
      </ContainerMax>
    </section>
  );
};

export default SalesPageOrder;
