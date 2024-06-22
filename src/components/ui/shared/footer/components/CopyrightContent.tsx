import ContainerMax from "@/components/containerMax/ContainerMax";
import config from "@/config/config";
import useQuery from "@/hooks/useQuery";
import { TPaymentMethod } from "@/types/paymentMethod";
import Image from "next/image";
import Link from "next/link";

const CopyrightContent = async () => {
  const [{ data: paymentMethods = [] }] =
    await useQuery<TPaymentMethod[]>("/payment-method");

  return (
    <div className="relative h-24 md:h-14 flex flex-col justify-center">
      <div className="absolute top-0 z-[-2] h-24 md:h-14 w-full bg-[#0E131F] border-[#121a2c] "></div>
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
          <div>
            <p className="text-muted">
              Developed and maintained by{" "}
              <a
                href="http://www.flexsoftr.com"
                className="font-bold underline"
                target="_blank"
              >
                Flexsoftr
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            {paymentMethods.map((item) => (
              <Image
                key={item?.name}
                src={`${config.base_url}/${item?.image?.src}`}
                alt={item?.image?.alt}
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
