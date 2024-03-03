import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
const FeaturesOfProduct = () => {
  const features = [
    {
      id: "01",
      img: "/images/landing_page/check.png",
      title: "বিদ্যুৎ বিল বিশেষভাবে সাশ্রয়ী ও অপচয় রোধকারী ।",
    },
    {
      id: "02",
      img: "/images/landing_page/check.png",
      title: "নরমাল লাইটের মত যেকোনো হোল্ডারে ব্যবহার করা যায় ।",
    },
    {
      id: "03",
      img: "/images/landing_page/check.png",
      title: "সুইচ অফ-অন এর ঝামেলা নেই ।",
    },
    {
      id: "04",
      img: "/images/landing_page/check.png",
      title:
        "লাইটের নিচে মানুষ আসলে লাইটি জল্বে, লাইটের নিচ থেকে মানুষ চলে গেলে ৩০ সেকেন্ড পরে বন্ধ হয়ে যাবে ।",
    },
    {
      id: "05",
      img: "/images/landing_page/check.png",
      title: "চোরের যম ও ডিজিটাল পাহারাদার ।",
    },
    {
      id: "06",
      img: "/images/landing_page/check.png",
      title: "আপনার ঘর ও আপনাকে করবে স্মার্ট।",
    },
  ];
  return (
    <section className="sm:mx-10 my-6">
      <div>
        <div className="w-96  py-4  rounded-full text-center bg-[#D9F6E9]  mx-auto sm:px-5 mt-4 mb-10">
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
                    {" "}
                    {/* Ensure the container doesn't shrink */}
                    <Image
                      className="w-full h-full"
                      width={25}
                      height={22}
                      src={feature?.img}
                      alt=""
                    />
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
                <button className="w-96 bg-[#01ad2c] py-4 rounded-full mx-auto sm:px-5 relative hover:bg-gradient-to-r from-[#01ad2c] to-[#1c4d35] transition-background-color duration-600 ease-in-out">
                  <p className="text-2xl font-bold text-white flex items-center justify-center">
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
