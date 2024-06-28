"use client";
import ShippingAddress from "@/app/(with-layout)/checkout/components/ShippingAddress";
import PaymentsGateway from "@/app/(with-layout)/checkout/components/paymentGateway/PaymentsGateway";
import SalesPageOrderNow from "@/app/(with-layout)/checkout/components/paymentGateway/SalesPageOrderNow";
import PEventIdGenerator from "@/lib/ec/PEventIdGenerator";
import createOrderFN from "@/lib/ec/createOrderFN";
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
import { TSingleProduct } from "@/types/products/singleProduct";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TProps = {
  shippingCharges: TShippingCharges[];
  paymentMethods: TPaymentMethod[];
  product?: TSingleProduct;
  lpNo: string;
};
const SalesPageShipping = ({
  shippingCharges,
  paymentMethods,
  product,
  lpNo,
}: TProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const totalCost =
    Number(
      product?.price?.salePrice
        ? product?.price?.salePrice
        : product?.price?.regularPrice
    ) * (Number.isNaN(quantity) ? 0 : quantity);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaymentInfo({ selectedPaymentMethod: paymentMethods[0] }));
    dispatch(setPaymentInfoError({ errors: null }));
    dispatch(setShippingInfo({ data: null }));
    dispatch(setShippingInfoError({ errors: null }));
  }, [dispatch, paymentMethods]);

  // handle orders
  const shippingInfo = useSelector((state: TRootState) => state.shippingInfo);
  const paymentInfo = useSelector((state: TRootState) => state.paymentInfo);
  const shippingClass = useSelector((state: TRootState) => state.shippingClass);
  const router = useRouter();

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleOrder = async () => {
    const eventId = PEventIdGenerator("P_");
    const orderData = {
      payment: {
        paymentMethod: paymentInfo?.data?.selectedPaymentMethod?._id,
        phoneNumber: paymentInfo?.data?.phoneNumber || undefined,
        transactionId: paymentInfo?.data?.transactionId || undefined,
      },
      shippingCharge: shippingClass._id,
      shipping: {
        fullName: shippingInfo.data?.fullName,
        phoneNumber: shippingInfo.data?.phoneNumber,
        fullAddress: shippingInfo?.data?.fullAddress || undefined,
        email: shippingInfo.data?.email || undefined,
      },
      orderNotes: shippingInfo.data?.notes,
      orderedProducts: [
        {
          quantity,
          product: product?._id,
        },
      ],
      eventId,
      orderSource: {
        name: "Landing Page",
        url: window?.location?.href,
        lpNo,
      },
      salesPage: true,
    };
    await createOrderFN({
      createOrder,
      setErrorMessages,
      shippingInfo,
      paymentInfo,
      product,
      totalCost,
      router,
      orderData,
      eventId,
      setIsSuccess,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-5 mt-10">
      <div>
        <ShippingAddress />
      </div>
      <div className="order-4 lg:order-3">
        <SalesPageOrderNow
          handleOrder={handleOrder}
          isLoading={isLoading}
          shippingCharges={shippingCharges}
          errorMessages={errorMessages}
          totalCost={totalCost}
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          isSuccess={isSuccess}
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

export default SalesPageShipping;
