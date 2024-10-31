// BannerCarousel.tsx
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import ClientBannerCarousel from "./BannerCarouselClient";

const BannerCarousel = async () => {
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/slider-banner"); // TODO: change endpoint
  const carouselProducts = (data as TProduct[]) || [];

  return (
    <div className="mt-2">
      {/* Pass data to the client component while keeping the original design */}
      <ClientBannerCarousel products={carouselProducts.slice(0, 5)} />
    </div>
  );
};

export default BannerCarousel;
