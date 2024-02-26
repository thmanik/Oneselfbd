"use client";
import CartItems from "@/components/cartItems/CartItems";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import {
  setPaymentInfo,
  setPaymentInfoError,
} from "@/redux/features/order/paymentInfo";
import {
  setShippingInfo,
  setShippingInfoError,
} from "@/redux/features/order/shippingInfo";
import { TPaymentMethod } from "@/types/paymentMethod";
import TShippingCharges from "@/types/shippingCharge";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ShippingAddress from "../components/ShippingAddress";
import OrderPaymentInfo from "./OrderPaymentInfo";
import PaymentsGateway from "./paymentGateway/PaymentsGateway";

const CheckoutPageContent = ({
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
        <OrderPaymentInfo
          setErrorMessages={setErrorMessages}
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

export default CheckoutPageContent;
