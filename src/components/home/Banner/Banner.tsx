import ContainerMax from "@/components/containerMax/ContainerMax";
import HorizontalProductCard from "@/components/productCards/HorizontalProductCard";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";
import BannerCarousel from "./components/BannerCarousel";

const Banner = async () => {
  const { data } = await useQuery("/products"); // TODO: change endpoints
  const bannerSideProducts = (data?.data?.data as unknown as TProduct[]) ?? [];

  return (
    <section>
      <ContainerMax>
        <div className="grid grid-cols-8 lg:grid-cols-12 mt-5 gap-5 justify-between">
          <div className="col-span-8">
            <BannerCarousel />
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-4  my-3 space-y-5">
            {bannerSideProducts
              ?.slice(0, 3)
              ?.map((product) => (
                <HorizontalProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default Banner;