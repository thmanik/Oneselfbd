"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const ChangePasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // Here you can handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full border p-5 max-w-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Phone Number
        </label>
        <Input
          {...register("phone")}
          type="tel"
          id="phone"
          className="form-input mt-1 block w-full"
          value="017XXXXXXXX"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="currentPassword" className="block text-gray-700">
          Current Password
        </label>
        <Input
          {...register("currentPassword", { required: true })}
          type="password"
          id="currentPassword"
          className="form-input mt-1 block w-full"
        />
        {errors.currentPassword && (
          <span className="text-red-500">Current Password is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="newPassword" className="block text-gray-700">
          New Password
        </label>
        <Input
          {...register("newPassword", { required: true })}
          type="password"
          id="newPassword"
          className="form-input mt-1 block w-full"
        />
        {errors.newPassword && (
          <span className="text-red-500">New Password is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700">
          Confirm Password
        </label>
        <Input
          {...register("confirmPassword", { required: true })}
          type="password"
          id="confirmPassword"
          className="form-input mt-1 block w-full"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">Please confirm your new password</span>
        )}
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordPage;
