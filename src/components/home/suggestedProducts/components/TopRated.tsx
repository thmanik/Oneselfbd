import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";

const TopRated = async () => {
  const { data: featuredProducts } = await useQuery("/products/featured"); // TODO:Change endpoints
  return (
    <>
      <Carousel>
        <CarouselContent className="">
          {(featuredProducts?.data?.data as unknown as TProduct[])?.map(
            (product) => (
              <CarouselItem
                key={product._id}
                className="basis-1/2 sm:basis-1/3 md:basis1/5 lg:basis-1/6"
              >
                <ProductCardPrimary product={product} />
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default TopRated;
