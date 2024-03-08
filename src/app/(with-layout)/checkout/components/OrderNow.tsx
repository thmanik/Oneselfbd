import EcButton from "@/components/EcButton/EcButton";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import TShippingCharges from "@/types/shippingCharge";
import { MdErrorOutline } from "react-icons/md";

const OrderNow = ({
  shippingCharges,
  errorMessages,
  handleOrder,
  isLoading,
}: {
  shippingCharges: TShippingCharges[];
  errorMessages: string[];
  handleOrder: () => Promise<void>;
  isLoading?: boolean;
}) => {
  return (
    <>
      <Box className="bg-white">
        <BoxHeading>Your order</BoxHeading>
        <CartTotalCalculations shippingCharges={shippingCharges} />
        {errorMessages.length ? (
          <div className="py-5">
            {errorMessages.map((message, index) => (
              <div
                key={index}
                className="flex gap-1 items-center text-red-600 "
              >
                <MdErrorOutline />
                <ErrorMessage message={message} className="!mt-0" />
              </div>
            ))}
          </div>
        ) : null}
        <EcButton
          className="w-full font-bold text-white"
          variant="secondary"
          onClick={handleOrder}
          loading={isLoading}
        >
          Order now
        </EcButton>
      </Box>
    </>
  );
};

export default OrderNow;