/* eslint-disable no-unused-vars */
import ContainerMax from "@/components/containerMax/ContainerMax";
import { TSingleProduct } from "@/types/products/singleProduct";
import SalesHeadingPrimary from "../ui/SalesHeadingPrimary/SalesHeadingPrimary";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SalesPageOrder = ({ product }: { product?: TSingleProduct }) => {
  return (
    <section id="order-form" className="bg-red-100">
      <ContainerMax>
        <SalesHeadingPrimary
          title="তাই আর দেরি না করে আজই অর্ডার করুন"
          className="pt-20"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            corporis iure voluptate dolorum soluta expedita doloribus architecto
            mollitia amet debitis, culpa tenetur aliquam temporibus sed
            cupiditate corrupti. Explicabo, provident quas.
          </p>
        </div>
      </ContainerMax>
    </section>
  );
};

export default SalesPageOrder;
