import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
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

const TrendingProducts = async () => {
  const [{ data: trendingProducts = [] }] =
    await useQuery<TProduct[]>("/products/featured"); // TODO: Change endpoint

  return (
    <section className="pt-20">
      <ContainerMax>
        <SectionTitle title="Trending products" href="/shop" />
        <div>
          <Carousel>
            <CarouselContent className="p-4">
              {trendingProducts?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/5"
                >
                  <ProductCardPrimary product={product} />
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

export default TrendingProducts;
