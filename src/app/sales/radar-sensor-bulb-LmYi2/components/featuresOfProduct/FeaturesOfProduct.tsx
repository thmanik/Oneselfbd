import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";
const FeaturesOfProduct = () => {
  const features = [
    {
      id: "01",
      title: "বিদ্যুৎ বিল বিশেষভাবে সাশ্রয়ী ও অপচয় রোধকারী ।",
    },
    {
      id: "02",
      title: "নরমাল লাইটের মত যেকোনো হোল্ডারে ব্যবহার করা যায় ।",
    },
    {
      id: "03",
      title: "সুইচ অফ-অন এর ঝামেলা নেই ।",
    },
    {
      id: "04",
      title:
        "লাইটের নিচে মানুষ আসলে লাইটি জল্বে, লাইটের নিচ থেকে মানুষ চলে গেলে ৩০ সেকেন্ড পরে বন্ধ হয়ে যাবে ।",
    },
    {
      id: "05",
      title: "চোরের যম ও ডিজিটাল পাহারাদার ।",
    },
    {
      id: "06",
      title: "আপনার ঘর ও আপনাকে করবে স্মার্ট।",
    },
  ];
  return (
    <section className="sm:mx-10 my-8">
      <div>
        <div className="w-80 md:w-96  py-4  rounded-full text-center bg-[#edf7fa]  mx-auto sm:px-5 mt-4 mb-14">
          <p className="text-2xl font-bold  text-[#203B56]">
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
            <p className="md:text-2xl font-bold  flex items-center justify-center">
              <span>অর্ডার করতে ক্লিক করুন</span>{" "}
              <FaShoppingCart className="mt-1 ms-2" />
            </p>
          </OrderButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOfProduct;
