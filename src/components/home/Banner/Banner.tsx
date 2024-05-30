import ContainerMax from "@/components/containerMax/ContainerMax";
import HorizontalProductCard from "@/components/productCards/HorizontalProductCard";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import BannerCarousel from "./components/BannerCarousel";

const Banner = async () => {
  const [{ data }] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await useQuery<any>("/products"); // TODO: change endpoints
  const bannerSideProducts = (data?.products as TProduct[]) || [];
  return (
    <section>
      <ContainerMax>
        <div className="grid grid-cols-8 lg:grid-cols-12  gap-5 justify-between">
          <div className="col-span-8">
            <BannerCarousel />
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-4  my-4 space-y-5">
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
