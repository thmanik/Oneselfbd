import { cookies } from "next/headers";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import CartData from "./CartData";

const CartLinksAndAccount = () => {
  const refreshToken = !!cookies().get("refreshToken");
  return (
    <>
      <Link href={refreshToken ? "/my-account" : "/auth/login"}>
        <FaRegUser className="w-6 h-6" />
      </Link>
      <Link href="/cart" className="flex text-md font-bold items-center">
        <CartData />
      </Link>
    </>
  );
};

export default CartLinksAndAccount;
