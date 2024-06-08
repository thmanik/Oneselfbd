"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const EditAccountForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto border p-5 ">
      <div className="form-container ">
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
              readOnly
              value="example@example.com"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none "
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
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Full Address
            </label>
            <Input
              type="text"
              id="fullAddress"
              {...register("fullAddress")}
              placeholder="Enter your full address"
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none  "
            />
          </div>
          <EcButton type="submit" className=" px-4 py-2 ">
            Save
          </EcButton>
        </form>
      </div>
    </div>
  );
};

export default EditAccountForm;
