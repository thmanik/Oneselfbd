import useQuery from "@/hooks/useQuery";
import { TSingleProduct } from "@/types/products/singleProduct";
import SalesPageOrder from "../components/SalesPageOrder/SalesPageOrder";
import FeaturesOfProduct from "./components/featuresOfProduct/FeaturesOfProduct";
import InformationSection from "./components/informationSection/InformationSection";
import OurServices from "./components/ourServices/OurServices";
import ProductBanner from "./components/productBanner/ProductBanner";
import ProductPrice from "./components/productPrice/ProductPrice";
import ProductReplacement from "./components/productReplacement/ProductReplacement";
import ProductVideo from "./components/productVideo/ProductVideo";
import UseOfTheProduct from "./components/useOfTheProduct/UseOfTheProduct";

const RadarSensorBulbLmYi2Page = async () => {
  const [{ data: product }] = await useQuery<TSingleProduct>(
    "/products/65eb0c91e1aa722f00f24fea"
  );

  return (
    <>
      <ProductBanner />
      <ProductVideo />
      <ProductPrice />
      <FeaturesOfProduct />
      <UseOfTheProduct />
      <InformationSection />
      <OurServices />
      <ProductReplacement />
      <SalesPageOrder product={product} />
    </>
  );
};

export default RadarSensorBulbLmYi2Page;
