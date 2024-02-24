"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ThankYouPage = () => {
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

  return (
    <div className="flex flex-col items-center justify-center bg-cover bg-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md p-8 my-8 bg-white rounded-lg shadow-lg"
        style={{ width: "100%" }}
      >
        <h1
          className="text-4xl font-bold mb-4"
          style={{
            backgroundClip: "text",
            backgroundImage: `linear-gradient(to right, #00C1F1, #241F21)`,
            color: "transparent",
          }}
        >
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your order has been successfully placed.
        </p>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Order Details:
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Order ID:</span>
              <span className="text-gray-700 ">123456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Date:</span>
              <span className="text-gray-700">February 24, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Total Amount:</span>
              <span className="text-gray-700">$99.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Buyer Name:</span>
              <span className="text-gray-700">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">Address:</span>
              <span className="text-gray-700">123 Main St, City, Country</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-semibold">
                Payment Method:
              </span>
              <span className="text-gray-700">Credit Card</span>
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
  );
};

export default ThankYouPage;
