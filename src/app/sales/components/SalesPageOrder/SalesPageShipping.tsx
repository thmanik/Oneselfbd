"use client";
import OrderNow from "@/app/(with-layout)/checkout/components/OrderNow";
import ShippingAddress from "@/app/(with-layout)/checkout/components/ShippingAddress";
import PaymentsGateway from "@/app/(with-layout)/checkout/components/paymentGateway/PaymentsGateway";
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

const SalesPageShipping = ({
  shippingCharges,
  paymentMethods,
}: {
  shippingCharges: TShippingCharges[];
  paymentMethods: TPaymentMethod[];
}) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaymentInfo({ selectedPaymentMethod: paymentMethods[1] }));
    dispatch(setPaymentInfoError({ errors: null }));
    dispatch(setShippingInfo({ data: null }));
    dispatch(setShippingInfoError({ errors: null }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle orders
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-5 mt-10">
      <div>
        <ShippingAddress />
      </div>
      <div className="order-4 lg:order-3">
        <OrderNow
          handleOrder={handleOrder}
          isLoading={isLoading}
          shippingCharges={shippingCharges}
          errorMessages={errorMessages}
        />
      </div>
      <div className="order-3 lg:order-4">
        <PaymentsGateway paymentMethods={paymentMethods} />
      </div>
    </div>
  );
};

export default SalesPageShipping;
