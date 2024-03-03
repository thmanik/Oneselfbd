/* eslint-disable no-unused-expressions */
"use client";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  // Define the steps and initial state
  const steps: string[] = [
    "Pending",
    "Processing",
    "Picked by courier",
    "Shipped",
    "Completed",
  ];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const orderId = "1234567890"; // Sample Order ID
  const deliveryTime = "February 25, 2024"; // Sample Delivery Time
  const shippedTo = "John Doe"; // Sample Shipped To

  // Fetch data from the server when the component mounts
  useEffect(() => {
    // Simulating server-side data fetching delay (replace with actual fetch call)
    const fetchData = async () => {
      // Simulated delay (remove in actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would make an actual fetch request to get the current step from the server
      // For demonstration purposes, I'll simulate receiving the step index as data
      const serverStepIndex = 3; // Simulating server response
      setCurrentStep(serverStepIndex);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Render the stepper component
  return (
    <div className="flex flex-col items-center mx-5 my-5">
      {/* Order ID */}
      <h2 className="text-lg font-semibold mb-3">
        Tracking Order NO: OID- {orderId}
      </h2>
      {/* Additional Information */}
      <div className=" flex justify-between py-3 px-8 w-full border gap-8 my-5">
        <p className="">
          <span className="font-bold ">Estimates Delivery Time:</span>
          <br /> {deliveryTime}
        </p>
        <p>
          <span className="font-bold"> Shipped To:</span>
          <br />
          {shippedTo}
        </p>
        <p>
          <span className="font-bold">Status:</span>
          <br /> {steps[currentStep - 1]}
        </p>
      </div>

      <div className="flex justify-between w-full mb-8 relative">
        {/* Stepper roadline */}
        <div className="absolute mt-2.5 left-0 w-full h-1  bg-gray-400 z-0"></div>
        {/* Map through the steps array to render each step */}
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item relative flex flex-col items-center ${
              currentStep === i + 1 && "active"
            } ${i + 1 < currentStep ? "complete" : ""}`}
          >
            {/* Render step circle with or without tick icon based on current step */}
            <div
              className={`step rounded-full font-semibold text-white ${
                i + 1 < currentStep ? "bg-green-600" : "bg-slate-700 px-2"
              }`}
            >
              {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
            </div>
            {/* Render step label */}
            <p
              className={`text-gray-500 mt-2 ${
                i + 1 < currentStep ? "text-white" : ""
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
