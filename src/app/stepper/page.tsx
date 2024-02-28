"use client";
import EcButton from "@/components/EcButton/EcButton";
import React, { useState } from "react";
import { Stepper } from "react-form-stepper";

const MyStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { label: "Order Processed" },
    { label: "Order Designing" },
    { label: "Order Shipped" },
    { label: "Order on Road" },
    { label: "Order Arrived" },
  ];

  const orderId = "123456";
  const relatedText = "Your recent order details:";

  const handleStepSelect: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const step = parseInt(event.currentTarget.dataset.step || "0", 10);
    setActiveStep(step);
  };

  return (
    <div className="mx-auto px-6 py-8 my-4 bg-white ">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{relatedText}</h2>
        <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
          <span className="font-semibold">Order ID:</span> {orderId}
        </div>
      </div>

      <Stepper
        activeStep={activeStep}
        steps={steps}
        onSelect={handleStepSelect}
      />

      <div className="my-10 text-center">
        {activeStep === 0 && <div>Step 1 Content: Order Processed</div>}
        {activeStep === 1 && <div>Step 2 Content: Order Designing</div>}
        {activeStep === 2 && <div>Step 3 Content: Order Shipped</div>}
        {activeStep === 3 && <div>Step 4 Content: Order on Road</div>}
        {activeStep === 4 && <div>Step 5 Content: Order Arrived</div>}
      </div>
      <div className="flex justify-around mt-6">
        <EcButton
          className="text-white mr-2"
          onClick={() => setActiveStep((prevStep) => Math.max(0, prevStep - 1))}
          disabled={activeStep === 0}
        >
          Previous
        </EcButton>
        <EcButton
          className="text-white ml-2"
          onClick={() =>
            setActiveStep((prevStep) =>
              Math.min(prevStep + 1, steps.length - 1)
            )
          }
          disabled={activeStep === steps.length - 1}
        >
          Next
        </EcButton>
      </div>
    </div>
  );
};

export default MyStepper;
