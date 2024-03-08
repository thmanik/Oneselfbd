import Image from "next/image";
import voucher from "../../../../../public/images/voucher.png";
const FacilitiesButtons = () => {
  return (
    <div className="flex gap-5 items-center justify-center border-red-500">
      <div className="text-white border rounded-md px-5 py-3 bg-gradient-to-r from-indigo-400 to-cyan-400">
        {/* <div>
          <Image src={logo} alt="logo" width={200} height={200}></Image>
        </div> */}
        <h1 className="text-2xl font-bold text-center">Flash Sale</h1>
      </div>

      <div className="text-[#6855E9] border rounded-md px-5 py-3 bg-[#CCD2FB]">
        {/* <div>
          <Image src={logo} alt="logo" width={200} height={200}></Image>
        </div> */}
        <h1 className="text-2xl font-bold text-center">Return Product</h1>
      </div>

      <div className="text-[#CE7333] border rounded-md px-5 py-3 bg-[#FDD7BE]">
        {/* <div>
          <Image src={logo} alt="logo" width={200} height={200}></Image>
        </div> */}
        <h1 className="text-xl font-bold text-center">Get Warranty</h1>
      </div>

      <div className="text-[#CC3E2C] border rounded-md px-5 bg-gradient-to-r from-amber-200 to-yellow-400 space-y-1 py-2">
        <div className="flex justify-center items-center">
          <Image
            className="w-22"
            src={voucher}
            alt="voucher"
            width={100}
            height={60}
          ></Image>
        </div>
        <h1 className="text-xl font-bold text-center px-5">OneSelf Voucher</h1>
      </div>
    </div>
  );
};

export default FacilitiesButtons;
