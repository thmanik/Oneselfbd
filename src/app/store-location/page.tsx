"use client";
import EcButton from "@/components/EcButton/EcButton";
import React, { useState } from "react";

const MyStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Order Processed" },
    { title: "Order Designing" },
    { title: "Order Shipped" },
    { title: "Order on Road" },
    { title: "Order Arrived" },
  ];

  const orderId = "123456";
  const relatedText = "Your recent order details:";

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => Math.max(0, prevStep - 1));
  };

  return (
    <div
      className="mx-auto px-6 py-8 my-4 rounded-lg shadow-md"
      style={{ backgroundImage: "linear-gradient(to right, #00C1F1, #241F21)" }}
    >
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-bold mb-4">{relatedText}</h2>
        <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
          <span className="font-semibold">Order ID:</span> {orderId}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === activeStep ? "text-gradient-blue" : "text-gray-400"
            }`}
          >
            <div
              className={`w-12 h-12 flex justify-center items-center rounded-full border ${
                index === activeStep
                  ? "border-gradient-blue bg-gradient-blue text-white"
                  : "border-gray-400 bg-white"
              }`}
            >
              {index < activeStep ? (
                <span className="text-xs">✓</span>
              ) : (
                <span className="text-xs">{index + 1}</span>
              )}
            </div>
            <div className="mt-1">{step.title}</div>
          </div>
        ))}
      </div>

      <div className="my-10 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: index === activeStep ? "block" : "none" }}
          >
            <div className="text-lg font-semibold mb-4">{step.title}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-around mt-6">
        <EcButton
          className={`text-white ${
            activeStep === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          } rounded-md px-4 py-2`}
          onClick={handlePrevious}
          disabled={activeStep === 0}
        >
          Previous
        </EcButton>
        <EcButton
          className={`text-white ${
            activeStep === steps.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-blue hover:bg-gradient-blue-dark"
          } rounded-md px-4 py-2`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </EcButton>
      </div>
    </div>
  );
};

export default MyStepper;
