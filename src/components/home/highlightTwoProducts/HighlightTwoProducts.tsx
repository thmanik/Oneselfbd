import ContainerMax from "@/components/containerMax/ContainerMax";
import HorizontalProductCard from "@/components/productCards/HorizontalProductCard";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";

const HighlightTwoProducts = async () => {
  const { data: bannerSideProducts } = await useQuery("/products"); // update endpoint
  return (
    <section className="pt-20">
      <ContainerMax>
        <div className="flex gap-5 w-full flex-wrap">
          {(bannerSideProducts?.data?.data as unknown as TProduct[])
            .slice(0, 2)
            .map((product) => (
              <div key={product._id} className="flex-grow">
                <HorizontalProductCard product={product} />
              </div>
            ))}
        </div>
      </ContainerMax>
    </section>
  );
};

export default HighlightTwoProducts;
