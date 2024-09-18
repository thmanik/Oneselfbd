import ContainerMax from "@/components/containerMax/ContainerMax";
import useQuery from "@/hooks/useQuery";
import { TPaymentMethod } from "@/types/paymentMethod";
import TShippingCharges from "@/types/shippingCharge";
import CheckoutPageContent from "./components/CheckoutPageContent";

const Checkout = async () => {
  const [{ data: shippingCharges = [] }] =
    await useQuery<TShippingCharges[]>("/shipping-charges");
  const [{ data: paymentMethods = [] }] =
    await useQuery<TPaymentMethod[]>("/payment-method");

  return (
    <section className="mt-3">
      <ContainerMax>
        <CheckoutPageContent
          shippingCharges={shippingCharges}
          paymentMethods={paymentMethods}
        />
      </ContainerMax>
    </section>
  );
};

export default Checkout;
