import { FaShoppingCart } from "react-icons/fa";
const ProductPrice = () => {
  return (
    <section>
      <div className="w-full bg-[#116b80] flex justify-center items-center h-36">
        <div className="w-[74%] bg-[#FBFF00] flex justify-center rounded-full items-center h-16">
          <p className="italic text-2xl text-[#ff0000] font-bold ">
            লাইটের মুল্য- ৪৮০ টাকা
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-10">
        <a href="#">
          <button className="md:w-64 px-5 bg-[#00C1F2] py-4 rounded-full mx-auto sm:px-5 relative hover:bg-gradient-to-r from-[#63D6E8] to-[#241F21] transition-background-color duration-600 ease-in-out">
            <p className="md:text-2xl font-bold text-white flex items-center justify-center">
              <span>অর্ডার করতে </span> <FaShoppingCart className="mt-1 ms-2" />
            </p>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProductPrice;
