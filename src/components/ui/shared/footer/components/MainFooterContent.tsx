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
    url: "https://www.facebook.com/oneselfbd?mibextid=ZbWKwL",
  },
  {
    icon: "/images/social_icons/whatsapp.png",
    url: "https://api.whatsapp.com/send?phone=+8801967214215&text=Is%20anyone%20available?",
  },
  {
    icon: "/images/social_icons/groups.png",
    url: "https://www.facebook.com/groups/1246098009387414/?ref=share&mibextid=adzO7l&paipv=0&eav=AfZUgPMBGmrQ-r6t7oD9pFOoIp28bG6IiWtZxAAnmkGDRyF_TDU_jjII4g3pMojA1dI&_rdr",
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
                <p className="text-xl font-semibold">+8801967214215</p>
              </div>
            </div>
            <address className="font-semibold">
              <p>Address</p>
              <p>Khulna, bangladesh</p>
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
                  <Link href={item.url} key={index} target="_blank">
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
