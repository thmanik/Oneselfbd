"use client";
/* eslint-disable no-console */
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} from "@/redux/features/user/userApi";
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
    personalInfo: { fullName: initialFullName = "" } = {},
    phoneNumber: initialPhoneNumber = "",
    address: { fullAddress: initialFullAddress = "" } = {},
  } = data?.data || {};
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const [updateUserData] = useUpdateUserDataMutation();
  const { toast } = useToast();

  const onSubmit = async (formData: FormData) => {
    try {
      await updateUserData({
        ...formData,
        personalInfo: {
          fullName: formData.fullName,
        },
        address: {
          fullAddress: formData.fullAddress,
        },
      }).unwrap();
      toast({
        description: "Update successful",
        className: "text-green-500",
      });
    } catch (error) {
      toast({
        description: "Error updating account information",
        className: "text-red-500",
      });
      console.error("Error updating account:", error);
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
              defaultValue={initialFullName}
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
              defaultValue={initialPhoneNumber}
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          {/* Email input */}
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
              defaultValue={initialEmail}
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          {/* Add New Address input */}
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
              defaultValue={initialFullAddress}
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
            />
          </div>

          {/* Submit button */}
          <EcButton type="submit" className="px-4 py-2" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </EcButton>
        </form>
      </div>
    </div>
  );
};

export default EditAccountForm;
