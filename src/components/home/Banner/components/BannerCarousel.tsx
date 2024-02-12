import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";
import CarouselUi from "./CarouselUi";

const BannerCarousel = async () => {
  const { data: carouselProducts } = await useQuery("/products"); // TODO: change endpoint
  return (
    <>
      <Carousel>
        <CarouselContent>
          {(carouselProducts?.data?.data as unknown as TProduct[]).map(
            (product) => (
              <CarouselItem key={product._id}>
                <CarouselUi product={product} />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default BannerCarousel;
