import ContainerMax from "@/components/containerMax/ContainerMax";
import CarousalProductsCard from "@/components/productCards/CarosalProductCard";

import SectionTitle from "@/components/sectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextPMiddle,
  CarouselPreviousPMiddle,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const PopularProducts = async () => {
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/products"); // TODO: Change endpoint
  const popularProducts = data as TProduct[];

  return (
    <section className="pt-8">
      <ContainerMax>
        <SectionTitle title="Popular products" href="/shop" />
        <div>
          <Carousel>
            <CarouselContent className="p-4">
              {popularProducts?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/6 mx-4 md:mx-5"
                >
                  <CarousalProductsCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPreviousPMiddle />
            <CarouselNextPMiddle />
          </Carousel>
        </div>
      </ContainerMax>
    </section>
  );
};

export default PopularProducts;
