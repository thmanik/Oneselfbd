import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const DefaultShippingAddress = () => {
  return (
    <div>
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
  );
};

export default DefaultShippingAddress;
