/* eslint-disable react/no-unescaped-entities */
"use client";

import ContainerMax from "@/components/containerMax/ContainerMax";
import EcButton from "@/components/EcButton/EcButton";
import { useOderTrackerQuery } from "@/redux/features/trackOrder/TrackOrder";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Timeline from "./Timeline";

// type Shipping = {
//   fullAddress: string;
//   fullName: string;
//   phoneNumber: string;
// }

type StatusEvent = {
  createdAt: string;
  description: {
    bn: string;
    en: string;
  };
  status: string;
};

// type OrderData = {
//   _id: string;
//   parcelTrackingLink: string | null;
//   shipping: Shipping;
//   status: string;
//   statusHistory: StatusEvent[];
//   message: string;
//   statusCode: number;
//   success: boolean;
// }
// Utility function to capitalize each word in the status
const capitalizeStatus = (status: string) => {
  return status
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
const TrackOrderDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { orderId } = params;

  const { data, error, isLoading } = useOderTrackerQuery(orderId);

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh]">
      <Image
        src="/images/logo/logo.jpg"
        alt="logo"
        width={100}
        height={100}
        priority={true}
      />
      <h1 className="text-4xl">Loading... Please wait.</h1>
      <Image
        src="/images/animations/loading.gif"
        alt="loading"
        width={100}
        height={100}
        priority={true}
        unoptimized
      />
    </div>
  );

  const ErrorDisplay = ({ message }: { message: string }) => (
    <div className="text-center py-4 my-10 md:my-16">
      <p className="text-red-500 text-md md:text-2xl">{message}</p>
      <EcButton
        onClick={() => router.back()}
        className="mt-4 px-6 py-1 text-white transition"
      >
        Go Back
      </EcButton>
    </div>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data?.success) {
    return <ErrorDisplay message="Invalid order ID, Order not found" />;
  }

  const orderData = data?.data;

  // Check if statusHistory is present and is an array
  const statuses = Array.isArray(orderData.statusHistory)
    ? orderData.statusHistory.map(
        (statusEvent: StatusEvent, index: number) => ({
          status: capitalizeStatus(statusEvent?.status || "N/A"),
          description:
            statusEvent?.description?.bn || "No description available",
          date: new Date(statusEvent?.createdAt).toLocaleDateString(),
          time: new Date(statusEvent?.createdAt).toLocaleTimeString(),
          icon: index === 0 ? "box" : "truck",
          isActive: true,
        })
      )
    : [];

  const latestStatus = capitalizeStatus(
    orderData.statusHistory?.[orderData.statusHistory?.length - 1]?.status ||
      "Unknown"
  );

  const parcelTrackingLink = orderData.parcelTrackingLink;

  return (
    <section className="py-8 flex justify-center items-center">
      <ContainerMax>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="xms:text-xs xls:text-sm sm:text-md md:text-lg  font-bold mb-4 text-dark-gray">
              Order Summary
            </h3>
            <hr className="border-t-4 border-gray-300 h-4" />
            <div className="xms:text-[10px] xls:text-[12px] sm:text-md md:text-lg  space-y-2">
              <p>
                <strong>Order ID: </strong> {orderId}
              </p>
              <p>
                <strong>Current status: </strong> {latestStatus}
              </p>
            </div>
            {/* Shipping Information */}
            <div className="mt-6 md:mt-16">
              <h3 className="xms:text-xs xls:text-sm sm:text-md md:text-lg font-semibold mb-4 text-dark-gray">
                Shipping Information
              </h3>
              <hr className="border-t-4 border-gray-300 h-4" />
              <div className="xms:text-[10px] xls:text-[12px] sm:text-md md:text-lg  text-gray-700 space-y-2">
                <p>
                  <strong>Name: </strong> {orderData?.shipping?.fullName}
                </p>
                <p>
                  <strong>Address: </strong> {orderData?.shipping?.fullAddress}
                </p>
                <p>
                  <strong>Phone: </strong> {orderData?.shipping?.phoneNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline and Tracking Info */}
          <div className="lg:col-span-2">
            <div className="xms:p-0 xls:p-1 sm:p-3 md:p-6 bg-white shadow-md rounded-lg">
              <h2 className="xms:text-xs xls:text-sm sm:text-md md:text-xl  font-bold text-center text-dark-gray mb-4">
                Order Status History
              </h2>
              <hr className="border-t-4 border-gray-300 h-4" />

              {/* Timeline */}
              <Timeline statuses={statuses} latestStatus={latestStatus} />

              {/* Parcel Tracking */}
              {parcelTrackingLink ? (
                <div className="mt-6 text-center">
                  <div className="my-2">
                    <p className="xms:text-[10px] xls:text-[12px] sm:text-md md:text-lg ">
                      নিচের বাটন ক্লিক করে কুরিয়ারে লাইভ ট্রেকিং করতে পারবেন...
                    </p>
                  </div>
                  <br />
                  <a
                    href={parcelTrackingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg transition"
                  >
                    Live Track Parcel
                  </a>
                </div>
              ) : (
                <div className="mt-6 xms:text-[10px] xls:text-[12px] px-2 sm:text-md md:text-lg  text-center text-gray-600">
                  আপনার পন্য কুরিয়ার এ পাঠানোর পর আপনি এখানে "Live Track Parcel"
                  বাটন দেখতে পাবেন। বাটন এ ক্লিক করে কুরিয়ারে ট্রেকিং করতে
                  পারবেন। অনুগ্রহ করে অপেক্ষা করুন, ধন্যবাদ !
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default TrackOrderDetails;
