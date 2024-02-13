import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";

const TrendingProducts = async () => {
  const { data } = await useQuery("/products/featured"); // TODO: Change endpoint
  const trendingProducts = (data?.data?.data as unknown as TProduct[]) ?? [];
  return (
    <section className="pt-20">
      <ContainerMax>
        <SectionTitle title="Trending products" href="/products" />
        <div>
          <Carousel>
            <CarouselContent className="">
              {trendingProducts?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="basis-1/2 sm:basis-1/3 md:basis1/5 lg:basis-1/6"
                >
                  <ProductCardPrimary product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </ContainerMax>
    </section>
  );
};

export default TrendingProducts;
