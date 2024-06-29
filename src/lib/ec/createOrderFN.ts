/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/ui/use-toast";
import * as fbq from "@/lib/connectors/FacebookPixel";
import { TPaymentInfoState } from "@/types/order/paymentInfo";
import { TShippingInfoState } from "@/types/order/shippingInfo";
import { TSingleProduct } from "@/types/products/singleProduct";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
const createOrderFN = async ({
  setErrorMessages,
  shippingInfo,
  paymentInfo,
  product,
  createOrder,
  totalCost,
  router,
  orderData,
  eventId,
  setIsSuccess,
  setLimitModalStatus,
}: {
  setErrorMessages: any;
  shippingInfo: TShippingInfoState;
  paymentInfo: TPaymentInfoState;
  product?: TSingleProduct;
  createOrder: any;
  totalCost: number;
  router: AppRouterInstance;
  orderData: any;
  eventId: string;
  setIsSuccess?: Dispatch<SetStateAction<boolean>>;
  setLimitModalStatus: Dispatch<SetStateAction<boolean>>;
}) => {
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
    if (!paymentInfo?.data?.phoneNumber || !paymentInfo?.data?.transactionId) {
      setErrorMessages(["Please fill out payment information."]);
      return;
    }
  }
  try {
    const result = (await createOrder(orderData).unwrap()) as TGenericResponse<{
      _id?: string;
    }>;

    if (result.success) {
      if (setIsSuccess) {
        setIsSuccess(true);
      }
      fbq.event(
        "Purchase",
        {
          content_name: product?.title,
          content_category: product?.category,
          content_ids: [product?._id],
          content_type: "product",
          value: totalCost, // Product price
          currency: "bdt",
          phone: shippingInfo?.data?.phoneNumber,
          event_id: eventId,
        },
        eventId
      );
      toast({
        title: "Thank you",
        description: "Order completed.",
      });
      router.push(`/thank-you/${result?.data?._id}`);
    }
  } catch (error) {
    const res = (error as { data: TGenericErrorResponse }).data;
    const errorMessages =
      res?.errorMessages?.map((error) => error.message) || [];
    setErrorMessages([...errorMessages]);
    if (res.message === "Reached order limit") {
      setLimitModalStatus(true);
    }
  }
};

export default createOrderFN;
