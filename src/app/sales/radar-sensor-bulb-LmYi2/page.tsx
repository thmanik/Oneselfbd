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
    "/products/65eb25a2e1aa722f00f253f4"
  );

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ProductBanner />
      <ProductVideo />
      <ProductPrice product={product} />
      <FeaturesOfProduct />
      <UseOfTheProduct />
      <InformationSection product={product} />
      <OurServices />
      <ProductReplacement />
      <SalesPageOrder product={product} lpNo="1" />
    </>
  );
};

export default RadarSensorBulbLmYi2Page;
