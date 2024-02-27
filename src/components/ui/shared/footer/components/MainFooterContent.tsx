import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
const quickLinks = [
  {
    name: "Products",
    url: "/store",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Store location",
    url: "/store-location",
  },
  {
    name: "Refund policy",
    url: "/refund-policy",
  },
];

const socialLinks = [
  {
    icon: "/images/social_icons/facebook.png",
    url: "/refund-policy",
  },
  {
    icon: "/images/social_icons/whatsapp.png",
    url: "/refund-policy",
  },
];
const MainFooterContent = () => {
  return (
    <div className="pb-5 pt-6 relative ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ContainerMax>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <Image
              src="/images/logo/logo.png"
              alt="Company logo"
              width={400}
              height={200}
              className="w-44 rounded-md shadow-md"
              priority
            />
            <div className="flex gap-2 items-center">
              <BiSupport className="w-12 h-12" />
              <div>
                <p className="text-xs">Have a question? Call us right now</p>
                <p className="text-xl font-semibold">+8801789-699367</p>
              </div>
            </div>
            <address className="font-semibold">
              <p>Address</p>
              <p>88, Bankra, assasuni satkhira</p>
              {/* TODO: Change the address */}
            </address>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 pt-5 gap-5">
            <div>
              <h2 className="font-bold mb-2 text-secondary">Quick links</h2>
              <div className="space-y-1">
                {quickLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="block text-sm hover:text-secondary transition-all font-semibold w-max"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-2 text-secondary">Social links</h2>
              <div className="flex gap-2">
                {socialLinks.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <Image
                      src={item.icon}
                      alt="Social icon"
                      width={100}
                      height={100}
                      className="w-10 h-10 hover:scale-105 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerMax>
    </div>
  );
};

export default MainFooterContent;
