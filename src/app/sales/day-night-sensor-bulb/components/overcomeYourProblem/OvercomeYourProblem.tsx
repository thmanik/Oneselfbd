/* eslint-disable react/no-unescaped-entities */
const OvercomeYourProblem = () => {
  const cardInfo = [
    { id: "01", title: "বাইরে বের হওয়ার সময় বাতি জ্বলিয়ে রাখতে ভুলে যান?" },
    { id: "02", title: "সুইচের মাধ্যমে লাইট অন /অফ করার ঝামেলা ?" },
    { id: "03", title: "ভোরবেলা বাতি জ্বলে থাকায় বিদ্যুৎ অপচয় হয়?" },
    { id: "04", title: "সকাল বেলা লাইট বন্ধ করার জন্য মাথায় টেনশন ?" },
  ];

  return (
    <div className="mx-6 md:mx-20 mt-3 mb-8 md:my-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#116b80] mb-6">
          আপনার কি এই সমস্যাগুলোর সম্মুখীন হতে হয়?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {cardInfo.map((card) => (
          <div
            key={card.id}
            className=" bg-gradient-to-r  from-[#00adb5] to-[#0077b6] p-6 rounded-lg shadow-lg"
          >
            <p className="text-white text-lg font-bold mb-4">{card.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-xl md:text-2xl text-[#116b80] font-bold">
          যদি উত্তর "হ্যাঁ" হয়, তাহলে ডে নাইট সেন্সর বাল্ব আপনার জন্য আদর্শ
          সমাধান!
        </p>
      </div>
    </div>
  );
};

export default OvercomeYourProblem;
