import ContainerMax from "@/components/containerMax/ContainerMax";
import config from "@/config/config";
import useQuery from "@/hooks/useQuery";
import TShippingCharges from "@/types/shippingCharge";
import CheckoutPageContent from "./components/CheckoutPageContent";

const Checkout = async () => {
  const { data } = await useQuery("/shipping-charges");
  const shippingCharges = (data?.data as unknown as TShippingCharges[]) ?? [];
  return (
    <section className="mt-20">
      <ContainerMax>
        <CheckoutPageContent
          shippingCharges={shippingCharges}
          baseUrl={config.base_url as string}
        />
      </ContainerMax>
    </section>
  );
};

export default Checkout;
