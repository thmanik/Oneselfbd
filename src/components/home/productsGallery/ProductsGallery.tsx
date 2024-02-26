import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardSecondary from "@/components/productCards/ProductCardSecondary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const ProductsGallery = async () => {
  const [{ data: products = [] }] = await useQuery<TProduct[]>("/products");

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
