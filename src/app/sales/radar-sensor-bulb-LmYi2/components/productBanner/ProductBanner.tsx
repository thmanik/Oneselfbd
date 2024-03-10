import { FaShoppingCart } from "react-icons/fa";

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
          <p className="text-3xl md:text-6xl">
            মানুষ এলেই জ্বলে উঠবে লাইট! আবার মানুষ চলে{" "}
          </p>
          <p className="md:mt-4 text-3xl md:text-6xl">
            গেলে লাইট নিজে নিজে বন্ধ হয়ে যাবে!
          </p>
        </div>

        <div className="w-80 md:w-96 py-4 rounded-full bg-[#1d96b4] mx-auto sm:px-5 my-3">
          <p className="text-xl md:text-2xl font-bold text-[#90EE90]">
            Radar motion sensor light
          </p>
        </div>
        <div className="leading-relaxed mt-8 text-xl  text-[#FFFFFF] pb-5">
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
          <a href="#order-form">
            {" "}
            <button
              className="md:w-96 px-5 bg-[#00C1F2] py-4 rounded-full mx-auto relative hover:bg-gradient-to-r from-[#63D6E8] to-[#241F21] transition-background-color duration-600 ease-in-out"
              style={{
                zIndex: 1,
                top: "-1rem",
              }}
            >
              <p className="md:text-2xl font-bold text-white flex items-center justify-center">
                <span>অর্ডার করতে ক্লিক করুন</span>{" "}
                <FaShoppingCart className="mt-1 ms-2" />
              </p>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
