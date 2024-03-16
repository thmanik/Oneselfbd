/* eslint-disable react/no-unescaped-entities */
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaLightbulb,
  FaPowerOff,
  FaRegLightbulb,
} from "react-icons/fa";

const OvercomeYourProblem = () => {
  const cardInfo = [
    {
      id: "01",
      title: "বাইরে বের হওয়ার সময় বাতি জ্বলিয়ে রাখতে ভুলে যান?",
      icon: <FaLightbulb />,
    },
    {
      id: "02",
      title: "সুইচের মাধ্যমে লাইট অন /অফ করার ঝামেলা ?",
      icon: <FaRegLightbulb />,
    },
    {
      id: "03",
      title: "ভোরবেলা বাতি জ্বলে থাকায় বিদ্যুৎ অপচয় হয়?",
      icon: <FaPowerOff />,
    },
    {
      id: "04",
      title: "সকাল বেলা লাইট বন্ধ করার জন্য মাথায় টেনশন ?",
      icon: <FaExclamationCircle />,
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-20 py-8 md:py-12">
      <div>
        <h1 className="text-3xl md:text-5xl text-center mx-2 font-bold text-[#197084] mb-8">
          আপনার কি এই সমস্যাগুলোর সম্মুখীন হতে হয়?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {cardInfo.map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center border border-gray-200"
          >
            <div className="text-4xl mb-4 text-[#116B80]">{card.icon}</div>
            <p className="text-lg font-semibold mb-4">{card.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 flex flex-col md:flex-row items-center justify-center">
        <div className="text-4xl mt-4 text-[#197084]">
          <FaCheckCircle />
        </div>
        <p className="text-xl mt-5 md:ms-2 md:text-2xl text-[#197084] font-semibold">
          যদি উত্তর <span className="text-red-600 mx-1">"হ্যাঁ"</span> হয়,
          তাহলে ডে নাইট সেন্সর বাল্ব আপনার জন্য আদর্শ সমাধান!
        </p>
      </div>
    </div>
  );
};

export default OvercomeYourProblem;
