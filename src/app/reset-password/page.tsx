"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as yup from "yup";

const ResetPasswordPage = () => {
  const schema = yup.object().shape({
    PhoneNumber: yup.string().required("Email or phone number is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      PhoneNumber: "017XXXXXX", // Provide initial value here
      password: "",
    },
  });

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
          <h4 className="text-2xl font-bold mb-2">Reset Account Password!</h4>
          <p className="mb-4">Enter A New Password For Your Account</p>

          <Controller
            name="PhoneNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={`shadcn-input shadcn-border shadcn-rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.PhoneNumber ? "border-red-500" : "shadcn-border"
                }`}
                id="PhoneNumber"
                type="text"
              />
            )}
          />
          {errors.PhoneNumber && (
            <p className="text-red-500 text-xs italic">
              {errors.PhoneNumber.message}
            </p>
          )}

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  className={`shadcn-input shadcn-border shadcn-rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none ${
                    errors.password ? "border-red-500" : "shadcn-border"
                  }`}
                  id="password"
                  type="password"
                  placeholder="Enter a new Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password.message}
                  </p>
                )}
              </div>
            )}
          />
          <Button
            type="submit"
            className="shadcn-btn w-full bg-primary text-white shadcn-font-bold py-2 px-4 shadcn-rounded focus:outline-none focus:shadcn-shadow hover:shadcn-bg-blue-700"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordPage;
