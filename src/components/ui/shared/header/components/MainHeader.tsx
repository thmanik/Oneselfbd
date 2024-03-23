import TCategory from "@/types/categories/categories";
import Image from "next/image";
import Link from "next/link";
import CartLinksAndAccount from "./CartLinksAndAccount";
import NavLinks from "./NavLinks";
import Search from "./Search";

const MainHeader = ({ categories }: { categories?: TCategory[] }) => {
  return (
    <div className="flex gap-5 justify-between lg:justify-evenly items-center px-2 lg:px-10 py-4 border-b-[1px]">
      <div className="order-2 lg:order-1">
        <Link href="/">
          <Image
            src="/images/logo/logo.png"
            alt="Company logo"
            height={200}
            width={400}
            className="w-28 lg:w-36"
            priority
          />
        </Link>
      </div>
      <div className="mt-[6px] order-1 lg:order-2 block md:hidden">
        <NavLinks categories={categories} />
      </div>
      <div className="flex-grow hidden lg:block lg:order-3 max-w-2xl">
        <Search />
      </div>
      <div className="flex gap-2 items-center order-3 lg:order-4 flex-grow-0 justify-end">
        <CartLinksAndAccount />
      </div>
    </div>
  );
};

export default MainHeader;
