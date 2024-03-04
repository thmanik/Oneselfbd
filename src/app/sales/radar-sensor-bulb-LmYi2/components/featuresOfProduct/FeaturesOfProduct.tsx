import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
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
    <section className="sm:mx-10 my-6">
      <div>
        <div className="w-96  py-4  rounded-full text-center bg-[#edf7fa]  mx-auto sm:px-5 mt-4 mb-10">
          <p className="text-2xl font-bold  text-[#203B56]">
            লাইটি ব্যবহারের সুবিধাসমূহ
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="text-[#203B56] text-[20px] w-[85%]">
            {features.map((feature) => (
              <>
                <div key={feature?.id} className="flex my-4 items-center">
                  <div className="w-25 h-22 mr-2 flex-shrink-0">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <p className="mt-1 ml-3">{feature?.title}</p>
                  </div>
                </div>

                <hr />
              </>
            ))}
          </div>
          <div className="my-10">
            <div className="flex justify-center">
              <a href="#">
                <button className="md:w-96  px-5 bg-[#00C1F2] py-4 rounded-full mx-auto  relative hover:bg-gradient-to-r from-[#63D6E8] to-[#241F21] transition-background-color duration-600 ease-in-out">
                  <p className="md:text-2xl font-bold text-white flex items-center justify-center">
                    <span>অর্ডার করতে ক্লিক করুন</span>{" "}
                    <FaShoppingCart className="mt-1 ms-2" />
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOfProduct;
