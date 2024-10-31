// import config from "@/config/config";
// import { TSliders } from "@/types/sliders/slider";
// import Image from "next/image";
// import Link from "next/link";

// const CarouselUi = ({ slider }: { slider: TSliders }) => {
//   return (
//     <Link href={slider?.bannerLink || ""} className="mt-7 rounded-sm">
//       <Image
//         className="w-[100%] md:w-[840px]   md:h-[440px] "
//         src={`${config.base_url}/${slider.image?.src} ` || ""}
//         alt={slider?.image?.src || ""}
//         height={370}
//         width={850}
//       />
//     </Link>
//   );
// };

// export default CarouselUi;

/* eslint-disable @typescript-eslint/no-explicit-any */
// import config from "@/config/config";
// import useQuery from "@/hooks/useQuery";
// import { TProduct } from "@/types/products/product";
// import { TSliders } from "@/types/sliders/slider";
// import Image from "next/image";
// import Link from "next/link";

// const CarouselUi = async ({ slider }: { slider: TSliders }) => {
//   const [{ data }] = await useQuery<any>("/products/featured");
//   const bannerSideProducts = (data as TProduct[]) || [];
//   return (
//     <Link href={slider?.bannerLink || ""} className="mt-7 rounded-sm">
//       <Image
//         className={`w-full ${bannerSideProducts.length ? "md:w-[840px] md:h-[440px]" : "md:h-[500px]"} `}
//         src={`${config.base_url}/${slider.image?.src} ` || ""}
//         alt={slider?.image?.src || ""}
//         height={1200}
//         width={700}
//       />
//     </Link>
//   );
// };

// export default CarouselUi;

import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import { TSliders } from "@/types/sliders/slider";
import Image from "next/image";
import Link from "next/link";

const CarouselUi = ({
  slider,
  bannerSideProducts,
}: {
  slider: TSliders;
  bannerSideProducts: TProduct[];
}) => {
  return (
    <Link href={slider?.bannerLink || ""} className="mt-7 rounded-sm">
      <Image
        className={`w-full ${bannerSideProducts?.length ? "w-[100%] md:h-[440px]" : "md:h-[500px]"}`}
        src={`${config.base_url}/${slider.image?.src}` || ""}
        alt={slider?.image?.src || ""}
        height={1200}
        width={700}
      />
    </Link>
  );
};

export default CarouselUi;
