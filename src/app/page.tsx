import HighlightAProduct from "@/components/highlightAProduct/HighlightedProduct";
import Banner from "@/components/home/Banner/Banner";
import HighlightTwoProducts from "@/components/home/highlightTwoProducts/HighlightTwoProducts";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import ProductsGallery from "@/components/home/productsGallery/ProductsGallery";
import SuggestedProducts from "@/components/home/suggestedProducts/suggestedProducts";
import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";

const Home = async () => {
  const [{ data: highlightedProducts = [] }] =
    await useQuery<TProduct[]>("/products/featured"); // TODO: Change endpoint

  return (
    <>
      <Banner />
      <SuggestedProducts />
      <HighlightAProduct product={highlightedProducts[0] ?? null} />
      <TrendingProducts />
      <PopularProducts />
      <HighlightTwoProducts />
      <ProductsGallery />
    </>
  );
};
export default Home;
