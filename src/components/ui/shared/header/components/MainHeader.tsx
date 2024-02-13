import Image from "next/image";
import Link from "next/link";
import HeaderLinksAndCart from "./HeaderLinksAndCart";
const MainHeader = () => {
  return (
    <div className="flex gap-5 justify-between items-center px-2 lg:px-10 py-1 border-b-2 shadow-md">
      <div>
        <Link href="/">
          <Image
            src="/images/logo/logo.png"
            alt="Company logo"
            height={200}
            width={400}
            className="w-28 lg:w-36"
          />
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="flex gap-2 items-center">
        <HeaderLinksAndCart />
      </div>
    </div>
  );
};

export default MainHeader;
