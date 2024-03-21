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
          <Label className="font-bold pl-2 pb-2 block">নাম*</Label>
          <Input
            placeholder="এখানে আপনার নাম লিখুন"
            {...register("fullName")}
            defaultValue={shippingInfoData?.data?.fullName}
          />
          {errors.fullName && (
            <ErrorMessage message={errors.fullName.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">ফোন নাম্বার*</Label>
          <Input
            placeholder="আপনার ফোন নাম্বারটি লিখুন"
            {...register("phoneNumber")}
            defaultValue={shippingInfoData?.data?.phoneNumber}
          />
          {errors.phoneNumber && (
            <ErrorMessage message={errors.phoneNumber.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">ঠিকানা*</Label>
          <Input
            placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
            {...register("fullAddress")}
            defaultValue={shippingInfoData?.data?.fullAddress}
          />
          {errors.fullAddress && (
            <ErrorMessage message={errors.fullAddress.message} />
          )}
        </div>
        {/* <div>
          <Label className="font-bold pl-2 pb-2 block">ই-মেইল (Optional)</Label>
          <Input
            placeholder="আপনার কোন ই-মেইল থাকলে লিখুন"
            {...register("email")}
            defaultValue={shippingInfoData?.data?.email}
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div> */}
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            অন্যান্য তথ্য (Optional)
          </Label>
          <textarea
            placeholder="অন্যান্য কোন তথ্য থাকলে তা লিখুন"
            {...register("notes")}
            className="w-full h-28 ring-2 ring-gray-100 rounded-md p-2"
            defaultValue={shippingInfoData?.data?.notes}
          ></textarea>
          {errors.notes && <ErrorMessage message={errors.notes.message} />}
        </div>
      </form>
    </Box>
  );
};

export default ShippingAddress;
