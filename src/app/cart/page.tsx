"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const [shippingCost, setShippingCost] = useState(0);

  const handleShippingChange = (event: { target: { value: unknown } }) => {
    const shippingOption = event.target.value;
    // Set shipping cost based on the selected option
    if (shippingOption === "insideDhaka") {
      setShippingCost(12); // Example cost for inside Dhaka
    } else if (shippingOption === "outsideDhaka") {
      setShippingCost(20); // Example cost for outside Dhaka
    }
  };
  return (
    <div className="grid md:grid-cols-12 md:m-10 sm:p-5">
      <div className="md:col-span-8 sm:col-span-12 md:mx-5">
        <div className="flex bg-gray-100 ">
          <div className="m-5">
            <Image
              width={110}
              height={110}
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
      <div className="md:col-span-4 sm:col-span-12 justify-center items-center">
        <Card className="w-96" placeholder={undefined}>
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

            <CardFooter className="pt-0" placeholder={undefined}>
              <Link href="/checkout">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10  hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 BtnStyle my-5"
                  placeholder={undefined}
                >
                  Proceed To Checkout
                </Button>
              </Link>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
