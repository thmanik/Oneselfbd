import Link from "next/link";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
const TopHeader = () => {
  const links = [
    {
      href: "/store-location",
      name: "Store locator",
      icon: <FaLocationDot className="h-5 w-5" />,
    },
    {
      href: "/track-your-order",
      name: "Track your order",
      icon: <MdDeliveryDining className="h-5 w-5" />,
    },
    {
      href: "/shop",
      name: "Shop",
      icon: <FaBagShopping className="h-5 w-5" />,
    },
  ];
  return (
    <>
      <div className="hidden md:flex justify-between xl:px-10 bg-base-100 py-3">
        <div></div>
        <div className="flex gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex gap-2 items-center text-sm hover:text-primary transition-all"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
              {index !== links.length - 1 ? "|" : null}
            </Link>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default TopHeader;
