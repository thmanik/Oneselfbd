import { toast } from "@/components/ui/use-toast";
import * as fbq from "@/lib/connectors/FacebookPixel";
import { TPaymentInfoState } from "@/types/order/paymentInfo";
import { TShippingInfoState } from "@/types/order/shippingInfo";
import { TSingleProduct } from "@/types/products/singleProduct";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setErrorMessages: any;
  shippingInfo: TShippingInfoState;
  paymentInfo: TPaymentInfoState;
  product?: TSingleProduct;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createOrder: any;
  totalCost: number;
  router: AppRouterInstance;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orderData: any;
  eventId: string;
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
      orderId: string;
    }>;
    if (result.success) {
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

export default createOrderFN;
