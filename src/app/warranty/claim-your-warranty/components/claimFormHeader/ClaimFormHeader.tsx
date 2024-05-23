import Image from "next/image";
import logo from "../../../../../../public/images/logo/logo.png";
const ClaimFormHeader = () => {
  return (
    <div className="my-6">
      <div className="flex justify-between ">
        <div>
          <Image
            width={150}
            height={60}
            src={logo}
            className="mt-2"
            alt={""}
          ></Image>
        </div>
        <div className="text-end text-xl">
          <p>Oneself</p>
          <p>Khulna, bangladesh</p>
          <p>+8801967214215</p>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ClaimFormHeader;
