"use client";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { shippingInfo } from "@/schemas/shippingInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { RefObject, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type TShippingData = {
  success?: boolean;
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  email?: string;
  notes?: string;
};

const ShippingAddress = ({
  submitBtnRef,
  shippingAddressHandler,
}: {
  submitBtnRef: RefObject<HTMLButtonElement>;
  // eslint-disable-next-line no-unused-vars
  shippingAddressHandler: (data: TShippingData) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TShippingData>({ resolver: yupResolver(shippingInfo) });
  const [countSubmitBtnClick, setCountSubmitBtnClick] = useState(1);
  const onSubmit: SubmitHandler<TShippingData> = (data) => {
    data.success = true;
    shippingAddressHandler(data);
    setCountSubmitBtnClick(countSubmitBtnClick + 1);
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      shippingAddressHandler({ success: false } as unknown as TShippingData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, countSubmitBtnClick]);

  return (
    <div className="ring-1 shadow-md rounded-md p-5 ring-base-100">
      <h2 className="mb-4 font-bold text-xl">Shipping information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label className="font-bold pl-2 pb-2 block">Your full name*</Label>
          <Input
            placeholder="Write down your full name"
            {...register("fullName")}
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
          />
          {errors.fullAddress && (
            <ErrorMessage message={errors.fullAddress.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            Your email (Optional)
          </Label>
          <Input placeholder="Enter your email " {...register("email")} />
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
          ></textarea>
          {errors.notes && <ErrorMessage message={errors.notes.message} />}
        </div>
        <button type="submit" ref={submitBtnRef} className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
