// export default BannerCarousel;
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import { TSliders } from "@/types/sliders/slider";
import ClientBannerCarousel from "./BannerCarouselClient";

type BannerCarouselProps = {
  bannerSideProducts: TProduct[];
};

const BannerCarousel = async ({ bannerSideProducts }: BannerCarouselProps) => {
  const [{ data }] = await useQuery<TSliders[]>("/slider-banner?isActive=true");
  const allsliders = data || [];

  return (
    <div className="md:mt-2">
      <ClientBannerCarousel
        bannerSideProducts={bannerSideProducts}
        sliders={allsliders.slice(0, 5)}
      />
    </div>
  );
};

export default BannerCarousel;
