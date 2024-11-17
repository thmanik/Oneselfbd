// import ContainerMax from "@/components/containerMax/ContainerMax";
// import HorizontalProductCard from "@/components/productCards/HorizontalProductCard";
// import useQuery from "@/hooks/useQuery";
// import { TProduct } from "@/types/products/product";
// import BannerCarousel from "./components/BannerCarousel";

// const Banner = async () => {
//   const [{ data }] =
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     await useQuery<any>("/products/featured"); // TODO: change endpoints
//   const bannerSideProducts = (data as TProduct[]) || [];
//   return (
//     <section className="mt-[68px] sm:mt-0">
//       <ContainerMax>
//         <div className="grid grid-cols-8 lg:grid-cols-12  gap-5 justify-between">
//           <div className="col-span-8">
//             <BannerCarousel />
//           </div>
//           <div className="col-span-8 md:col-span-4 lg:col-span-4  md:my-2 space-y-5">
//             {bannerSideProducts
//               ?.slice(0, 3)
//               ?.map((product) => (
//                 <HorizontalProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </div>
//       </ContainerMax>
//     </section>
//   );
// };

// export default Banner;

/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerMax from "@/components/containerMax/ContainerMax";
import HorizontalProductCard from "@/components/productCards/HorizontalProductCard";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import BannerCarousel from "./components/BannerCarousel";

const Banner = async () => {
  const [{ data }] = await useQuery<any>("/products/featured");
  const bannerSideProducts = (data as TProduct[]) || [];

  return (
    <section className="mt-[70px] sm:mt-0">
      <ContainerMax>
        <div className="grid grid-cols-8 lg:grid-cols-12 gap-5 justify-between">
          <div
            className={`col-span-${bannerSideProducts?.length ? "8" : "12"}`}
          >
            <BannerCarousel bannerSideProducts={bannerSideProducts} />
          </div>
          {bannerSideProducts?.length > 0 && (
            <div className="col-span-8 md:col-span-4 lg:col-span-4 md:my-2 space-y-5">
              {bannerSideProducts.slice(0, 3).map((product) => (
                <HorizontalProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </ContainerMax>
    </section>
  );
};

export default Banner;
