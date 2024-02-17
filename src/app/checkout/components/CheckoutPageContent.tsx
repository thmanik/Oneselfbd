"use client";
import CartItems from "@/components/cartItems/CartItems";
import paymentMethodsFakeData from "@/constants/paymentMethods";
import { TOrderPayment } from "@/types/order/orderPayment";
import TShippingCharges from "@/types/shippingCharge";
import { useEffect, useRef, useState } from "react";
import ShippingAddress, { TShippingData } from "../components/ShippingAddress";
import AddedProductsAndShipping from "./AddedProductsAndShipping";
import PaymentsGateway from "./paymentGateway/PaymentsGateway";
const CheckoutPageContent = ({
  shippingCharges,
  baseUrl,
}: {
  shippingCharges: TShippingCharges[];
  baseUrl: string;
}) => {
  const [shippingAddress, setShippingAddress] = useState<null | TShippingData>(
    null
  );
  const [paymentInfo, setPaymentInfo] = useState<null | TOrderPayment>(null);
  const [orderNowClick, setOrderNowClick] = useState(1);
  const shippingBtn = useRef<HTMLButtonElement>(null);
  const paymentBtn = useRef<HTMLButtonElement>(null);
  const orderModelRef = useRef<HTMLButtonElement>(null);
  const paymentMethods = paymentMethodsFakeData;

  const shippingAddressHandler = (data: TShippingData) => {
    setShippingAddress(data);
  };
  const paymentInfoHandler = (data: TOrderPayment) => {
    setPaymentInfo(data);
  };
  const orderNowHandler = () => {
    shippingBtn.current?.click();
    paymentBtn.current?.click();
  };

  useEffect(() => {
    if (paymentInfo?.success && shippingAddress?.success) {
      orderModelRef?.current?.click();
    }
  }, [orderNowClick, shippingAddress, paymentInfo]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div>
        <ShippingAddress
          shippingAddressHandler={shippingAddressHandler}
          submitBtnRef={shippingBtn}
        />
      </div>
      <div>
        <PaymentsGateway
          paymentInfoHandler={paymentInfoHandler}
          paymentMethods={paymentMethods}
          paymentBtn={paymentBtn}
        />
      </div>
      <div>
        <AddedProductsAndShipping
          orderNowHandler={orderNowHandler}
          shippingCharges={shippingCharges}
          orderModelRef={orderModelRef}
          paymentMethods={paymentMethods}
          setOrderNowClick={setOrderNowClick}
          paymentInfo={paymentInfo}
        />
      </div>
      <div className="col-span-1 lg:col-span-2 mt-10">
        <CartItems basUrl={baseUrl} />
      </div>
    </div>
  );
};

export default CheckoutPageContent;
