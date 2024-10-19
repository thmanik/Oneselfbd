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
import { twMerge } from "tailwind-merge";

const BestSellingProducts = async () => {
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/products/best-selling"); // TODO: Change endpoint
  const bestSellingProducts = data as TProduct[];

  return (
    <section className="pt-8">
      <ContainerMax>
        <SectionTitle title="Best-selling" href="/shop" />
        <div>
          <Carousel>
            {/* Remove padding on small screens */}
            <CarouselContent className="p-0 sm:p-4 justify-start">
              {bestSellingProducts?.map((product, index) => (
                // <CarouselItem
                //   key={product._id}
                //   className={`basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/6  xms:mx-6 sm:mx-5 mx-5 ${
                //     index === 0 ? "ml-0 xms:ml-0" : "ml-5"
                //   }`}
                // >
                //   <CarousalProductsCard product={product} />
                // </CarouselItem>
                <CarouselItem
                  key={product._id}
                  className={twMerge(`
                 basis-[calc(48%-1rem)] 
                 sm:basis-[calc(48%-1rem)] 
                md:basis-1/4 
                 xl:basis-1/6 
                 xms:mx-4 sm:mx-5 mx-5
                 ${index === 0 ? "ml-0 xms:ml-0" : "ml-0"}
               `)}
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

export default BestSellingProducts;
