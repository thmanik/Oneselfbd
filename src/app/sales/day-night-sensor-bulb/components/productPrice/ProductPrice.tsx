import ContainerMax from "@/components/containerMax/ContainerMax";
import { FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const ProductPrice = () => {
  return (
    <section className="my-5">
      <div className="bg-[#116b80]">
        <ContainerMax>
          <div className="text-center py-5 flex justify-center items-center">
            <p className=" text-2xl text-red-600 font-bold bg-yellow-400 w-[74%] px-10 py-5 rounded-full">
              লাইটের মুল্য- ৪৭০ টাকা
            </p>
          </div>
        </ContainerMax>
      </div>
      <div className=" mt-5 mb-10">
        <OrderButton>
          <div>
            <span>অর্ডার করতে ক্লিক করুন</span>
          </div>
          <div>
            <FaShoppingCart className="mt-1 ms-2" />
          </div>
        </OrderButton>
      </div>
    </section>
  );
};

export default ProductPrice;
