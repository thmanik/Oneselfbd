import useQuery from "@/hooks/useQuery";
import { TSingleProduct } from "@/types/products/singleProduct";
import SalesPageOrder from "../components/SalesPageOrder/SalesPageOrder";
import FeaturesOfProduct from "./components/featuresOfProduct/FeaturesOfProduct";
import InformationSection from "./components/informationSection/InformationSection";
import OurServices from "./components/ourServices/OurServices";
import OvercomeYourProblem from "./components/overcomeYourProblem/OvercomeYourProblem";
import ProductBanner from "./components/productBanner/ProductBanner";
import ProductPrice from "./components/productPrice/ProductPrice";
import ProductReplacement from "./components/productReplacement/ProductReplacement";
import ProductVideo from "./components/productVideo/ProductVideo";
import UseOfTheProduct from "./components/useOfTheProduct/UseOfTheProduct";
const DayNightSensorBulbPage = async () => {
  const [{ data: product }] = await useQuery<TSingleProduct>(
    "/products/65eb0c91e1aa722f00f24fea"
  );
  return (
    <div>
      <ProductBanner />
      <OvercomeYourProblem />
      <ProductVideo />
      <ProductPrice />
      <FeaturesOfProduct />
      <UseOfTheProduct />
      <InformationSection />
      <OurServices />
      <ProductReplacement />
      <SalesPageOrder product={product} orderFrom="Landing page - 1" />
    </div>
  );
};

export default DayNightSensorBulbPage;
