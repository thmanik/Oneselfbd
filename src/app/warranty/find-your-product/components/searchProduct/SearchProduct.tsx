"use client";
/* eslint-disable no-console */
import EcButton from "@/components/EcButton/EcButton";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
  warrantyCode: string;
  orderedPhoneNumber: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center  my-10 md:my-20">
      <div className="text-center w-full ">
        <div className="mb-8 w-full md:w-2/3 mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
            আপনার পন্য নির্বাচন করুন
          </h1>
          <p className="text-gray-600 md:text-lg">
            পন্যের প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোড দিয়ে পন্য বাছাই করুন
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex justify-center items-center mx-4 ">
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <div className="mb-4 md:mb-0">
                  <label
                    className="block text-gray-700 text-start text-sm font-bold mb-2"
                    htmlFor="warrantyCode"
                  >
                    পন্যের ওয়ারেন্টি কোড -
                  </label>
                  <input
                    {...register("warrantyCode", {
                      required: "পন্যের ওয়ারেন্টি কোডটি লিখুন",
                    })}
                    className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.orderedPhoneNumber ? "border-red-500" : ""}`}
                    id="warrantyCode"
                    type="text"
                    placeholder="প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোডটি লিখুন"
                    style={{ fontSize: "0.9rem" }}
                  />
                  {errors.orderedPhoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.orderedPhoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 md:mb-0">
                  <label
                    className="block text-gray-700 text-start text-sm font-bold mb-2"
                    htmlFor="orderedPhoneNumber"
                  >
                    অডারকৃত মোবাইল নম্বর-
                  </label>
                  <input
                    {...register("orderedPhoneNumber", {
                      required: "অর্ডারকৃত ফোন নম্বরটি লিখুন",
                      pattern: {
                        value: /^01\d{9}$/,
                        message:
                          "ফোন নম্বরটি 01 দিয়ে শুরু হতে হবে এবং 11 সংখ্যার হতে হবে",
                      },
                    })}
                    className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.orderedPhoneNumber ? "border-red-500" : ""}`}
                    id="orderedPhoneNumber"
                    type="text"
                    placeholder="যে মোবাইল নম্বর থেকে পন্যটি অর্ডার করেছেন ঐ মোবাইল নম্বর টি লিখুন"
                    style={{ fontSize: "0.9rem" }}
                  />
                  {errors.orderedPhoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.orderedPhoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-2 md:mt-5">
            <EcButton type="submit" className="py-3 px-6 text-lg text-white">
              Search
            </EcButton>
          </div>
        </form>
      </div>
    </div>
  );
}
