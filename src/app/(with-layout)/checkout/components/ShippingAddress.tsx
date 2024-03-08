"use client";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  setShippingInfo,
  setShippingInfoError,
} from "@/redux/features/order/shippingInfo";
import { shippingInfo } from "@/schemas/shippingInfo";
import { TShippingInfo } from "@/types/order/shippingInfo";
import { TRootState } from "@/types/rootState";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shippingInfo), shouldFocusError: false });
  const dispatch = useDispatch();
  const shippingInfoData = useSelector(
    (state: TRootState) => state.shippingInfo
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const shippingInfo: TShippingInfo = {
      ...data,
    };
    dispatch(setShippingInfo(shippingInfo));
    dispatch(setShippingInfoError({ errors: null }));
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      const errorMessages = Object?.keys(errors).map(
        (item) => errors[item as keyof typeof errors]?.message
      );
      dispatch(setShippingInfoError({ errors: errorMessages }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <Box className="bg-white">
      <BoxHeading>Shipping information</BoxHeading>
      <form onBlur={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label className="font-bold pl-2 pb-2 block">Your full name*</Label>
          <Input
            placeholder="Write down your full name"
            {...register("fullName")}
            value={shippingInfoData?.data?.fullName}
          />
          {errors.fullName && (
            <ErrorMessage message={errors.fullName.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            Your phone number*
          </Label>
          <Input
            placeholder="Write down your phone number"
            {...register("phoneNumber")}
            value={shippingInfoData?.data?.phoneNumber}
          />
          {errors.phoneNumber && (
            <ErrorMessage message={errors.phoneNumber.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            Your full address*
          </Label>
          <Input
            placeholder="Write down your address"
            {...register("fullAddress")}
            value={shippingInfoData?.data?.fullAddress}
          />
          {errors.fullAddress && (
            <ErrorMessage message={errors.fullAddress.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            Your email (Optional)
          </Label>
          <Input
            placeholder="Enter your email "
            {...register("email")}
            value={shippingInfoData?.data?.email}
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            Order notes (Optional)
          </Label>
          <textarea
            placeholder="Additional information"
            {...register("notes")}
            className="w-full h-28 ring-2 ring-gray-100 rounded-md p-2"
            value={shippingInfoData?.data?.notes}
          ></textarea>
          {errors.notes && <ErrorMessage message={errors.notes.message} />}
        </div>
      </form>
    </Box>
  );
};

export default ShippingAddress;
