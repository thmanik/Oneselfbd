import config from "@/config/config";
import { TSliders } from "@/types/sliders/slider";
import Image from "next/image";
import Link from "next/link";

const CarouselUi = ({ slider }: { slider: TSliders }) => {
  return (
    <Link href={slider?.bannerLink || ""} className="mt-5 mb-2 rounded-sm">
      <Image
        className="w-[100%] md:w-[850px]   md:h-[370px] "
        src={`${config.base_url}/${slider.image?.src} ` || ""}
        alt={slider?.image?.src || ""}
        height={370}
        width={850}
      />
    </Link>
  );
};

export default CarouselUi;
