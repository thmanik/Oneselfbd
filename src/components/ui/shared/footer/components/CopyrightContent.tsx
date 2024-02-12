import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import Link from "next/link";

const paymentMethods = [
  {
    name: "Nagad",
    src: "/images/payment_methods/nagad.png",
  },
  {
    name: "Rocket",
    src: "/images/payment_methods/rocket.png",
  },
  {
    name: "Bkash",
    src: "/images/payment_methods/bkash.png",
  },
];

const CopyrightContent = () => {
  return (
    <div className="relative h-24 md:h-14 flex flex-col justify-center">
      <div className="absolute top-0 z-[-2] h-24 md:h-14 w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <ContainerMax>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap">
          <div className="text-muted">
            <p>
              <span className="font-bold">
                &copy; <Link href="/">Oneself</Link>,{" "}
              </span>
              <span>All right reserved</span>
            </p>
          </div>
          <div className="flex gap-3">
            {paymentMethods.map((item) => (
              <Image
                key={item.name}
                src={item.src}
                alt={item.name}
                width={50}
                height={50}
                className="w-8 md:w-10 rounded-md"
              />
            ))}
          </div>
        </div>
      </ContainerMax>
    </div>
  );
};

export default CopyrightContent;
