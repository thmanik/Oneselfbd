/* eslint-disable no-unused-vars */
import EcButton from "@/components/EcButton/EcButton";
import ApplyCupon from "@/components/applyCupon/ApplyCupon";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import { resetCoupon } from "@/redux/features/order/couponInfo";
import { TRootState } from "@/types/rootState";
import TShippingCharges from "@/types/shippingCharge";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch

const OrderNow = ({
  shippingCharges,
  errorMessages,
  handleOrder,
  isLoading,
  totalCost,
  costLoading,
  handleUltimateTotalCost,
  isSuccess,
}: {
  shippingCharges: TShippingCharges[];
  errorMessages: string[];
  handleOrder: () => Promise<void>;
  isLoading?: boolean;
  totalCost?: number;
  costLoading?: boolean;
  isSuccess?: boolean;
  handleUltimateTotalCost: (ultimateTotalCost: number) => void;
}) => {
  const dispatch = useDispatch(); // Initialize dispatch
  const selectedShipping = useSelector(
    (state: TRootState) => state.shippingClass
  );
  const couponInfo = useSelector((state: TRootState) => state.coupon);

  const totalWithoutCoupon = Math.floor(
    (totalCost || 0) + (selectedShipping.amount || 0)
  );
  // Calculate coupon discount
  const discount = Math.ceil(
    (couponInfo.percentage / 100) * (totalWithoutCoupon || 0)
  );
  const applicableDiscount =
    discount > couponInfo.maxDiscountAmount
      ? couponInfo.maxDiscountAmount
      : discount;

  const ultimateTotalCost = totalWithoutCoupon - applicableDiscount;
  handleUltimateTotalCost(ultimateTotalCost);
  const handleOrderClick = async () => {
    await handleOrder(); // Call the original order function
    dispatch(resetCoupon()); // Reset coupon info after successful order
  };

  return (
    <Box className="bg-white">
      <BoxHeading>Your order</BoxHeading>

      {/* Cart Total Calculations */}
      <CartTotalCalculations
        shippingCharges={shippingCharges}
        totalCost={totalCost}
        costLoading={costLoading}
      />

      {/* Apply Coupon Section */}
      <div className="pb-3">
        <ApplyCupon />
      </div>

      {/* Error Messages */}
      {errorMessages.length > 0 && (
        <div className="py-5">
          {errorMessages.map((message, index) => (
            <div key={index} className="flex gap-1 items-center text-red-600">
              <MdErrorOutline />
              <ErrorMessage message={message} className="!mt-0" />
            </div>
          ))}
        </div>
      )}

      {/* Order Now Button with ultimateTotalCost */}
      <EcButton
        className="w-full font-bold text-white"
        variant="secondary"
        onClick={handleOrderClick} // Use the new handler
        loading={isLoading || isSuccess}
        disabled={isLoading || isSuccess}
        loadingText="Creating order"
      >
        ORDER NOW Tk. {ultimateTotalCost}
      </EcButton>
    </Box>
  );
};

export default OrderNow;

// import EcButton from "@/components/EcButton/EcButton";
// import ApplyCupon from "@/components/applyCupon/ApplyCupon";
// import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
// import ErrorMessage from "@/components/errorMessage/ErrorMessage";
// import Box from "@/components/ui/ec/Box";
// import BoxHeading from "@/components/ui/ec/BoxHeading";
// import { TRootState } from "@/types/rootState";
// import TShippingCharges from "@/types/shippingCharge";
// import { MdErrorOutline } from "react-icons/md";
// import { useSelector } from "react-redux";

// const OrderNow = ({
//   shippingCharges,
//   errorMessages,
//   handleOrder,
//   isLoading,
//   totalCost,
//   costLoading,
//   isSuccess,
// }: {
//   shippingCharges: TShippingCharges[];
//   errorMessages: string[];
//   handleOrder: () => Promise<void>;
//   isLoading?: boolean;
//   totalCost?: number;
//   costLoading?: boolean;
//   isSuccess?: boolean;
// }) => {
//   const selectedShipping = useSelector(
//     (state: TRootState) => state.shippingClass
//   );

//   const couponInfo = useSelector((state: TRootState) => state.coupon);

//   const discount = (couponInfo.percentage / 100) * (totalCost ? totalCost : 1);
//   const applicableDiscount =
//     discount > couponInfo.maxDiscountAmount
//       ? couponInfo.maxDiscountAmount
//       : discount;

//   const ultimateTotalCost =
//     (totalCost ? totalCost : 0) +
//     selectedShipping.amount -
//     (applicableDiscount ? applicableDiscount : 0);

//   return (
//     <>
//       <Box className="bg-white">
//         <BoxHeading>Your order</BoxHeading>
//         <CartTotalCalculations
//           shippingCharges={shippingCharges}
//           totalCost={totalCost}
//           costLoading={costLoading}
//         />
//         <div className="pb-3">
//           <ApplyCupon />
//         </div>
//         {errorMessages.length ? (
//           <div className="py-5">
//             {errorMessages.map((message, index) => (
//               <div
//                 key={index}
//                 className="flex gap-1 items-center text-red-600 "
//               >
//                 <MdErrorOutline />
//                 <ErrorMessage message={message} className="!mt-0" />
//               </div>
//             ))}
//           </div>
//         ) : null}
//         <EcButton
//           className="w-full font-bold text-white"
//           variant="secondary"
//           onClick={handleOrder}
//           loading={isLoading || isSuccess}
//           disabled={isLoading || isSuccess}
//           loadingText="Creating order"
//         >
//           ORDER NOW Tk. {ultimateTotalCost}
//         </EcButton>
//       </Box>
//     </>
//   );
// };

// export default OrderNow;
