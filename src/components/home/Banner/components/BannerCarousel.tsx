// // BannerCarousel.tsx
// import useQuery from "@/hooks/useQuery";
// import { TSliders } from "@/types/sliders/slider";
// import ClientBannerCarousel from "./BannerCarouselClient";

// const BannerCarousel = async () => {
//   const [{ data }] =
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     await useQuery<any>("/slider-banner"); // TODO: change endpoint
//   const allsliders = (data as TSliders[]) || [];

//   return (
//     <div className="md:mt-2 ">
//       {/* Pass data to the client component while keeping the original design */}
//       <ClientBannerCarousel sliders={allsliders.slice(0, 5)} />
//     </div>
//   );
// };

// export default BannerCarousel;

// BannerCarousel.tsx
// import useQuery from "@/hooks/useQuery";
// import { TProduct } from "@/types/products/product";
// import { TSliders } from "@/types/sliders/slider";
// import ClientBannerCarousel from "./BannerCarouselClient";

// type BannerCarouselProps = {
//   bannerSideProducts: TProduct[]; // Ensure this is an array of TProduct
// };

// const BannerCarousel = async ({ bannerSideProducts }: BannerCarouselProps) => {
//   const [{ data }] = await useQuery<TSliders[]>("/slider-banner"); // Use appropriate type for the response
//   const allsliders = data || []; // Default to an empty array if data is undefined

//   return (
//     <div className="md:mt-2">
//       {/* Pass data to the client component while keeping the original design */}
//       <ClientBannerCarousel
//         bannerSideProducts={bannerSideProducts}
//         sliders={allsliders.slice(0, 5)}
//       />
//     </div>
//   );
// };

// export default BannerCarousel;
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import { TSliders } from "@/types/sliders/slider";
import ClientBannerCarousel from "./BannerCarouselClient";

type BannerCarouselProps = {
  bannerSideProducts: TProduct[]; // Ensure this is an array of TProduct
};

const BannerCarousel = async ({ bannerSideProducts }: BannerCarouselProps) => {
  const [{ data }] = await useQuery<TSliders[]>("/slider-banner"); // Use appropriate type for the response
  const allsliders = data || []; // Default to an empty array if data is undefined

  return (
    <div className="md:mt-2">
      {/* Pass data to the client component while keeping the original design */}
      <ClientBannerCarousel
        bannerSideProducts={bannerSideProducts}
        sliders={allsliders.slice(0, 5)}
      />
    </div>
  );
};

export default BannerCarousel;
