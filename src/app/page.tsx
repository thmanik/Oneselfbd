import ProductHighlight from "@/components/ProductHighlight/ProductHighlight";
import PopularProducts from "@/components/popularProducts/PopularProducts";
import ProductsGallery from "@/components/productsGallery/ProductsGallery";
import ProductsPromotion from "@/components/productsPromotion/ProductsPromotion";
import TrendingProducts from "@/components/trendingProducts/TrendingProducts";
import Carousel from "../components/carousel/Carousel";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import PreFooter from "./ui/shared/prefooter/PreFooter";

export default function Home() {
  return (
    <main className=" items-center justify-between ">
      <Carousel></Carousel>
      <ProductCarousel></ProductCarousel>
      <ProductHighlight></ProductHighlight>
      <FeatureProduct></FeatureProduct>
      <TrendingProducts></TrendingProducts>
      <PopularProducts></PopularProducts>
      <ProductsGallery></ProductsGallery>
      <ProductsPromotion></ProductsPromotion>
      <PreFooter></PreFooter>
    </main>
  );
}
