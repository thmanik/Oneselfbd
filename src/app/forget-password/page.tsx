"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const ForgetPasswordPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      className="flex justify-center items-center my-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="max-w-md mx-auto w-full">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h4 className="text-2xl font-bold mb-4">Forgot password?</h4>
          <p className="mb-4">
            No problem - just enter the email address associated with your
            Oneself account and we will send you a link to reset your password.
          </p>
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadcn-input shadcn-border shadcn-rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadcn-shadow"
                type="tel"
                placeholder="Enter Phone Number"
              />
            )}
          />
          <Button
            type="submit"
            className="shadcn-btn bg-primary text-white shadcn-font-bold py-2 px-4 shadcn-rounded focus:outline-none focus:shadcn-shadow hover:shadcn-bg-blue-700 mt-4 BtnStyle"
          >
            Reset Password
          </Button>
          <div className="mt-2 ">
            <Link className="text-primary" href="/login">
              <p>Back To Login Page</p>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgetPasswordPage;
