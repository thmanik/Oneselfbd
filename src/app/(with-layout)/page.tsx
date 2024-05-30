import Banner from "@/components/home/Banner/Banner";
// import HighlightTwoProducts from "@/components/home/highlightTwoProducts/HighlightTwoProducts";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import ProductsGallery from "@/components/home/productsGallery/ProductsGallery";
// import SuggestedProducts from "@/components/home/suggestedProducts/suggestedProducts";
// import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import ContainerMax from "@/components/containerMax/ContainerMax";
import AllProducts from "@/components/home/AllProducts/AllProducts";
import FacilitiesButtons from "@/components/home/Banner/FacilitiesButtons/FacilitiesButtons";
import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";
import CategorySection from "./shop/components/CategorySection";

const Home = async () => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  return (
    <>
      <Banner />
      <ContainerMax>
        <FacilitiesButtons />
      </ContainerMax>
      <ContainerMax>
        <CategorySection categories={categories} />
      </ContainerMax>
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
