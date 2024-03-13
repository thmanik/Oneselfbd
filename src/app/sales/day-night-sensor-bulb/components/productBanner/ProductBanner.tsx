import { FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const ProductBanner = () => {
  return (
    <section>
      <div
        className="text-center py-8 bg-[#116b80] relative"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
          borderRadius: "0 0 50% 50% / 0 0 18% 18%",
        }}
      >
        <div className="text-[#FFFFFF] font-bold mx-4 md:mt-14 mb-1">
          <p className="text-2xl md:text-6xl">
            ডে নাইট সেন্সর বাল্ব হলো এক ধরণের{" "}
          </p>
          <p className="md:mt-4 text-2xl md:text-6xl">
            উন্নত LED বাল্ব । এই বাল্প টা সন্ধ্যা হওয়া মাত্র, অটোমেটিক
          </p>
          <p className="md:mt-4 text-2xl md:text-6xl">
            জলে উঠে আবার সকাল হওয়া মাত্র অটোমেটিক বন্ধ হয়ে যায়
          </p>
        </div>

        <div className="w-80 md:w-96 py-4 rounded-full bg-[#1d96b4] mx-auto sm:px-5 my-3">
          <p className="text-xl md:text-2xl font-bold text-[#90EE90]">
            Day-Night Motion Sensor Light
          </p>
        </div>
        <div className="leading-relaxed mt-8 text-xl  text-[#FFFFFF] pb-5">
          <p>
            বিভিন্ন পণ্যের দাম বৃদ্ধির পাশাপাশি বাংলাদেশের বিদ্যুৎ বিলও বেড়েছে{" "}
            <br />
            তাই আপনি চাইলে আমাদের এই অটো ডে নাইট সেন্সর বাল্পটা ব্যবহার করে আপনি
            কমাতে পারেন আপনার অতিরিক্ত বিদ্যুৎ বিল
          </p>
        </div>
      </div>
      <div>
        <OrderButton
          style={{
            zIndex: 1,
            top: "-2rem",
            position: "relative",
          }}
        >
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

export default ProductBanner;
