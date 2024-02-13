/* eslint-disable react/no-unescaped-entities */
"use client";

/* eslint-disable no-console */
const page = () => {
  return (
    <div className="m-8">
      <div>
        <h2 className="text-4xl text-center text-dark-gray">
          Track your Order
        </h2>
        <p className="mb-4 mt-8 text-base-100">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <div className="text-4xl my-10 font-bold">In a Process...</div>
      </div>
    </div>
  );
};

export default page;
