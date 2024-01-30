import ProductHighlight from "@/components/ProductHighlight/ProductHighlight";
import PopularProducts from "@/components/popularProducts/PopularProducts";
import PreFooter from "@/components/preFooter/PreFooter";
import ProductsGallery from "@/components/productsGallery/ProductsGallery";
import ProductsPromotion from "@/components/productsPromotion/ProductsPromotion";
import TrandingProducts from "@/components/trandingProducts/TrandingProducts";
import Carousel from "../components/carousel/Carousel";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
export default function Home() {
  return (
    <main className=" items-center justify-between ">
      <Carousel></Carousel>
      <ProductCarousel></ProductCarousel>
      <ProductHighlight></ProductHighlight>
      <FeatureProduct></FeatureProduct>
      <TrandingProducts></TrandingProducts>
      <PopularProducts></PopularProducts>
      <ProductsGallery></ProductsGallery>
      <ProductsPromotion></ProductsPromotion>
      <PreFooter></PreFooter>
    </main>
  );
}
