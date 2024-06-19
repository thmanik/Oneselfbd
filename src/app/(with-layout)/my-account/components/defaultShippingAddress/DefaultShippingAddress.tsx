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
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-1xl">Default Shipping Address</CardTitle>
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
              className="cursor-pointer text-blue-600"
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
