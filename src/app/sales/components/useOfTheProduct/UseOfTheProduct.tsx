import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
const UseOfTheProduct = () => {
  return (
    <div className="my-10">
      <div className="md:w-2/3  py-4  rounded-full text-center bg-[#D9F6E9]  mx-auto sm:px-5 mt-4 mb-10">
        <p className="text-2xl font-bold  text-[#203B56] sm:pb-2">
          লাইটা আপনি যে সমস্ত জায়গায় ব্যবহার করতে পারেন
        </p>
      </div>
      {/*  ------------------card row-1---------------- */}
      <div className="flex justify-center items-center my-10">
        <div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#1D4935] w-[350px] h-[355px] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className=" !w-[310px] !h-[190px]"
                  src="/images/landing_page/example1.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  বাসার দরজার সামনে, বেলকনি ও করিডোরে ব্যবহার করতে পারবেন।
                </p>
              </div>
            </div>
            <div className="bg-[#1D4935] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className="!w-[310px] !h-[190px] "
                  src="/images/landing_page/example2.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  বাড়ির মেন গেটে ।
                </p>
              </div>
            </div>
            <div className="bg-[#1D4935] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className="!w-[310px] !h-[190px] "
                  src="/images/landing_page/example3.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  সিঁড়ি ঘরে
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------card row-2---------------- */}
      <div className="flex justify-center items-center my-10">
        <div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#1D4935] w-[350px] h-[295px] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className="!w-[310px] !h-[190px] "
                  src="/images/landing_page/example4.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  বাথরুমে
                </p>
              </div>
            </div>
            <div className="bg-[#1D4935] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className="!w-[310px] !h-[190px] "
                  src="/images/landing_page/example5.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  গ্যারেজে
                </p>
              </div>
            </div>
            <div className="bg-[#1D4935] rounded-[15px] flex flex-col items-center">
              <div className="mt-5">
                <Image
                  width={310}
                  height={190}
                  className="!w-[310px] !h-[190px] "
                  src="/images/landing_page/example6.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-6 mb-3 text-center mx-3 ">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  পার্কে
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------card row-3---------------- */}
      <div className="flex justify-center items-center my-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-[#1D4935] w-[350px] rounded-[15px] flex flex-col items-center">
            <div className="mt-5 h-[190px] overflow-hidden">
              <Image
                width={310}
                height={190}
                className="!w-[310px] !h-[190px]"
                src="/images/landing_page/example7.jpeg"
                alt="image"
              />
            </div>
            <div className="mt-6 mb-3 text-center mx-3">
              <div className="w-[310px] overflow-hidden">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  আপনার খামারকে নিরাপদ রাখতে ব্যবহার করতে পারেন
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1D4935] rounded-[15px] flex flex-col items-center">
            <div className="mt-5 h-[190px] overflow-hidden">
              <Image
                width={310}
                height={190}
                className="!w-[310px] !h-[190px]"
                src="/images/landing_page/example8.jpg"
                alt="image"
              />
            </div>
            <div className="mt-6 mb-3 text-center mx-3">
              <div className="w-[310px] overflow-hidden">
                <p className="text-white text-[22px] font-bold sm:pb-2">
                  দোকানের গোডাউনে বা যে কোন স্টোর রুমে।
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1D4935] items-center justify-center rounded-[15px] flex flex-col ">
            <div className="mt-6 mb-3 text-center mx-3 h-[190px] overflow-hidden">
              <div className="w-[310px] overflow-hidden">
                <p className="text-white text-[22px] mt-4 font-bold sm:pb-2">
                  এ ছাড়া আপনি আপনার সুবিধা মতে যে কোন যায়গায় ব্যবহার করতে পারেন
                  ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------- order button------------------ */}
      <div className="my-4">
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
  );
};

export default UseOfTheProduct;
