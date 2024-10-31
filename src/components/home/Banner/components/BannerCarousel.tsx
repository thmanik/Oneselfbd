// BannerCarousel.tsx
import useQuery from "@/hooks/useQuery";
import { TSliders } from "@/types/sliders/slider";
import ClientBannerCarousel from "./BannerCarouselClient";

const BannerCarousel = async () => {
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/slider-banner"); // TODO: change endpoint
  const allsliders = (data as TSliders[]) || [];

  return (
    <div className="mt-2">
      {/* Pass data to the client component while keeping the original design */}
      <ClientBannerCarousel sliders={allsliders.slice(0, 5)} />
    </div>
  );
};

export default BannerCarousel;
