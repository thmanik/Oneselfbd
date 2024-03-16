import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const useCasesInHome = [
  {
    title: "বাড়ির মেন গেটে।",
    image: "/images/day-night-sensor/day_night_1.jpg",
  },
  {
    title: "বাড়ির চারি-পাশে নিরাপত্তার জন্য।",
    image: "/images/day-night-sensor/day_night_2.jpg",
  },
  {
    title: "দোকানের সামনে।",
    image: "/images/day-night-sensor/day_night_3.jpg",
  },
  {
    title: "অফিসে নিরাপত্তার জন্য।",
    image: "/images/day-night-sensor/day_night_4.jpg",
  },
  {
    title: "স্কুল কলেজে ব্যবহার করতে পারবেন।",
    image: "/images/day-night-sensor/day_night_5.jpg",
  },
  {
    title: "পার্কে।",
    image: "/images/day-night-sensor/day_night_6.jpg",
  },
  {
    title: "মাছের প্রজেক্টে।",
    image: "/images/day-night-sensor/day_night_7.jpg",
  },
  {
    title: "পশু পাখির খামারে।",
    image: "/images/day-night-sensor/day_night_8.jpg",
  },
  {
    title: "কবরস্থানে।",
    image: "/images/day-night-sensor/day_night_9.jpg",
  },
  {
    title: "রাস্তায়",
    image: "/images/day-night-sensor/day_night_10.jpg",
  },
];

const UseOfTheProduct = () => {
  return (
    <section>
      <ContainerMax>
        <div className="my-10">
          <div className="md:w-3/6 py-4 mb-8 rounded-full text-center bg-[#FFD700] mx-auto sm:px-5 m-4">
            <p className="text-2xl font-bold text-[#0a1b2e] px-2">
              লাইটা আপনি যে সমস্ত জায়গায় ব্যবহার করতে পারেন
            </p>
          </div>
          {/* ------বাসাবাড়ি ----------- */}
          <div className="flex my-14 flex-col items-center justify-center">
            {/* <div className="flex mb-6 justify-center items-center rounded-xl bg-white border-2 border-[#0a1b2e] shadow-xl py-2 px-8 w-72">
              <div className="border-4 rounded-full border-[#0a1b2e] p-1 bg-[#116b80] text-white shadow-md">
                <FaHome className="text-lg md:text-xl" />
              </div>
              <div className="ml-2">
                <p className="font-bold text-xl text-[#0a1b2e]">বাসাবাড়ি-</p>
              </div>
            </div> */}

            <div className="flex justify-center flex-wrap gap-y-3 items-center w-full max-w-screen-xl mx-auto">
              {useCasesInHome.map((useCase, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 flex justify-center"
                >
                  <div className="bg-[#116b80] px-2 w-full max-w-[300px] flex flex-col items-center rounded-xl">
                    <div className="mt-5">
                      <Image
                        width={300}
                        height={300}
                        className="w-[100%] aspect-video rounded-xl"
                        src={useCase.image}
                        alt={useCase.title}
                      />
                    </div>
                    <p className="text-white text-lg font-bold p-2 md:p-5 text-center">
                      {useCase.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full  mx-auto mt-12 mb-6">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold ">
                অথবা এমন জাইগা যেখানে আপনাকে রাতের বেলা লাইট জলিয়ে দিতে হয় আবার
                সকাল বেলা লাইট বন্ধ করতে হয়।
              </p>
            </div>
          </div>

          {/*---------------- order button------------------ */}
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
      </ContainerMax>
    </section>
  );
};

export default UseOfTheProduct;
