import EcButton from "@/components/EcButton/EcButton";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import useCart from "@/hooks/useCart";
import { TOrderPayment } from "@/types/order/orderPayment";
import { TPaymentMethod } from "@/types/paymentMethod";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction } from "react";
import { useSelector } from "react-redux";

const OrderPaymentInfo = ({
  shippingCharges,
  paymentMethods,
  orderNowHandler,
  orderModelRef,
  setOrderNowClick,
  paymentInfo,
}: {
  shippingCharges: TShippingCharges[];
  paymentMethods: TPaymentMethod[];
  orderNowHandler: () => void;
  orderModelRef: RefObject<HTMLButtonElement>;
  setOrderNowClick: Dispatch<SetStateAction<number>>;
  paymentInfo: TOrderPayment | null;
}) => {
  const { totalCost } = useCart();

  const shippingClass = useSelector((state: TRootState) => state.shippingClass);

  const handleOrder = () => {
    setOrderNowClick((prev) => prev + 1);
    orderNowHandler();
  };
  const selectedPaymentMethod = paymentMethods.find(
    (item) => item._id === paymentInfo?.selectedPaymentMethod
  );
  return (
    <>
      <Box>
        <BoxHeading>Your order</BoxHeading>
        <CartTotalCalculations shippingCharges={shippingCharges} />
        <EcButton
          className="w-full font-bold text-white"
          variant="secondary"
          onClick={handleOrder}
        >
          Order now
        </EcButton>
      </Box>
      {selectedPaymentMethod && (
        <AlertDialog>
          <AlertDialogTrigger hidden ref={orderModelRef}></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Double check your information.
              </AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <div>
              <div className="flex justify-between items-center px-2 border-b-2">
                <div>
                  <h2 className="font-bold">
                    You need to pay :{" "}
                    <span className="text-secondary">
                      {" "}
                      &#2547; {totalCost + shippingClass.amount}
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {selectedPaymentMethod?.requiredFields![0]?.fieldName !==
                    "transactionId"
                      ? selectedPaymentMethod?.requiredFields![0]?.fieldName
                      : selectedPaymentMethod?.requiredFields![1]
                          ?.fieldName}{" "}
                    : {paymentInfo?.transactionInfo?.accountInfo?.value}
                  </h2>
                  <h2 className="font-bold">
                    Transaction ID :{" "}
                    {paymentInfo?.transactionInfo?.transactionId}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={selectedPaymentMethod?.image?.src as string}
                    alt={selectedPaymentMethod?.image?.alt as string}
                    height={200}
                    width={200}
                    className="w-16 h-16 rounded-md mx-auto"
                  />
                  <h2 className="font-bold text-center">
                    {selectedPaymentMethod?.name}
                  </h2>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
              <EcButton variant="secondary" className="text-white">
                Confirm order
              </EcButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default OrderPaymentInfo;
