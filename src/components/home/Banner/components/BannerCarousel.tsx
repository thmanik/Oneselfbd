import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import CarouselUi from "./CarouselUi";

const BannerCarousel = async () => {
  const [{ data: carouselProducts = [] }] =
    await useQuery<TProduct[]>("/products"); // TODO: change endpoint
  return (
    <>
      <Carousel>
        <CarouselContent>
          {carouselProducts?.slice(0, 5)?.map((product) => (
            <CarouselItem key={product._id}>
              <CarouselUi product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default BannerCarousel;
