/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

/* eslint-disable no-console */
const TrackOrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (data: object) => {
    console.log(data);
  };
  return (
    <>
      <div className="my-8 mx-10">
        <div>
          <h2 className="text-4xl text-center text-dark-gray">
            Track your Order
          </h2>
          <p className="mb-4 mt-8 text-base-100">
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-12 gap-5 mx-10 my-6">
          <div className="md:col-span-6 sm:col-span-12">
            <div className="font-bold ms-2">Order ID</div>
            <Input
              crossOrigin={undefined}
              {...register("orderId", { required: true })}
              className="w-80 rounded"
              type="text"
              placeholder="Found in your order Confirmation email"
            />
            {errors.orderId && (
              <span className="text-red-500">Order ID is required</span>
            )}
          </div>
          <div className="md:col-span-6 sm:col-span-12">
            <div className="font-bold ms-2">Billing email</div>
            <Input
              crossOrigin={undefined}
              {...register("billingEmail", { required: true })}
              className="w-80"
              type="email"
              placeholder="Email you used during checkout"
            />
            {errors.billingEmail && (
              <span className="text-red-500">Billing Email is required</span>
            )}
          </div>
        </div>
        <Button
          className="BtnStyle ms-10"
          onClick={handleSubmit(onSubmit)}
          placeholder={undefined}
        >
          Track Order
        </Button>
      </div>
    </>
  );
};

export default TrackOrderPage;
