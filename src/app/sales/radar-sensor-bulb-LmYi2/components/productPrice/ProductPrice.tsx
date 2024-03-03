import { FaShoppingCart } from "react-icons/fa";
const ProductPrice = () => {
  return (
    <section>
      <div className="w-full bg-[#346540] flex justify-center items-center h-32">
        <div className="w-[74%] bg-[#FBFF00] flex justify-center items-center h-16">
          <p className="italic text-2xl text-[#FF0000] font-bold ">
            লাইটের মুল্য- ৪৮০ টাকা
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-10">
        <a href="#">
          <button className="w-64 bg-[#01ad2c] py-4 rounded-full mx-auto sm:px-5 relative hover:bg-gradient-to-r from-[#01ad2c] to-[#1c4d35] transition-background-color duration-600 ease-in-out">
            <p className="text-2xl font-bold text-white flex items-center justify-center">
              <span>অর্ডার করতে </span> <FaShoppingCart className="mt-1 ms-2" />
            </p>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProductPrice;
