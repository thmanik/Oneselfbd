import FeaturesOfProduct from "../components/featuresOfProduct/FeaturesOfProduct";
import ProductBanner from "../components/productBanner/ProductBanner";
import ProductPrice from "../components/productPrice/ProductPrice";
import ProductVideo from "../components/productVideo/ProductVideo";
import UseOfTheProduct from "../components/useOfTheProduct/UseOfTheProduct";
const RadarSensorBulbPage = () => {
  return (
    <div className="font-hind-siliguri ">
      <ProductBanner />
      <ProductVideo />
      <ProductPrice />
      <FeaturesOfProduct />
      <UseOfTheProduct />
    </div>
  );
};

export default RadarSensorBulbPage;
