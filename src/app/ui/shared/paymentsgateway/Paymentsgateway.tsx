/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Accordion, AccordionBody, Button } from "@material-tailwind/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
const Paymentsgateway = () => {
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const handleOpen = (value: number | React.SetStateAction<null>) => {
    setOpenAccordion(openAccordion === value ? null : value);
  };

  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("payment: ", {
      paymentMethod: getPaymentMethod(),
      phoneNumber: data.phoneNumber,
      transactionId: data.transactionId,
    });
  };

  const getPaymentMethod = () => {
    if (openAccordion === 1) {
      return "cod";
    } else if (openAccordion === 2) {
      return "Bkash";
    } else if (openAccordion === 3) {
      return "Nagad";
    } else if (openAccordion === 4) {
      return "Rocket";
    }
    return "Unknown";
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ border: "1px solid #ccc", padding: "15px" }}
      className="my-6 mx-4  "
    >
      <div>
        <h2 className="ms-2 font-bold text-2xl py-8">পেমেন্ট ইনফরমেশন</h2>
      </div>
      <Accordion
        open={openAccordion === 1}
        className="mb-2 rounded-lg border  border-blue-gray-100 px-4"
        placeholder={undefined}
      >
        <div className="flex">
          <input
            type="radio"
            name="accordion"
            checked={openAccordion === 1}
            onChange={() => handleOpen(1)}
          />
          <div
            className={`AccordionHeader border-b-0 transition-colors ${
              openAccordion === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div className="ms-2">Cash On Delivery</div>
          </div>
        </div>
      </Accordion>

      <Accordion
        open={openAccordion === 2}
        className="mb-2 rounded-lg border  border-blue-gray-100 px-4"
        placeholder={undefined}
      >
        <div className="flex">
          <input
            type="radio"
            name="accordion"
            checked={openAccordion === 2}
            onChange={() => handleOpen(2)}
          />
          <div
            className={`AccordionHeader border-b-0 transition-colors ${
              openAccordion === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <div>
              {" "}
              {/*--------- Bkash Logo------------ */}
              <span>
                <img
                  className="w-[80px] h-[50px]"
                  src="/Bkash_logo.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="mt-4">
            <h4 className="font-bold">
              নিচের নাম্বারে PAYMENT করে, ফর্মে আপনার বিকাশ নাম্বার এবং
              ট্রানজেকশন আইডি দিন।
            </h4>
            <p className="mt-3 font-bold">
              bKash Personal Number : 01730 811 211
            </p>
            <div className="mt-10">
              <div>
                <div className="flex justify-between md:me-24">
                  <label className="font-bold" htmlFor="phoneNumber">
                    bKash Number
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="017xxxxxxxx"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />

                <div className="flex justify-between md:me-24 my-3">
                  <label className="font-bold" htmlFor="transactionId">
                    bKash Transaction ID
                  </label>
                  <Controller
                    name="transactionId"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="8N7A75M3PQ12"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAccordion === 3}
        className="mb-2 rounded-lg border  border-blue-gray-100 px-4"
        placeholder={undefined}
      >
        <div className="flex">
          <input
            type="radio"
            name="accordion"
            checked={openAccordion === 3}
            onChange={() => handleOpen(3)}
          />
          <div
            className={`AccordionHeader border-b-0 transition-colors ${
              openAccordion === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {/*--------- nogod Logo------------ */}
            <div className="ms-2">
              <img
                className="w-[70px] h-[50px]"
                src="/Nagad_Logo_horizontally.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="mt-4">
            <h4 className="font-bold">
              নিচের নাম্বারে SEND MONEY করে, ফর্মে আপনার নগদ নাম্বার এবং
              ট্রানজেকশন আইডি দিন।
            </h4>
            <p className="mt-3 font-bold">
              Nagad Personal Number : 01833 320 435
            </p>
            <div className="mt-10">
              <div>
                <div className="flex justify-between md:me-24">
                  <label className="font-bold" htmlFor="phoneNumber">
                    Nagad Number
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="017xxxxxxxx"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />

                <div className="flex justify-between md:me-24 my-3">
                  <label className="font-bold" htmlFor="transactionId">
                    Nagad Transaction ID
                  </label>
                  <Controller
                    name="transactionId"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="8N7A75M3PQ12"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={openAccordion === 4}
        className="mb-2 rounded-lg border  border-blue-gray-100 px-4"
        placeholder={undefined}
      >
        <div className="flex">
          <input
            type="radio"
            name="accordion"
            checked={openAccordion === 4}
            onChange={() => handleOpen(4)}
          />
          <div
            className={`AccordionHeader border-b-0 transition-colors ${
              openAccordion === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {/*--------- rocket Logo------------ */}
            <div className="ms-2">
              <img className="w-[60px] h-[40px]" src="/rocket.svg" alt="" />
            </div>
          </div>
        </div>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="mt-4">
            <h4 className="font-bold">
              নিচের নাম্বারে SEND MONEY করে, ফর্মে আপনার রকেট নাম্বার এবং
              ট্রানজেকশন আইডি দিন।
            </h4>
            <p className="mt-3 font-bold">
              Nagad Personal Number : 01833 320 435
            </p>
            <div className="mt-10">
              <div>
                <div className="flex justify-between md:me-24">
                  <label className="font-bold" htmlFor="phoneNumber">
                    Rocket Number
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="017xxxxxxxx"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />

                <div className="flex justify-between md:me-24 my-3">
                  <label className="font-bold" htmlFor="transactionId">
                    Rocket Transaction ID
                  </label>
                  <Controller
                    name="transactionId"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="8N7A75M3PQ12"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "12px", // Adjust the border-radius to make it more rounded
                          padding: "5px", // Adjust the padding to make it slimmer
                          outline: "none", // Remove outline on focus
                        }}
                      />
                    )}
                  />
                </div>
                <hr className="mt-3" />
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Button className="BtnStyle my-2 " type="submit" placeholder={undefined}>
        {" "}
        অর্ডার কনফার্ম করুন{" "}
      </Button>
    </form>
  );
};

export default Paymentsgateway;
