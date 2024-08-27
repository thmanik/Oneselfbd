/* eslint-disable no-console */
"use client";

import EcButton from "@/components/EcButton/EcButton";
import ContainerMax from "@/components/containerMax/ContainerMax";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const TrackOrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  // const statuses = [
  //   {
  //     status: "অর্ডারটি গ্রহন করা হয়েছে কনফার্মেশনের জন্য অপেক্ষমান।",
  //     title: "Order Placed",
  //     date: "05 May 2024",
  //     time: "10:42 PM",
  //     icon: "check",
  //     isActive: true,
  //   },
  //   {
  //     status: "অর্ডারটি প্রস্তুত করা হচ্ছে",
  //     title: "Packaging",
  //     date: "05 May 2024",
  //     time: "10:42 PM",
  //     icon: "box",
  //     isActive: true,
  //   },
  //   {
  //     status: "অর্ডারটি কুরিয়ারের কাছে দেয়ার হয়েছে",
  //     title: "On The Road",
  //     date: "05 May 2024",
  //     time: "10:42 PM",
  //     icon: "truck",
  //     isActive: false,
  //   },
  //   {
  //     status: "অর্ডারটি ডেলিভারি দেয়া হয়েছে",
  //     title: "Delivered",
  //     date: "05 May 2024",
  //     time: "10:42 PM",
  //     icon: "home",
  //     isActive: false,
  //   },
  // ];

  return (
    <section className="bg-gray-100 py-8 flex justify-center items-center">
      <ContainerMax>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl text-center text-dark-gray mb-6">
            আপনার অর্ডার ট্র্যাক করুন
          </h2>
          <p className="text-center text-xl text-gray-600 mb-6">
            আপনার অর্ডার ট্র্যাক করতে, আপনার অর্ডার আইডি এবং বিলিং ফোন নম্বর
            নিচে লিখুন ।
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div>
                <label
                  htmlFor="billingPhoneNumber"
                  className="block font-semibold mb-2"
                >
                  বিলিং ফোন নম্বর
                </label>
                <Input
                  {...register("billingPhoneNumber", { required: true })}
                  id="billingPhoneNumber"
                  className="w-full rounded border p-2"
                  type="PhoneNumber"
                  placeholder="চেক-আউটের সময় আপনি যে ফোন নম্বর ব্যবহার করেছিলেন"
                />
                {errors.billingPhoneNumber && (
                  <span className="text-red-500 text-sm">
                    বিলিং ফোন নম্বর প্রয়োজন
                  </span>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <EcButton className=" text-white " type="submit">
                অর্ডার ট্র্যাক করুন
              </EcButton>
            </div>
          </form>

          {/* <Timeline statuses={statuses} /> */}
        </div>
      </ContainerMax>
    </section>
  );
};

export default TrackOrderPage;
