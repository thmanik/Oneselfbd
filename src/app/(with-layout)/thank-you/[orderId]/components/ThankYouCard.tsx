"use client";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import { useSingleOrderQuery } from "@/redux/features/order/orderApi";
import { format } from "date-fns";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const ThankYouCard = ({ orderId }: { orderId?: string }) => {
  const { data, isLoading } = useSingleOrderQuery({ id: orderId });

  const orderInfo = data?.data;
  const controls = useAnimation();
  useEffect(() => {
    const animationSequence = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, repeat: 1, repeatType: "mirror" },
      });

      await controls.start({
        scale: 1,
        transition: { duration: 0.2 },
      });
    };

    animationSequence();
  }, [controls]);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!orderInfo) {
    return (
      <ErrorMessage
        className="text-center py-3 block"
        message="No order found with this ID."
      />
    );
  }
  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center bg-cover bg-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md p-8 my-8 bg-white rounded-lg shadow-lg"
          style={{ width: "100%" }}
        >
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{
              backgroundClip: "text",
              backgroundImage: `linear-gradient(to right, #00C1F1, #241F21)`,
              color: "transparent",
            }}
          >
            আপনাকে ধন্যবাদ
          </h2>

          <p className="mb-5 text-center">
            আপনার অর্ডারটি সঠিকভাবে সম্পূর্ণ হয়েছে, অনুগ্রহ করে অপেক্ষা করুন
            আমাদের প্রতিনিধি আপনার সাথে নির্ধারিত সময়ের মধ্যে কল দিয়ে অর্ডারটি
            কনফার্ম করবে।
          </p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Order Details:
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Order ID:</span>
                <span className="text-gray-700 ">{orderInfo?.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Date:</span>
                <span className="text-gray-700">
                  {format(
                    new Date(orderInfo?.createdAt as string),
                    "MMMM dd, yyyy"
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">
                  Total Amount:
                </span>
                <span className="text-gray-700">
                  &#2547; {orderInfo?.total}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Buyer Name:</span>
                <span className="text-gray-700">
                  {orderInfo?.shipping.fullName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Address:</span>
                <span className="text-gray-700">
                  {orderInfo?.shipping?.fullAddress}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Payment:</span>
                <span className="text-gray-700">
                  {orderInfo?.payment?.transactionId ? (
                    <>
                      <span className="block">
                        {orderInfo?.payment?.phoneNumber}
                      </span>
                      <span>{orderInfo?.payment?.transactionId}</span>
                    </>
                  ) : (
                    <>{orderInfo?.payment.paymentMethod.name}</>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div animate={controls}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-36 h-36 text-blue-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#01C0F0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <p className="max-w-sm text-center text-xl text-primary">
          প্রডাক্ট নিয়ে পরবর্তীতে কোন সমস্যার সম্মুখীন হলে সমাধানের জন্য নিচের
          গ্রুপে জয়ের হয়ে থাকুন।{" "}
        </p>
        <a
          href="https://www.facebook.com/groups/1246098009387414"
          target="_blank"
        >
          <Box className="w-max flex justify-center items-center flex-col">
            <Image
              src="/images/social_icons/groups.png"
              alt="facebook group"
              height={100}
              width={100}
              className="w-20 h-20"
            />
            <p>Facebook group</p>
          </Box>
        </a>
      </div>
    </section>
  );
};

export default ThankYouCard;
