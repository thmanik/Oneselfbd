import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AccountData = () => {
  return (
    <div className="grid md:grid-cols-12 md:ms-8 gap-5">
      <div className="md:col-span-6 sm:col-span-12 ">
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle className="text-1xl mb-2">Contact Information</CardTitle>
            <div>
              <h3>Display Name</h3>
            </div>
            <div>
              <h3>usere@gmail.com</h3>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-between text-blue-600">
            <Link href="/my-account/edit-account">
              <div className="cursor-pointer" title="Edit your account">
                Edit
              </div>
            </Link>
            <Link href="/my-account/change-password">
              <div className="cursor-pointer" title="Change Your Password">
                Change Password
              </div>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="md:col-span-6 sm:col-span-12">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-1xl">Default Shipping Address</CardTitle>
            <CardDescription>
              You have not set a default shipping address.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-between">
            <Link href="/my-account/add-shipping-address">
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
    </div>
  );
};

export default AccountData;
