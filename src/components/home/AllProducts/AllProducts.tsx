import ContainerMax from "@/components/containerMax/ContainerMax";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
// import ProductCardSecondary from "@/components/productCards/ProductCardSecondary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const AllProducts = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [{ data }] = await useQuery<any>("/products");
  const products = data as TProduct[];
  return (
    <section className="pt-6 px-2">
      <ContainerMax>
        <SectionTitle title="All products" href="/shop" />
        <div className="grid grid-cols-2 xls:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl: 2xl:grid-cols-5 gap-4 md:gap-7 justify-center mt-5">
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
