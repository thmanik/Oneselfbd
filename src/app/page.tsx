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
  const { data } = await useQuery("/products/featured"); // TODO: Change endpoint
  const highlightedProducts = (data?.data?.data as unknown as TProduct[]) ?? [];
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
