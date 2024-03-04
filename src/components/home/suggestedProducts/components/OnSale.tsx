import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const OnSale = async () => {
  const [{ data: onSaleProducts = [] }] =
    await useQuery<TProduct[]>("/products/featured"); // TODO: Change endpoint

  return (
    <>
      <Carousel>
        <CarouselContent className="p-3">
          {onSaleProducts?.map((product) => (
            <CarouselItem
              key={product._id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5"
            >
              <ProductCardPrimary product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default OnSale;
