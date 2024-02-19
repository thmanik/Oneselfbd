"use client";
import EcButton from "@/components/EcButton/EcButton";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // You can handle form submission logic here
  };

  return (
    <div className="w-[430px] border-none md:mx-auto my-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <h4 className=" my-3 font-bold  text-2xl">Login Page</h4>
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
        </div>
        <div className="flex items-center justify-between">
          <EcButton type="submit" className=" w-full  font-bold py-2 px-4 ">
            Login
          </EcButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
