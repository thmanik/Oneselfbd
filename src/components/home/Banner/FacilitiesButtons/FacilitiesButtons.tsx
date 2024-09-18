import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const carousalFooterData = [
  {
    title: "Flash Sales",
    image: "offer.png",
    customClasses: "text-[#314997] from-indigo-400 to-cyan-40",
    href: "/",
  },
  {
    title: "Gift Voucher",
    image: "voucher.png",
    customClasses: "text-[#aa7b34] from-amber-200 to-yellow-400",
    href: "/",
  },
  {
    title: "Return product",
    image: "return_product.png",
    customClasses: "text-[#d13f3f] from-orange-300 to-orange-500",
    href: "/",
  },
  {
    title: "Get Warranty",
    image: "warranty.png",
    customClasses: "text-[#2c7a60] from-emerald-300 to-emerald-500",
    href: "/warranty/find-your-product",
  },
];

const FacilitiesButtons = () => {
  return (
    <div className="flex gap-5   items-center justify-center border-red-500  flex-wrap">
      {carousalFooterData.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={twMerge(
            "flex-1 cursor-pointer flex px-3 gap-2 items-center border rounded-md bg-gradient-to-r space-y-1 py-3 min-w-[150px] w-full",
            item.customClasses
          )}
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="flex justify-center items-center">
            <Image
              className="w-16"
              src={`/images/${item.image} ` || ""}
              alt={item.title || ""}
              width={100}
              height={60}
            />
          </div>
          <h2 className="text-sm font-bold text-center ">{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default FacilitiesButtons;
