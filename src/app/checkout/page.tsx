/* eslint-disable @next/next/no-img-element */
// src/Page.tsx
"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import Paymentsgateway from "../ui/shared/paymentsgateway/Paymentsgateway";
import "./checkout.css";

interface PageProps {
  onSubmit?: (data: any) => void;
}

const Page: React.FC<PageProps> = ({ onSubmit = () => {} }) => {
  const [shippingCost, setShippingCost] = useState(0);

  const handleShippingChange = (event) => {
    const shippingOption = event.target.value;
    // Set shipping cost based on the selected option
    if (shippingOption === "insideDhaka") {
      setShippingCost(12); // Example cost for inside Dhaka
    } else if (shippingOption === "outsideDhaka") {
      setShippingCost(20); // Example cost for outside Dhaka
    }
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data: any) => {
    onSubmit(data);
    // eslint-disable-next-line no-console
    console.log("Form Data:", data);
  };
  const districtsData: string[] = ["District1", "District2", "District3"];
  return (
    <div>
      <div className="grid md:grid-cols-12 mx-6 mt-6 ">
        <div className="md:col-span-7 sm:col-span-12">
          <div className="md:col-span-6 sm:col-span-12 md:mx-5">
            <div className="flex bg-gray-100 ">
              <div className="m-5">
                <img
                  className="w-[110px] h-[110px]"
                  src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
                  alt=""
                />
              </div>
              <div className="flex ">
                <div className="md:ms-5 mt-5">
                  <h2 className="font-bold">Product name </h2>
                  <p className="mt-3">$99.99</p>
                </div>

                <div className="flex  md:ms-5 mt-8">
                  <div className="flex">
                    <div className="lg:mr-0 md:mr-0 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        cursor="pointer"
                        stroke="currentColor"
                        className="w-10 h-10 svgIcon m-5 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </div>
                    <div className="my-8 text-primary sm:text-lg">1</div>
                    <div className="lg:mr-0 md:mr-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        cursor="pointer"
                        stroke="currentColor"
                        className="w-10 h-10 svgIcon m-5 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </div>
                  {/*  */}
                  <div className="md:flex ">
                    <div className=" md:ms-16">
                      <span className="font-bold">Sub-Total</span> <br />
                      <span className="md:my-3">$99.99</span>
                    </div>
                    <div className="md:mt-7 md:ms-16  sm:mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        cursor="pointer"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary deleteBtn"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 sm:col-span-12">
            <Card className="w-[95%] md:ms-5" placeholder={undefined}>
              <CardBody placeholder={undefined}>
                <div className="mb-2 items-center justify-between">
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    placeholder={undefined}
                  >
                    <div className="flex justify-between">
                      <div className="my-3">Sub-Total</div>
                      <div className="my-3">
                        <span>{""}$500</span>
                      </div>
                    </div>
                  </Typography>
                  <hr />
                  {/* Shipping Section */}
                  <div className="flex justify-between">
                    <Typography
                      color="blue-gray"
                      className="font-medium my-auto"
                      placeholder={undefined}
                    >
                      Shipping
                    </Typography>
                    <div className="my-3">
                      <label className="gap-1">
                        <input
                          type="radio"
                          name="shipping"
                          value="insideDhaka"
                          className="me-1"
                          onChange={handleShippingChange}
                        />
                        Inside Dhaka City <span>($12)</span>
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="shipping"
                          value="outsideDhaka"
                          className="me-1"
                          onChange={handleShippingChange}
                        />
                        Outside Dhaka City <span>($20)</span>
                      </label>
                    </div>
                  </div>
                  <hr />
                </div>
                <Typography
                  color="blue-gray"
                  className="font-bold"
                  placeholder={undefined}
                >
                  <div className="flex justify-between">
                    <div className="my-3">Grand-Total</div>
                    <div className="my-3">
                      <span>{`$${500 + shippingCost}`}</span>
                    </div>
                  </div>
                </Typography>
                <hr />
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="md:col-span-5 sm:col-span-12 mt-1">
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="max-w-md mx-auto p-4 border rounded shadow-md"
          >
            <label className="block mb-2">
              Name:
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Enter your name"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    required
                  />
                )}
              />
            </label>

            <label className="block mb-2">
              Address:
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Enter your address"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    required
                  />
                )}
              />
            </label>

            <label className="block mb-2">
              District:
              <Controller
                name="district"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.district ? "border-red-500" : ""
                    }`}
                    required
                  >
                    <option value="">Select District</option>
                    {districtsData.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                )}
              />
            </label>

            <label className="block mb-2">
              Phone Number:
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="tel"
                    {...field}
                    placeholder="Enter your phone number"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                    required
                  />
                )}
              />
            </label>

            <label className="block mb-2">
              Email:
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    placeholder="Enter your email"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    required
                  />
                )}
              />
            </label>
          </form>
        </div>
      </div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-7 sm:col-span-12 md:mb-7 md:-mt-10 md:ms-8">
          <Paymentsgateway></Paymentsgateway>
        </div>
      </div>
    </div>
  );
};

export default Page;
