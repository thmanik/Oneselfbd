// ClientBannerCarousel.tsx
"use client"; // This directive makes the component a client component

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TProduct } from "@/types/products/product";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CarouselUi from "./CarouselUi";

type ClientBannerCarouselProps = {
  products: TProduct[];
};

const ClientBannerCarousel: React.FC<ClientBannerCarouselProps> = ({
  products,
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
        {products.map((product) => (
          <CarouselItem key={product._id}>
            <CarouselUi product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ClientBannerCarousel;
