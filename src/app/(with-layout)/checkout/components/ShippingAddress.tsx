"use client";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import { CardDescription, CardTitle } from "@/components/ui/card";
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
import { Card, CardFooter, CardHeader } from "@material-tailwind/react";
import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
type FormData = {
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  notes?: string | null | undefined;
  // Add other fields as needed
};

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(shippingInfo),
    shouldFocusError: false,
  });
  const dispatch = useDispatch();
  const shippingInfoData = useSelector(
    (state: TRootState) => state.shippingInfo
  );

  const [customerHasAccount, setCustomerHasAccount] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<TShippingInfo | null>(
    null
  );

  useEffect(() => {
    const hasAccount = checkCustomerAccount();
    setCustomerHasAccount(hasAccount);

    if (!hasAccount) {
      const storedShippingAddress = localStorage.getItem("shippingAddress");
      if (storedShippingAddress) {
        const parsedAddress = JSON.parse(storedShippingAddress);
        setShippingAddress(parsedAddress);
        // Set form field values using setValue
        setValue("fullName", parsedAddress.fullName);
        setValue("phoneNumber", parsedAddress.phoneNumber);
        setValue("fullAddress", parsedAddress.fullAddress);
        setValue("notes", parsedAddress.notes || "");
      }
    }
    //  else {
    //   // If customer has an account, set shippingAddress to null or any default value
    //   setShippingAddress(null);
    // }
  }, [setValue, shippingInfoData]);

  const checkCustomerAccount = () => {
    const isLoggedIn = false;
    const hasAccountId = false;
    return isLoggedIn || hasAccountId;
  };

  const onSubmit = (data: FormData) => {
    const notes =
      data.notes !== null && data.notes !== undefined ? data.notes : "";
    const shippingInfo: TShippingInfo = {
      ...data,
      notes,
    };
    dispatch(setShippingInfo(shippingInfo));
    dispatch(setShippingInfoError({ errors: null }));
    localStorage.setItem("shippingAddress", JSON.stringify(shippingInfo));
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      const errorMessages = Object?.keys(errors).map(
        (item) => errors[item as keyof typeof errors]?.message
      );
      dispatch(setShippingInfoError({ errors: errorMessages }));
    }
  }, [dispatch, errors]);

  return (
    <Box className="bg-white">
      <BoxHeading>Shipping Address</BoxHeading>
      {customerHasAccount && (
        <Card className="w-[350px]" placeholder={undefined}>
          <CardHeader placeholder={undefined}>
            <CardTitle className="text-1xl">Default Shipping Address</CardTitle>
            <CardDescription>
              {shippingAddress
                ? `Full Address: ${shippingAddress?.fullAddress}`
                : "You have not set a default shipping address."}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between" placeholder={undefined}>
            <Link href="/my-account/add-shipping-address">
              <div
                className="cursor-pointer text-blue-600"
                title="Edit Shipping Address"
              >
                Edit Address
              </div>
            </Link>
          </CardFooter>
        </Card>
      )}
      <form onBlur={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label className="font-bold pl-2 pb-2 block">নাম*</Label>
          <Input
            placeholder="এখানে আপনার নাম লিখুন"
            {...register("fullName")}
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
          />
          {errors.fullAddress && (
            <ErrorMessage message={errors.fullAddress.message} />
          )}
        </div>
        <div>
          <Label className="font-bold pl-2 pb-2 block">
            অন্যান্য তথ্য (Optional)
          </Label>
          <textarea
            placeholder="অন্যান্য কোন তথ্য থাকলে তা লিখুন"
            {...register("notes")}
            className="w-full h-28 ring-2 ring-gray-100 rounded-md p-2"
          ></textarea>
          {errors.notes && <ErrorMessage message={errors.notes.message} />}
        </div>
      </form>
    </Box>
  );
};

export default ShippingAddress;
