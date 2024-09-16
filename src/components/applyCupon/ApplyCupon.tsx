import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/config/config";
import { setCoupon } from "@/redux/features/order/couponInfo";
import { Loader2 } from "lucide-react"; // Assuming you use Lucide for icons
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastAction } from "../ui/toast";
import { toast } from "../ui/use-toast";

type TFormValues = {
  promoCode: string;
};

export default function PromoCode() {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const onSubmit = async (data: TFormValues) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${config.base_url}/api/v1/coupons/${data.promoCode}`
      );
      const appliedCoupon = await response.json();

      if (appliedCoupon.success) {
        dispatch(
          setCoupon({
            coupon: appliedCoupon?.data?.code,
            percentage: appliedCoupon?.data?.percentage,
            maxDiscountAmount: appliedCoupon?.data?.maxDiscountAmount,
          })
        ); // Dispatch coupon if successful
        setApplied(true); // Mark as applied if successful
        toast({
          title: "Discount Added Successfully",
          action: <ToastAction altText="Try again">Thanks</ToastAction>,
          style: {
            backgroundColor: "green", // Red color for destructive variant
            color: "#fff", // White text
          },
        });
      } else {
        toast({
          variant: "destructive",
          title: appliedCoupon.message,
          action: (
            <ToastAction onClick={() => reset()} altText="Try again">
              Try again
            </ToastAction>
          ),
          style: {
            backgroundColor: "#ff4d4f", // Red color for destructive variant
            color: "#fff", // White text
          },
        });

        setApplied(false);
      }
    } catch (error) {
      setApplied(false); // Set applied to false in case of error
    } finally {
      setLoading(false); // Stop loading after API call completion
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center space-x-2"
      >
        <div className="w-full">
          <Input
            disabled={applied ? true : false}
            type="text"
            placeholder="If you have a Promo Code, Enter Here..."
            className={`w-full ${errors.promoCode ? "border-red-500" : ""}`}
            {...register("promoCode", { required: "Promo code is required" })}
          />
        </div>
        <Button
          type="submit"
          className="bg-primary text-white flex items-center"
          disabled={loading || applied}
        >
          {applied ? "Applied" : "Apply"}
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
      {errors.promoCode && (
        <span className="text-red-500 text-sm">{errors.promoCode.message}</span>
      )}
    </div>
  );
}
