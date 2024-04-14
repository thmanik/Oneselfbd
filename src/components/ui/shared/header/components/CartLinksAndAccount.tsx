import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import CartData from "./CartData";

const CartLinksAndAccount = () => {
  return (
    <>
      <Link href={"/my-account"}>
        <FaRegUser className="w-6 h-6" />
      </Link>
      <Link href="/cart" className="flex text-md font-bold items-center">
        <CartData />
      </Link>
    </>
  );
};

export default CartLinksAndAccount;
