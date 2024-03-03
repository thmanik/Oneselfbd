import { FaShoppingCart } from "react-icons/fa";
const ProductBanner = () => {
  return (
    <div>
      <div
        className="text-center py-8 "
        style={{
          backgroundColor: "#1D4935",
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
          borderRadius: "0 0 50% 50% / 0 0 18% 18%",
        }}
      >
        <div className="text-white font-bold mx-4 md:mt-14 mb-1">
          <p className="text-5xl md:text-5xl sm:text-xl xs:text-xl">
            মানুষ এলেই জ্বলে উঠবে লাইট! আবার মানুষ চলে{" "}
          </p>
          <p className="md:mt-4 text-5xl md:text-5xl sm:text-xl xs:text-xl">
            গেলে লাইট নিজে নিজে বন্ধ হয়ে যাবে!
          </p>
        </div>

        <div
          className="w-96  py-4 rounded-full  mx-auto sm:px-5 my-3"
          style={{ backgroundColor: "#195B3D" }}
        >
          <p className="text-2xl font-bold text-yellow-400">
            Radar motion sensor light
          </p>
        </div>
        <div className="leading-relaxed mt-8 text-white pb-5">
          <p>
            মোশন সেন্সর লাইট বিদ্যুৎ সাশ্রয়ী। <br />
            কারণ যখন আপনি লাইটের নিচে যাবেন , তখন লাইটটি জ্বলবে; আবার যখন আপনি
            লাইটের নিচ থেকে <br />
            চলে আসবেন , লাইটি নিজে নিজে বন্ধ হয়ে যাবে। <br />
            <br />
            ফলে এতে অতিরিক্ত বিদ্যুৎ খরচের কোনো সম্ভাবনা নেই। <br />
            এছাড়া, স্বয়ংক্রিয়ভাবে এই লাইটি জ্বলা কিংবা বন্ধ হওয়ায়। স্যুইচ
            অন - অফ করার কোনো প্রয়োজন নেই ।
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <a href="#">
            {" "}
            <button
              className="w-96 bg-[#01ad2c] py-4 rounded-full mx-auto sm:px-5 relative hover:bg-gradient-to-r from-[#01ad2c] to-[#1c4d35] transition-background-color duration-600 ease-in-out"
              style={{
                zIndex: 1,
                top: "-1rem",
              }}
            >
              <p className="text-2xl font-bold text-white flex items-center justify-center">
                <span>অর্ডার করতে ক্লিক করুন</span>{" "}
                <FaShoppingCart className="mt-1 ms-2" />
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
