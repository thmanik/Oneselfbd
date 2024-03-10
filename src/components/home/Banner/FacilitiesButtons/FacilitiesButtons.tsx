import Image from "next/image";
import offer from "../../../../../public/images/offer.png";
import return_product from "../../../../../public/images/return_product.png";
import voucher from "../../../../../public/images/voucher.png";
import warranty from "../../../../../public/images/warranty.png";
const FacilitiesButtons = () => {
  return (
    <div className="flex gap-5 items-center justify-center border-red-500 mb-3 -mt-3">
      <div
        className="flex-1 cursor-pointer    flex px-3 gap-2 items-center text-[#314997] border rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400 space-y-1 py-2"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex justify-center items-center">
          <Image
            className="w-16"
            src={offer}
            alt="voucher"
            width={100}
            height={60}
          />
        </div>
        <h1 className="text-sm font-bold text-center ">Flash Sales</h1>
      </div>
      <div
        className="flex-1 cursor-pointer flex px-3 gap-2 items-center text-[#aa7b34] border rounded-md bg-gradient-to-r from-amber-200 to-yellow-400 space-y-1 py-2"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex justify-center items-center">
          <Image
            className="w-16"
            src={voucher}
            alt="voucher"
            width={100}
            height={60}
          />
        </div>
        <h1 className="text-sm font-bold text-center ">Gift Voucher</h1>
      </div>
      <div
        className="flex-1 cursor-pointer    flex px-3 gap-2 items-center text-[#d13f3f] border rounded-md bg-gradient-to-r from-orange-300 to-orange-500 space-y-1 py-2"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex justify-center items-center">
          <Image
            className="w-16"
            src={return_product}
            alt="voucher"
            width={100}
            height={60}
          />
        </div>
        <h1 className="text-sm font-bold text-center ">Return product</h1>
      </div>

      <div
        className="flex-1 cursor-pointer flex px-3 gap-2 items-center text-[#2c7a60] border rounded-md bg-gradient-to-r from-emerald-300 to-emerald-500 space-y-1 py-2"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex justify-center items-center">
          <Image
            className="w-16"
            src={warranty}
            alt="voucher"
            width={100}
            height={60}
          />
        </div>
        <h1 className="text-sm font-bold text-center ">Get Warranty</h1>
      </div>
    </div>
  );
};

export default FacilitiesButtons;
