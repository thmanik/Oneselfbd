import EcButton from "@/components/EcButton/EcButton";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import { toast } from "@/components/ui/use-toast";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { Dispatch, SetStateAction } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const OrderPaymentInfo = ({
  shippingCharges,
  setErrorMessages,
  errorMessages,
}: {
  shippingCharges: TShippingCharges[];
  setErrorMessages: Dispatch<SetStateAction<string[]>>;
  errorMessages: string[];
}) => {
  const shippingInfo = useSelector((state: TRootState) => state.shippingInfo);
  const paymentInfo = useSelector((state: TRootState) => state.paymentInfo);
  const shippingClass = useSelector((state: TRootState) => state.shippingClass);

  const [createOrder] = useCreateOrderMutation();

  const handleOrder = async () => {
    setErrorMessages([]);
    if (shippingInfo.errors?.length || paymentInfo.errors?.length) {
      setErrorMessages([
        ...(shippingInfo?.errors || []),
        ...(paymentInfo?.errors || []),
      ]);
      return;
    }
    if (!shippingInfo?.data?.phoneNumber) {
      setErrorMessages(["Please fill out shipping address."]);
      return;
    }

    if (paymentInfo?.data?.selectedPaymentMethod?.isPaymentDetailsNeeded) {
      if (
        !paymentInfo?.data?.phoneNumber ||
        !paymentInfo?.data?.transactionId
      ) {
        setErrorMessages(["Please fill out payment information."]);
        return;
      }
    }
    const orderData = {
      payment: {
        paymentMethod: paymentInfo?.data?.selectedPaymentMethod?._id,
        phoneNumber: paymentInfo?.data?.phoneNumber || undefined,
        transactionId: paymentInfo?.data?.transactionId || undefined,
      },
      shippingChargeId: shippingClass._id,
      shipping: {
        fullName: shippingInfo.data?.fullName,
        phoneNumber: shippingInfo.data?.phoneNumber,
        fullAddress: shippingInfo.data.fullAddress,
        email: shippingInfo.data?.email || undefined,
        notes: shippingInfo.data?.notes,
      },
    };

    try {
      const result = (await createOrder(
        orderData
      ).unwrap()) as TGenericResponse;
      if (result.success) {
        toast({
          title: "Success",
          description: result?.message,
        });
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = (error as any).data as TGenericErrorResponse;
      const errorMessages = res?.errorMessages?.map((error) => error.message);
      setErrorMessages([...errorMessages]);
    }
  };
  return (
    <>
      <Box>
        <BoxHeading>Your order</BoxHeading>
        <CartTotalCalculations shippingCharges={shippingCharges} />
        {errorMessages.length ? (
          <div className="py-5">
            {errorMessages.map((message) => (
              <div
                key={message}
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
        >
          Order now
        </EcButton>
      </Box>
    </>
  );
};

export default OrderPaymentInfo;
