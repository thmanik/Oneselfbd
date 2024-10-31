// // ClientBannerCarousel.tsx
// "use client"; // This directive makes the component a client component

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { TSliders } from "@/types/sliders/slider";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";
// import CarouselUi from "./CarouselUi";
// import { TProduct } from "@/types/products/product";

// type ClientBannerCarouselProps = {
//   sliders: TSliders[];
//   bannerSideProducts: TProduct[]; // Ensure this is an array of TProduct
// };

// const ClientBannerCarousel: React.FC<ClientBannerCarouselProps> = ({
//   sliders,
//   bannerSideProducts, // Directly destructuring bannerSideProducts
// }) => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

//   const handleMouseEnter = () => {
//     plugin.current.stop();
//   };

//   const handleMouseLeave = () => {
//     plugin.current.play();
//   };

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className=""
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CarouselContent>
//         {sliders.map((slider) => (
//           <CarouselItem key={slider._id}>
//             <CarouselUi bannerSideProducts={bannerSideProducts} slider={slider} />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };

// export default ClientBannerCarousel;

"use client"; // This directive makes the component a client component

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TProduct } from "@/types/products/product";
import { TSliders } from "@/types/sliders/slider";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CarouselUi from "./CarouselUi";

type ClientBannerCarouselProps = {
  sliders: TSliders[];
  bannerSideProducts: TProduct[]; // Ensure this is an array of TProduct
};

const ClientBannerCarousel: React.FC<ClientBannerCarouselProps> = ({
  sliders,
  bannerSideProducts, // Directly destructuring bannerSideProducts
}) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const handleMouseEnter = () => {
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    plugin.current.play();
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent>
        {sliders.map((slider) => (
          <CarouselItem key={slider._id}>
            <CarouselUi
              bannerSideProducts={bannerSideProducts}
              slider={slider}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ClientBannerCarousel;
