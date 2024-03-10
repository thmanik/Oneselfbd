import ContainerMax from "@/components/containerMax/ContainerMax";
import { FaShoppingCart } from "react-icons/fa";
const ProductPrice = () => {
  return (
    <section>
      <div className="bg-[#116b80]">
        <ContainerMax>
          <div className="text-center py-5 flex justify-center items-center">
            <p className="italic text-2xl text-red-600 font-bold bg-yellow-400 w-[74%] px-10 py-5 rounded-full">
              লাইটের মুল্য- ৪৮০ টাকা
            </p>
          </div>
        </ContainerMax>
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <a href="#order-form">
          <button className="md:w-64 px-5 bg-[#00C1F2] py-4 rounded-full mx-auto sm:px-5 relative hover:bg-gradient-to-r from-[#63D6E8] to-[#241F21] transition-all duration-600 ease-in-out">
            <p className="md:text-2xl font-bold text-white flex items-center justify-center">
              <span> অর্ডার করুন</span> <FaShoppingCart className="mt-1 ms-2" />
            </p>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProductPrice;
