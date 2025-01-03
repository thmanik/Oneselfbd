import ContainerMax from "@/components/containerMax/ContainerMax";
import { TSingleProduct } from "@/types/products/singleProduct";
import { FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";
const ProductPrice = ({ product }: { product: TSingleProduct }) => {
  return (
    <section className="my-5">
      <div className="bg-[#116b80]">
        <ContainerMax>
          <div className="text-center py-5 flex justify-center items-center">
            <p className="italic text-2xl text-red-600 font-bold bg-yellow-400 w-[74%] px-10 py-5 rounded-full">
              লাইটের মুল্য- <span>{product?.price?.salePrice}</span> টাকা
            </p>
          </div>
        </ContainerMax>
      </div>
      <div className="mt-5">
        <OrderButton>
          <p className="!text-xl !md:text-2xl font-bold  flex items-center justify-center">
            <span> অর্ডার করুন</span>
            <FaShoppingCart className="mt-1 ms-2" />
          </p>
        </OrderButton>
      </div>
    </section>
  );
};

export default ProductPrice;
