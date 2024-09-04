"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrderProductByIdQuery } from "@/redux/features/user/userApi";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Product } from "../productType/ProductType";

const OrderDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { _id } = params;
  const { data, isLoading, isError } = useGetOrderProductByIdQuery(_id);

  const LoadingSpinner = () => (
    <div className="text-center py-4">Loading...</div>
  );

  const ErrorDisplay = () => (
    <div className="text-center py-4">Error fetching data</div>
  );

  useEffect(() => {
    if (!_id) {
      router.push("/my-account/my-orders");
    }
  }, [_id, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !data) {
    return <ErrorDisplay />;
  }

  const {
    orderId,

    total,
    status,
    payment,
    shipping,

    products,
  } = data.data || {};

  const goBack = () => {
    router.back();
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row mb-6">
          {/* Left side: Order details */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">
              Order Details
              <hr className="w-72 mt-1" />
            </h1>

            <div className="mb-4">
              <p className="mb-2">
                <span className="font-semibold">Order ID:</span> {orderId}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Total:</span> ৳
                {total?.toFixed(2)}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Status:</span> {status}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Payment Method:</span>{" "}
                {payment?.paymentMethod?.name}
              </p>
            </div>
          </div>

          {/* Right side: Shipping information */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">
              Shipping Address
              <hr className="w-72 mt-1" />
            </h1>
            <div className="mb-4">
              <p className="mb-2">
                <span className="font-semibold">Ship To:</span>{" "}
                {shipping?.fullName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Address:</span>{" "}
                {shipping?.fullAddress}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone Number:</span>{" "}
                {shipping?.phoneNumber}
              </p>
              {/* <p className="mb-2">
                <span className="font-semibold">Shipping:</span>{" "}
                {shippingCharge?.name}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Charge:</span>{" "}
                {shippingCharge?.amount} Taka
              </p> */}
            </div>
          </div>
        </div>

        {/* Product information table */}
        <div className="overflow-x-auto ">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center">
            Product Information
          </h3>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Image
                </TableHead>
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Title
                </TableHead>
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Quantity
                </TableHead>
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Unit Price
                </TableHead>
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Total
                </TableHead>
                <TableHead className="w-1/6 lg:w-1/5 font-bold text-black py-3 px-4">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product: Product) => (
                <TableRow key={product._id} className="hover:bg-gray-100">
                  <TableCell className="font-medium py-3 px-4">
                    <Image
                      width={60}
                      height={60}
                      src={product.image.src}
                      alt={product.image.alt}
                    />
                  </TableCell>
                  <TableCell className="py-3 px-4">{product.title}</TableCell>
                  <TableCell className="py-3 px-4">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    ৳ {product.unitPrice}
                  </TableCell>
                  <TableCell className="py-3 px-4">৳ {product.total}</TableCell>
                  <TableCell className="py-3 px-4 whitespace-nowrap">
                    {" "}
                    <Link href={`/track-order/${product._id}`}>
                      <span className="text-blue-500 hover:underline">
                        Track Order
                      </span>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Button to go back */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={goBack}
            className="px-2 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
