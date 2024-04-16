import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
// import ProductCardSecondary from "@/components/productCards/ProductCardSecondary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const AllProducts = async () => {
  const [{ data: products = [] }] = await useQuery<TProduct[]>("/products");
  return (
    <section className="pt-16">
      <ContainerMax>
        <SectionTitle title="All products" href="/shop" />
        <div className="grid grid-cols-2 xls:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl: 2xl:grid-cols-5  gap-4 justify-center mt-5">
          {products?.map((product) => (
            // <ProductCardSecondary key={product._id} product={product} />
            <ProductCardPrimary product={product} key={product._id} />
          ))}
        </div>
      </ContainerMax>
    </section>
  );
};

export default AllProducts;
