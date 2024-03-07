"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { setUser } from "@/redux/features/auth/authSlice";
import { TUser } from "@/redux/features/auth/interface";
import { useCreateCustomerMutation } from "@/redux/features/user/userApi";
import { useAppDispatch } from "@/redux/hooks";
import decodeJWT from "@/utilities/decodeJWT";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Mobile is required")
    .matches(/^[0-9+]+$/, "Invalid mobile number")
    .max(15, "Invalid mobile number"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter and one special character"
    ),
});

const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const [createCustomer] = useCreateCustomerMutation();
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createCustomer(data).unwrap();
      const user = decodeJWT(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast({
        title: res.message,
      });
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // console.log(error)
      toast({
        variant: "destructive",
        title: error?.data?.message,
      });
    }
  };

  return (
    <div className="w-[430px] border-none md:mx-auto my-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <h4 className="text-center my-3 font-bold text-2xl ">
            Registration Page
          </h4>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <Input
            className={`shadow appearance-none border ${errors.phoneNumber ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="tel"
            placeholder="Enter Your Phone Number"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            className={`shadow appearance-none border ${errors.password ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="password"
            id="password"
            placeholder="Enter a Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <EcButton className=" w-full  py-2 px-4 " type="submit">
            Registration
          </EcButton>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
