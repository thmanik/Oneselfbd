import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardSecondary from "@/components/productCards/ProductCardSecondary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/product";

const ProductsGallery = async () => {
  const { data } = await useQuery("/products");
  const products = (data?.data?.data as unknown as TProduct[]) ?? [];
  return (
    <section className="pt-20">
      <ContainerMax>
        <SectionTitle title="All products" href="/shop" />
        <div className="flex gap-3 flex-wrap justify-center mt-5">
          {products?.map((product) => (
            <ProductCardSecondary key={product._id} product={product} />
          ))}
        </div>
      </ContainerMax>
    </section>
  );
};

export default ProductsGallery;
