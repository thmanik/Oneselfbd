"use client";
import EcButton from "@/components/EcButton/EcButton";
import ContainerMax from "@/components/containerMax/ContainerMax";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Define the form data type
type FormData = {
  orderId: string;
};

const OrderSearchInputHandler = () => {
  const router = useRouter();

  // Specify the type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    router.push(`/track-your-order/${data.orderId}`);
  };

  return (
    <section className="bg-gray-100 py-5 md:py-8 flex justify-center items-center  ">
      <ContainerMax className="mt-16 mb-8  ">
        <div className="max-w-3xl mx-auto xms:p-2 xls:p-3 sm:p-4 md:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-dark-gray mb-6">
            আপনার অর্ডার ট্র্যাক করুন
          </h2>
          <p className="text-center text-base md:text-xl text-gray-600 mb-6">
            আপনার অর্ডার ট্র্যাক করতে অর্ডার আইডি নিচে লিখুন ।
          </p>
          <form
            className="text-sm md:text-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 ">
              <div>
                <label htmlFor="orderId" className="block font-semibold mb-2">
                  অর্ডার আইডি
                </label>
                <Input
                  {...register("orderId", { required: true })}
                  id="orderId"
                  className="w-full rounded border p-2"
                  type="text"
                  placeholder="আপনার অর্ডার নিশ্চিতকরণ মেসেজের সাথে পাঠানো হয়েছে"
                />
                {errors.orderId && (
                  <span className="text-red-500 text-sm">
                    অর্ডার আইডি প্রয়োজন
                  </span>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <EcButton className="text-white" type="submit">
                অর্ডার ট্র্যাক করুন
              </EcButton>
            </div>
          </form>
        </div>
      </ContainerMax>
    </section>
  );
};

export default OrderSearchInputHandler;
