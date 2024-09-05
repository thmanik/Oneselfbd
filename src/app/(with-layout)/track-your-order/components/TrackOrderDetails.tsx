"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";

import ContainerMax from "@/components/containerMax/ContainerMax";
import { useOderTrackerQuery } from "@/redux/features/trackOrder/TrackOrder";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Timeline from "./Timeline";

const TrackOrderDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { orderId } = params;

  const { data, error, isLoading } = useOderTrackerQuery(orderId);

  const LoadingSpinner = () => (
    <div className="text-center py-4">Loading...</div>
  );

  const ErrorDisplay = () => (
    <div className="text-center py-4">Error fetching data</div>
  );

  useEffect(() => {
    if (!orderId) {
      router.push("/track-your-order");
    }
  }, [orderId, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return <ErrorDisplay />;
  }

  const orderData = data?.data?.[0];
  const statuses = orderData?.statusHistory?.map(
    (statusEvent: any, index: number) => ({
      status: statusEvent?.status || "N/A",
      title: orderData?.status || "N/A",
      date: new Date(statusEvent?.updatedAt).toLocaleDateString(),
      time: new Date(statusEvent?.updatedAt).toLocaleTimeString(),
      icon: index === 0 ? "box" : "truck",
      isActive: index === 0,
    })
  );

  const parcelTrackingLink = orderData?.parcelTrackingLink;

  return (
    <section className="bg-gray-100 py-8 flex justify-center items-center">
      <ContainerMax>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl text-center text-dark-gray mb-6">
            Order Status for Order ID: {orderId}
          </h2>
          <Timeline statuses={statuses} />

          {/* Conditionally render the tracking button */}
          {parcelTrackingLink ? (
            <div className="mt-6 text-center">
              <a
                href={parcelTrackingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Track Parcel
              </a>
            </div>
          ) : (
            <div className="mt-6 text-center text-gray-500">
              Parcel Tracking information not available
            </div>
          )}
        </div>
      </ContainerMax>
    </section>
  );
};

export default TrackOrderDetails;
