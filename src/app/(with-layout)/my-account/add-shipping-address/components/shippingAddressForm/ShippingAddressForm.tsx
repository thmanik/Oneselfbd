"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const ShippingAddressForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto my-3">
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4">Add New Address</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              className="mt-1 block w-full max-w-lg shadow-sm sm:text-sm border-gray-300 rounded-md outline-none  "
            />
          </div>
          <EcButton>save</EcButton>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
