import ContainerMax from "@/components/containerMax/ContainerMax";
import CarosalProductsCard from "@/components/productCards/CarosalProductCard";

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
  const [{ data: popularProducts = [] }] =
    await useQuery<TProduct[]>("/products"); // TODO: Change endpoint

  return (
    <section className="pt-20">
      <ContainerMax>
        <SectionTitle title="Popular products" href="/shop" />
        <div>
          <Carousel>
            <CarouselContent className="p-4">
              {popularProducts?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/6 mx-5"
                >
                  <CarosalProductsCard product={product} />
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
