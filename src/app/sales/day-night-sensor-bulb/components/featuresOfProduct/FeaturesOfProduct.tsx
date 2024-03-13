import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const FeaturesOfProduct = () => {
  const features = [
    {
      id: "01",
      title:
        "বাল্বটি কেবলমাত্র রাতের বেলায় জ্বলবে, ফলে বিদ্যুৎ খরচ অনেকাংশে কমে যাবে।",
    },
    {
      id: "02",
      title:
        "বারবার সুইচ টিপতে হবে না, লাইটি নিজেই চালু ও বন্ধ হবে। সন্ধ্যা হলে অটোমেটিক জল্বে সকাল হলে লাইট অটোমেটিক বন্ধ হয়ে যাবে।",
    },
    {
      id: "03",
      title: " নরমাল লাইটের মত যেকোন হোল্ডারে ব্যবহার করা যাই।",
    },
    {
      id: "04",
      title:
        " লাইটের ভিতরে উন্নত্য মানের সেন্সর ব্যবহার করার কারনে সহজে নস্ট হয় না এবং অনেক দিন যাবত ব্যবহার করতে পারবেন।",
    },

    {
      id: "05",
      title:
        "বাইরে বের হওয়ার সময় বাতি জ্বলিয়ে রাখার দরকার নেই, ফলে আগুন লাগার ঝুঁকি কমে যায়।",
    },
    {
      id: "06",
      title: "বিদ্যুৎ খরচ কমিয়ে পরিবেশের ক্ষতি রোধ করে।",
    },
  ];

  return (
    <section className="sm:mx-10 my-8">
      <div>
        <div className="w-80 md:w-96 py-4 rounded-full text-center bg-[#F58921] mx-auto sm:px-5 mt-4 mb-14">
          <p className="text-2xl font-bold  text-accent">
            লাইটি ব্যবহারের সুবিধাসমূহ
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="text-[#203B56] text-[20px] w-[85%]">
            {features.map((feature) => (
              <div
                key={feature?.id}
                className="flex py-4 items-center border-b-[1px] border-b-gray-300"
              >
                <div className="w-25 h-22 mr-2 flex-shrink-0">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="mt-1 ml-3">{feature?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-8">
          <OrderButton>
            <div>
              <span>অর্ডার করতে ক্লিক করুন</span>
            </div>
            <div>
              <FaShoppingCart className="mt-1 ms-2" />
            </div>
          </OrderButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOfProduct;
