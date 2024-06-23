"use client";

import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type ChangePasswordFormData = {
  previousPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const result = await changePassword(data).unwrap();
      const message = result.message;
      toast({
        description: message,
        className: "text-green-500",
      });
    } catch (err) {
      if (err instanceof Error && err.message) {
        toast({
          description: err.message,
          className: "text-red-500",
        });
      } else {
        toast({
          description:
            " Failed to Change Password,The previous password did not match!",
          className: "text-red-500",
        });
      }
    }
  };

  const renderError = (error: FieldError | undefined) => {
    if (!error) return null;
    return <span className="text-red-500">{error.message}</span>;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full border p-5 max-w-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="previousPassword" className="block text-gray-700">
          Current Password
        </label>
        <Input
          {...register("previousPassword", {
            required: "Current Password is required",
          })}
          type="password"
          id="previousPassword"
          className="form-input mt-1 block w-full"
          placeholder="Enter your current password"
        />
        {renderError(errors.previousPassword)}
      </div>
      <div className="mb-4 relative">
        <label htmlFor="newPassword" className="block text-gray-700">
          New Password
        </label>
        <Input
          {...register("newPassword", {
            required: "New Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*]).{8,}$/,
              message:
                "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (@#$%&*)",
            },
          })}
          type={showNewPassword ? "text" : "password"}
          id="newPassword"
          className="form-input mt-1 block w-full pr-10"
          placeholder="Enter your new password"
        />
        <button
          type="button"
          onClick={() => setShowNewPassword(!showNewPassword)}
          className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center text-gray-500"
        >
          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        {renderError(errors.newPassword)}
      </div>
      <div className="mb-4 relative">
        <label htmlFor="confirmPassword" className="block text-gray-700">
          Confirm Password
        </label>
        <Input
          {...register("confirmPassword", {
            required: "Please confirm your new password",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          className="form-input mt-1 block w-full pr-10"
          placeholder="Confirm your new password"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute inset-y-0 right-0 pr-3 mt-7 flex items-center text-gray-500"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        {renderError(errors.confirmPassword)}
      </div>
      <div className="mb-4">
        <EcButton type="submit" className="px-4 py-2">
          {isLoading ? "Saving..." : "Save"}
        </EcButton>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
