// ! footer-1
import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

const quickLinks = [
  {
    name: "Products",
    url: "/shop",
  },
  {
    name: "About-us",
    url: "/about-us",
  },
  {
    name: "Contact-us",
    url: "/contact-us",
  },
  {
    name: "Store location",
    url: "/store-location",
  },
  // {
  //   name: "Refund policy",
  //   url: "/refund-policy",
  // },
];

const socialLinks = [
  {
    icon: "/images/social_icons/facebook.png",
    url: "https://www.facebook.com/oneselfbd?mibextid=ZbWKwL",
  },
  {
    icon: "/images/social_icons/whatsapp.png",
    url: "http://wa.me/8801967214215",
  },
  {
    icon: "/images/social_icons/groups.png",
    url: "https://www.facebook.com/groups/1246098009387414/?ref=share&mibextid=adzO7l&paipv=0&eav=AfZUgPMBGmrQ-r6t7oD9pFOoIp28bG6IiWtZxAAnmkGDRyF_TDU_jjII4g3pMojA1dI&_rdr",
  },
];

const MainFooterContent = () => {
  return (
    <div className="relative py-5 text-white  bg-[#252E3C] bg-[radial-gradient(ellipse_90%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <ContainerMax>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:mx-10">
          <div className="space-y-2 md:space-y-5">
            <Image
              src="/images/logo/logo.jpg"
              alt="Company logo"
              width={400}
              height={200}
              className="w-32 md:w-44 rounded-md shadow-md mx-auto md:mx-0"
              priority
            />
            <div className="flex gap-4 ">
              <BiSupport className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
              <div>
                <p className="text-sm">Have a question? Call us right now</p>
                <p className="text-lg md:text-xl font-semibold">
                  +8801967214215
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-bold mb-3 text-secondary text-xl">
              Quick links
            </h2>
            <div className="space-y-2 ">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="block text-base hover:text-secondary transition-all font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-bold mb-4 text-secondary text-xl">
              Social links
            </h2>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((item, index) => (
                <Link href={item.url} key={index} target="_blank">
                  <Image
                    src={item.icon}
                    alt="Social icon"
                    width={100}
                    height={100}
                    className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
            <address className="font-semibold not-italic space-y-1 mt-5">
              <p className="text-lg">Address :</p>
              <p className="text-base">Khulna, Bangladesh</p>
              {/* TODO: Change the address */}
            </address>
          </div>
        </div>
      </ContainerMax>
    </div>
  );
};

export default MainFooterContent;

// ! Animation footer-02

// import ContainerMax from "@/components/containerMax/ContainerMax";
// import Image from "next/image";
// import Link from "next/link";
// import { BiSupport } from "react-icons/bi";
// const quickLinks = [
//   {
//     name: "Products",
//     url: "/shop",
//   },
//   {
//     name: "About",
//     url: "/about",
//   },
//   {
//     name: "Store location",
//     url: "/store-location",
//   },
//   {
//     name: "Refund policy",
//     url: "/refund-policy",
//   },
// ];

// const socialLinks = [
//   {
//     icon: "/images/social_icons/facebook.png",
//     url: "https://www.facebook.com/oneselfbd?mibextid=ZbWKwL",
//   },
//   {
//     icon: "/images/social_icons/whatsapp.png",
//     url: "https://api.whatsapp.com/send?phone=+8801967214215&text=Is%20anyone%20available?",
//   },
//   {
//     icon: "/images/social_icons/groups.png",
//     url: "https://www.facebook.com/groups/1246098009387414/?ref=share&mibextid=adzO7l&paipv=0&eav=AfZUgPMBGmrQ-r6t7oD9pFOoIp28bG6IiWtZxAAnmkGDRyF_TDU_jjII4g3pMojA1dI&_rdr",
//   },
// ];
// const MainFooterContent = () => {
//   return (
//     <div className="pb-5 pt-6 relative ">
//       <div className="absolute inset-0 z-0 flex justify-center items-center bg-black/20 overflow-hidden">
//         <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,255,255,0)20%,rgba(255,255,255,0.1)21%)] bg-[size:80px_80px] animate-spin-slow"></div>
//       </div>
//       <ContainerMax>
//         <div className="grid grid-cols-1 md:grid-cols-4">
//           <div className="md:col-span-2 space-y-3">
//             <Image
//               src="/images/logo/logo.jpg"
//               alt="Company logo"
//               width={400}
//               height={200}
//               className="w-32 md:w-44 rounded-md shadow-md"
//               priority
//             />
//             <div className="flex gap-2 items-center">
//               <BiSupport className="w-8 h-8 md:w-12 md:h-12" />
//               <div>
//                 <p className="text-xs">Have a question? Call us right now</p>
//                 <p className="text-base md:text-xl font-semibold">
//                   +8801967214215
//                 </p>
//               </div>
//             </div>
//             <address className="font-semibold">
//               <p>Address</p>
//               <p>Khulna, bangladesh</p>
//               {/* TODO: Change the address */}
//             </address>
//           </div>
//           <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 pt-5 gap-5">
//             <div>
//               <h2 className="font-bold mb-2 text-secondary">Quick links</h2>
//               <div className="space-y-1">
//                 {quickLinks.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.url}
//                     className="block text-sm hover:text-secondary transition-all font-semibold w-max"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h2 className="font-bold mb-2 text-secondary">Social links</h2>
//               <div className="flex gap-2">
//                 {socialLinks.map((item, index) => (
//                   <Link href={item.url} key={index} target="_blank">
//                     <Image
//                       src={item.icon}
//                       alt="Social icon"
//                       width={100}
//                       height={100}
//                       className="w-10 h-10 hover:scale-105 transition-all"
//                     />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </ContainerMax>
//     </div>
//   );
// };

// export default MainFooterContent;
