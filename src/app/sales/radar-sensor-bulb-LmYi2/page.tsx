import FeaturesOfProduct from "./components/featuresOfProduct/FeaturesOfProduct";
import InformationSection from "./components/informationSection/InformationSection";
import OurServices from "./components/ourServices/OurServices";
import ProductBanner from "./components/productBanner/ProductBanner";
import ProductPrice from "./components/productPrice/ProductPrice";
import ProductReplacement from "./components/productReplacement/ProductReplacement";
import ProductVideo from "./components/productVideo/ProductVideo";
import UseOfTheProduct from "./components/useOfTheProduct/UseOfTheProduct";

const RadarSensorBulbLmYi2Page = () => {
  return (
    <div className="font-hind-siliguri ">
      <ProductBanner />
      <ProductVideo />
      <ProductPrice />
      <FeaturesOfProduct />
      <UseOfTheProduct />
      <InformationSection />
      <OurServices />
      <ProductReplacement />
    </div>
  );
};

export default RadarSensorBulbLmYi2Page;
