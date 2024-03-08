import Banner from "@/components/home/Banner/Banner";
// import HighlightTwoProducts from "@/components/home/highlightTwoProducts/HighlightTwoProducts";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import ProductsGallery from "@/components/home/productsGallery/ProductsGallery";
// import SuggestedProducts from "@/components/home/suggestedProducts/suggestedProducts";
// import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import useQuery from "@/hooks/useQuery";
import CategorySection from "./shop/components/CategorySection";
import TCategory from "@/types/categories/categories";
import AllProducts from "@/components/home/AllProducts/AllProducts";

const Home = async () => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  return (
    <>
      <Banner />
      <CategorySection categories={categories} />
      {/* <SuggestedProducts /> */}
      {/* <TrendingProducts /> */}
      {/* <PopularProducts /> */}
      {/* <HighlightTwoProducts /> */}
      <PopularProducts />
      <AllProducts />
      <ProductsGallery />
    </>
  );
};
export default Home;
