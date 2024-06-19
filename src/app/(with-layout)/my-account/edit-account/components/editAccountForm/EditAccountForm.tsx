"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} from "@/redux/features/user/userApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  fullAddress: string;
};

const EditAccountForm = () => {
  const { data } = useGetUserDataQuery({});

  const {
    email: initialEmail = "",
    fullName: initialFullName = "",
    phoneNumber: initialPhoneNumber = "",
    address: { fullAddress: initialFullAddress = "" } = {},
  } = data?.data || {};

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const [updateUserData] = useUpdateUserDataMutation();
  const { toast } = useToast();

  useEffect(() => {
    setValue("fullName", initialFullName);
    setValue("email", initialEmail);
    setValue("phoneNumber", initialPhoneNumber);
    setValue("fullAddress", initialFullAddress);
  }, [
    initialFullName,
    initialEmail,
    initialPhoneNumber,
    initialFullAddress,
    setValue,
  ]);

  const onSubmit = async (formData: FormData) => {
    const updateData: Partial<FormData> = {};

    if (formData.fullName !== initialFullName) {
      updateData.fullName = formData.fullName;
    }
    if (formData.email !== initialEmail) {
      updateData.email = formData.email;
    }
    if (formData.phoneNumber !== initialPhoneNumber) {
      updateData.phoneNumber = formData.phoneNumber;
    }
    if (formData.fullAddress !== initialFullAddress) {
      updateData.fullAddress = formData.fullAddress;
    }

    try {
      if (Object.keys(updateData).length > 0) {
        await updateUserData({
          ...updateData,
          personalInfo: {
            fullName: updateData.fullName || initialFullName,
          },
          address: {
            fullAddress: updateData.fullAddress || initialFullAddress,
          },
        }).unwrap();
        toast({
          description: "Update successful",
          className: "text-green-500",
        });
      } else {
        toast({
          description: "No changes to update",
          className: "text-yellow-500",
        });
      }
    } catch (error: unknown) {
      let errorMessage = "Error updating account information";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = (error as { message: string }).message;
      }
      toast({
        description: errorMessage,
        className: "text-red-500",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto border p-5">
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4">Edit Account Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <Input
              type="text"
              id="fullName"
              {...register("fullName")}
              placeholder="Enter your full name"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber")}
              placeholder="Enter your phone number"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@example.com"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="fullAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Add New Address
            </label>
            <Input
              type="text"
              id="fullAddress"
              {...register("fullAddress")}
              placeholder="Enter a new address"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          <EcButton type="submit" className="px-4 py-2" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </EcButton>
        </form>
      </div>
    </div>
  );
};

export default EditAccountForm;
