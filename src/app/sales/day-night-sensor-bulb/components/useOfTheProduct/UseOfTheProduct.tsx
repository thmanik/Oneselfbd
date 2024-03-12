import ContainerMax from "@/components/containerMax/ContainerMax";
import Image from "next/image";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaRegBuilding,
  FaShoppingCart,
} from "react-icons/fa";
import OrderButton from "../ui/orderButton/OrderButton";

const useCasesInHome = [
  {
    title: "বারান্দা",
    image: "/images/day-night-sensor/day_night_1.jpg",
  },
  {
    title: "মেনগেট",
    image: "/images/day-night-sensor/day_night_2.jpg",
  },
  {
    title: "বাড়ির চারি পাশা",
    image: "/images/day-night-sensor/day_night_3.jpg",
  },
];

const useCasesInOffice = [
  {
    title: "করিডোর",
    image: "/images/day-night-sensor/day_night_4.jpg",
  },
  {
    title: "স্টোর রুম",
    image: "/images/day-night-sensor/day_night_5.jpg",
  },
  {
    title: "অফিসের সামনে",
    image: "/images/day-night-sensor/day_night_6.jpg",
  },
];

const useCasesInIndustry = [
  {
    title: "কারখানার ভেতর",
    image: "/images/day-night-sensor/day_night_7.jpg",
  },
  {
    title: "গুদামজাত ঘর",
    image: "/images/day-night-sensor/day_night_8.jpg",
  },
];

const useCasesInGovtInstitutions = [
  {
    title: "স্কুল, কলেজ",
    image: "/images/day-night-sensor/day_night_9.jpg",
  },
  {
    title: "হাসপাতাল",
    image: "/images/day-night-sensor/day_night_10.jpg",
  },
  {
    title: "রাস্তা ",
    image: "/images/day-night-sensor/day_night_11.jpg",
  },
];
const UseOfTheProduct = () => {
  return (
    <section>
      <ContainerMax>
        <div className="my-10">
          <div className="md:w-3/6 py-4 mb-8 rounded-full text-center bg-[#edf7fa] mx-auto sm:px-5 m-4">
            <p className="text-xl md:text-2xl font-semibold text-[#203B56]">
              লাইটা আপনি যে সমস্ত জায়গায় ব্যবহার করতে পারেন
            </p>
          </div>
          {/* ------বাসাবাড়ি ----------- */}
          <div>
            <div className="flex mx-6 my-6">
              <FaHome className=" text-2xl md:text-4xl text-yellow-500 " />
              <div>
                <p className="ms-2 md:mt-2 font-bold text-2xl ">বাসাবাড়ি -</p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-y-5">
              {useCasesInHome.map((useCase, index) => (
                <div
                  key={index}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 px-2"
                >
                  <div className="bg-[#116b80] w-96 h-80 flex flex-col items-center rounded-xl ">
                    <div className="mt-5">
                      <Image
                        width={300}
                        height={300}
                        className="w-[340px] aspect-video rounded-xl"
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
            </div>
          </div>
          {/* ------অফিস------ */}
          <div className="my-6">
            <div className="flex mx-6 my-6">
              <FaBuilding className=" text-2xl md:text-4xl text-yellow-500 " />
              <div>
                <p className="ms-2 md:mt-2 font-bold text-2xl ">অফিস -</p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-y-5">
              {useCasesInOffice.map((useCase, index) => (
                <div
                  key={index}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 px-2"
                >
                  <div className="bg-[#116b80] w-96 h-80 flex flex-col items-center rounded-xl ">
                    <div className="mt-5">
                      <Image
                        width={300}
                        height={300}
                        className="w-[340px] aspect-video rounded-xl"
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
            </div>
          </div>

          {/* ------শিল্প-প্রতিষ্ঠান-------- */}
          <div className="my-6">
            <div className="flex mx-6 my-6">
              <FaIndustry className=" text-2xl md:text-4xl text-yellow-500 " />
              <div>
                <p className="ms-2 md:mt-2 font-bold text-2xl ">
                  শিল্প-প্রতিষ্ঠান -
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-y-5">
              {useCasesInIndustry.map((useCase, index) => (
                <div
                  key={index}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 px-2"
                >
                  <div className="bg-[#116b80] w-96 h-80 flex flex-col items-center rounded-xl ">
                    <div className="mt-5">
                      <Image
                        width={300}
                        height={300}
                        className="w-[340px] aspect-video rounded-xl"
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
            </div>
          </div>

          {/* ------সরকারি প্রতিষ্ঠান-------- */}
          <div className="my-6">
            <div className="flex mx-6 my-6">
              <FaRegBuilding className=" text-2xl md:text-4xl text-yellow-500 " />
              <div>
                <p className="ms-2 md:mt-2 font-bold text-2xl ">
                  সরকারি প্রতিষ্ঠান -
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-y-5">
              {useCasesInGovtInstitutions.map((useCase, index) => (
                <div
                  key={index}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 px-2"
                >
                  <div className="bg-[#116b80] w-96 h-80 flex flex-col items-center rounded-xl ">
                    <div className="mt-5">
                      <Image
                        width={300}
                        height={300}
                        className="w-[340px] aspect-video rounded-xl"
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
            </div>
          </div>
          {/*---------------- order button------------------ */}
          <div className="my-8">
            <OrderButton>
              <p className="md:text-2xl font-bold  flex items-center justify-center">
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
