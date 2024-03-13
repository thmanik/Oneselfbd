"use client";
import CartItems from "@/components/cartItems/CartItems";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import useCart from "@/hooks/useCart";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import {
  setPaymentInfo,
  setPaymentInfoError,
} from "@/redux/features/order/paymentInfo";
import {
  setShippingInfo,
  setShippingInfoError,
} from "@/redux/features/order/shippingInfo";
import { TPaymentMethod } from "@/types/paymentMethod";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShippingAddress from "../components/ShippingAddress";
import OrderNow from "./OrderNow";
import PaymentsGateway from "./paymentGateway/PaymentsGateway";

const CheckoutPageContent = ({
  shippingCharges,
  paymentMethods,
}: {
  shippingCharges: TShippingCharges[];
  paymentMethods: TPaymentMethod[];
}) => {
  const { totalCost, isLoading: cartCostLoading } = useCart();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaymentInfo({ selectedPaymentMethod: paymentMethods[0] }));
    dispatch(setPaymentInfoError({ errors: null }));
    dispatch(setShippingInfo({ data: null }));
    dispatch(setShippingInfoError({ errors: null }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // order placing
  const shippingInfo = useSelector((state: TRootState) => state.shippingInfo);
  const paymentInfo = useSelector((state: TRootState) => state.paymentInfo);
  const shippingClass = useSelector((state: TRootState) => state.shippingClass);
  const router = useRouter();

  const [createOrder, { isLoading }] = useCreateOrderMutation();

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
      orderFrom: "Website",
    };

    try {
      const result = (await createOrder(
        orderData
      ).unwrap()) as TGenericResponse<{ orderId: string }>;
      if (result.success) {
        router.push(`/thank-you/${result?.data?.orderId}`);
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = (error as any).data as TGenericErrorResponse;
      const errorMessages =
        res?.errorMessages?.map((error) => error.message) || [];
      setErrorMessages([...errorMessages]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <Box className="col-span-1 lg:col-span-2 mt-10">
        <BoxHeading>Added items</BoxHeading>
        <CartItems />
      </Box>
      <div>
        <ShippingAddress />
      </div>
      <div className="order-4 lg:order-3">
        <OrderNow
          handleOrder={handleOrder}
          isLoading={isLoading}
          shippingCharges={shippingCharges}
          errorMessages={errorMessages}
          totalCost={totalCost}
          costLoading={cartCostLoading}
        />
      </div>
      <div className="order-3 lg:order-4">
        <PaymentsGateway
          paymentMethods={paymentMethods}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
};

export default CheckoutPageContent;
