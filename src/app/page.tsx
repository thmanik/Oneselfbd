import ProductHighlight from "@/components/ProductHighlight/ProductHighlight";
import PopularProducts from "@/components/popularProducts/PopularProducts";
import ProductsGallery from "@/components/productsGallery/ProductsGallery";
import ProductsPromotion from "@/components/productsPromotion/ProductsPromotion";
import TrendingProducts from "@/components/trendingProducts/TrendingProducts";
import Carousel from "../components/carousel/Carousel";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import Footer from "./ui/shared/footer/Footer";
import Header from "./ui/shared/header/Header";
import PreFooter from "./ui/shared/preFooter/PreFooter";

export default function Home() {
  return (
    <main className=" items-center justify-between ">
      <Header></Header>
      <Carousel></Carousel>
      <ProductCarousel></ProductCarousel>
      <ProductHighlight></ProductHighlight>
      <FeatureProduct></FeatureProduct>
      <TrendingProducts></TrendingProducts>
      <PopularProducts></PopularProducts>
      <ProductsGallery></ProductsGallery>
      <ProductsPromotion></ProductsPromotion>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </main>
  );
}
