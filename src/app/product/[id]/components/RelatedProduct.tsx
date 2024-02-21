import ProductCardSecondary from "@/components/productCards/ProductCardSecondary";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { TProduct } from "@/types/products/product";
const RelatedProduct = ({ products }: { products: TProduct[] }) => {
  return (
    <>
      <SectionTitle title="You may also like" href="/shop" />
      <div className="flex gap-3 flex-wrap justify-center mt-5">
        {products?.map((product) => (
          <ProductCardSecondary key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProduct;
