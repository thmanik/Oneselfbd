import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import useQuery from "@/hooks/useQuery";
import { TOrderInfo } from "@/types/order/orderInfo";
import ThankYouCard from "./components/ThankYouCard";

type TThankYouPage = {
  params: { orderId: string };
};

const ThankYouPage = async ({ params }: TThankYouPage) => {
  const [{ data: orderInfo }] = await useQuery<TOrderInfo>(
    `/orders/${params.orderId}`
  );

  if (!orderInfo) {
    return (
      <ErrorMessage
        className="text-center py-3 block"
        message="No order found with this ID."
      />
    );
  }

  return (
    <section>
      <ContainerMax>
        <ThankYouCard orderInfo={orderInfo} />
      </ContainerMax>
    </section>
  );
};

export default ThankYouPage;
