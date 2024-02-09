import ProductHighlight from "@/components/home/ProductHighlight/ProductHighlight";
import FeatureProduct from "@/components/home/featureProduct/FeatureProduct";
import PopularProducts from "@/components/home/popularProducts/PopularProducts";
import SuggestedProducts from "@/components/home/productCarousel/ProductCarousel";
import ProductsGallery from "@/components/home/productsGallery/ProductsGallery";
import ProductsPromotion from "@/components/home/productsPromotion/ProductsPromotion";
import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import { Metadata } from "next";
import Carousel from "../components/home/carousel/Carousel";
import PreFooter from "./ui/shared/preFooter/PreFooter";

export const metadata: Metadata = {
  title: "Home | Oneself",
  description: "Buy now",
};

const Home = () => {
  return (
    <>
      <Carousel />
      <SuggestedProducts />
      <ProductHighlight />
      <FeatureProduct />
      <TrendingProducts />
      <PopularProducts />
      <ProductsGallery />
      <ProductsPromotion />
      <PreFooter />
    </>
  );
};
export default Home;
