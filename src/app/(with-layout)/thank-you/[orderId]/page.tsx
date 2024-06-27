import ContainerMax from "@/components/containerMax/ContainerMax";
import ThankYouCard from "./components/ThankYouCard";

type TThankYouPage = {
  params: { orderId: string };
};

const ThankYouPage = async ({ params }: TThankYouPage) => {
  return (
    <section>
      <ContainerMax>
        <ThankYouCard orderId={params.orderId} />
      </ContainerMax>
    </section>
  );
};

export default ThankYouPage;
