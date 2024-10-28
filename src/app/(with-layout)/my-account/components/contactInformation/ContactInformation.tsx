"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUserDataQuery } from "@/redux/features/user/userApi";
import Link from "next/link";

const ContactInformation = () => {
  const { data } = useGetUserDataQuery(undefined);

  const { email, fullName, phoneNumber } = data?.data || {};
  return (
    <div className="flex justify-center px-4">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <CardHeader>
          <CardTitle className=" xms:text-sm text-gray-800 xls:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Contact Information
          </CardTitle>

          <div className="xms:text-xs xls:text-xs sm:text-sm md:text-base lg:text-lg">
            <div>
              <span className="font-bold text-gray-800">Name: </span>
              <span className="text-gray-600">{fullName || "N/A"}</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">E-mail: </span>
              <span className="text-gray-600">{email || "N/A"}</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Phone Number: </span>
              <span className="text-gray-600">{phoneNumber || "N/A"}</span>
            </div>
          </div>
        </CardHeader>

        <CardFooter className="flex justify-between items-center text-blue-600">
          <Link href="/my-account/edit-account">
            <p
              className="cursor-pointer xms:text-xs xls:text-sm sm:text-sm md:text-base lg:text-lg"
              title="Edit your account"
            >
              Edit
            </p>
          </Link>
          <Link href="/auth/change-password">
            <p
              className="cursor-pointer xms:text-xs xls:text-sm sm:text-sm md:text-base lg:text-lg"
              title="Change Your Password"
            >
              Change Password
            </p>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactInformation;
