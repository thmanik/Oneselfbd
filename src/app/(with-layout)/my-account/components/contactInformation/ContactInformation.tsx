"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUserDataQuery } from "@/redux/features/user/userApi";
import Link from "next/link";

const ContactInformation = () => {
  const { data } = useGetUserDataQuery(undefined);

  const { email, fullName, phoneNumber } = data?.data || {};
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl mb-2 ">Contact Information</CardTitle>

          <div>
            <div>
              <span className="font-bold text-gray-800 ">Name: </span>
              <span className="text-gray-600">{fullName || "N/A"}</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-bold text-gray-800 ">E-mail: </span>
              <span className="text-gray-600">{email || "N/A"}</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-bold text-gray-800 ">Phone Number: </span>
              <span className="text-gray-600">{phoneNumber || "N/A"}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between text-blue-600">
          <Link href="/my-account/edit-account">
            <div className="cursor-pointer" title="Edit your account">
              Edit
            </div>
          </Link>
          <Link href="/auth/change-password">
            <div className="cursor-pointer" title="Change Your Password">
              Change Password
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactInformation;