import Banner from "@/components/home/Banner/Banner";
import HighlightTwoProducts from "@/components/home/highlightTwoProducts/HighlightTwoProducts";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import ProductsGallery from "@/components/home/productsGallery/ProductsGallery";
import SuggestedProducts from "@/components/home/suggestedProducts/suggestedProducts";
import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";

const Home = async () => {
  return (
    <>
      <Banner />
      <SuggestedProducts />
      <TrendingProducts />
      <PopularProducts />
      <HighlightTwoProducts />
      <ProductsGallery />
    </>
  );
};
export default Home;
