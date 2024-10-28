"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetUserDataQuery } from "@/redux/features/user/userApi";
import Link from "next/link";

const DefaultShippingAddress = () => {
  const { data } = useGetUserDataQuery(undefined);

  const address = data?.data?.address;

  return (
    <div>
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <CardHeader>
          <CardTitle className="xms:text-sm text-gray-800 xls:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Default Shipping Address
          </CardTitle>
          <CardDescription>
            {address ? (
              <div>
                <p>{address.fullAddress}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
              </div>
            ) : (
              "You have not set a default shipping address."
            )}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <Link href="/my-account/edit-account">
            <div
              className="cursor-pointer xms:text-xs xls:text-sm sm:text-sm md:text-base lg:text-lg text-blue-600"
              title="Edit Shipping Address"
            >
              Edit Address
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DefaultShippingAddress;
