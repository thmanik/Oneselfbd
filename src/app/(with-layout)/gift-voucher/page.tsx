import EcButton from "@/components/EcButton/EcButton";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const GiftVoucherPage = () => {
  return (
    <div className="flex flex-col mx-2 md:mx-4 justify-center items-center h-80 ">
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-4 animate-bounce">
          Coming Soon...
        </h3>
        <p className="text-lg mb-4">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <Link href="/" className="mt-8 ">
          <EcButton className=" text-white">Back to Home</EcButton>
        </Link>
      </div>
    </div>
  );
};

export default GiftVoucherPage;
