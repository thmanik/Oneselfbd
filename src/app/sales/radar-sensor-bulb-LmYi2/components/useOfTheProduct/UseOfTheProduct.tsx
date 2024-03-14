import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const useCases = [
  {
    title: "বাসার দরজার সামনে, বেলকনি ও করিডোরে ব্যবহার করতে পারবেন।",
    image: "/images/radar-sensor/example1.jpg",
  },
  {
    title: "বাড়ির মেন গেটে।",
    image: "/images/radar-sensor/example2.jpg",
  },
  {
    title: "সিঁড়ি ঘরে।",
    image: "/images/radar-sensor/example3.jpg",
  },
  {
    title: "বাথরুমে।",
    image: "/images/radar-sensor/example4.jpg",
  },
  {
    title: "গ্যারেজে।",
    image: "/images/radar-sensor/example5.jpg",
  },
  {
    title: "পার্কে।",
    image: "/images/radar-sensor/example6.jpg",
  },
  {
    title: "আপনার খামারকে নিরাপদ রাখতে ব্যবহার করতে পারেন।",
    image: "/images/radar-sensor/example7.jpg",
  },
  {
    title: "দোকানের গোডাউনে বা যে কোন স্টোর রুমে।",
    image: "/images/radar-sensor/example8.jpg",
  },
];

const UseOfTheProduct = () => {
  return (
    <section>
      <ContainerMax>
        <div className="my-10">
          <div className="md:w-3/6 py-4 mb-8 rounded-full text-center bg-[#F58921] mx-auto sm:px-5 m-4">
            <p className="text-base md:text-2xl font-semibold text-accent">
              লাইটা আপনি যে সমস্ত জায়গায় ব্যবহার করতে পারেন
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-y-3 items-center w-full max-w-screen-xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 px-2 md:py-2 flex justify-center"
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
                  <p className="text-white text-xl font-bold p-2 md:p-5 text-center">
                    {useCase.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="basis-1/1 sm:basis-1/2 md:basis-1/3 flex justify-center items-center">
              <div className="bg-[#116b80] w-full max-w-[300px] py-6 sm:mx-5 sm:py-12 md:py-16 flex items-center rounded-xl">
                <p className="text-white text-xl font-bold p-2 md:p-5 text-center">
                  এ ছাড়া আপনি আপনার সুবিধা মতে যে কোন যায়গায় ব্যবহার করতে পারেন।
                </p>
              </div>
            </div>
          </div>

          {/*---------------- order button------------------ */}
          <div className="my-8">
            <OrderButton>
              <p className="!text-xl !md:text-2xl font-bold  flex items-center justify-center">
                <span>অর্ডার করতে ক্লিক করুন</span>{" "}
                <FaShoppingCart className="mt-1 ms-2" />
              </p>
            </OrderButton>
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default UseOfTheProduct;
