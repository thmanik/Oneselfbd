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
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/products"); // TODO: change endpoint
  const carouselProducts = (data?.products as TProduct[]) || [];
  return (
    <>
      <Carousel className="">
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
