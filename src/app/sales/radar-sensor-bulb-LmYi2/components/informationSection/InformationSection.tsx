const InformationSection = () => {
  return (
    <div className="relative grid bg-[#116b80] my-5 place-items-center w-full h-[375px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10">
        <h3 className="text-[#2cfa2c] text-center text-xl md:text-2xl lg:text-3xl font-bold">
          যে কোন তথ্যের জন্য যোগাযোগ করুন
        </h3>
        <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold my-3">
          মোবাইলঃ +8801991165435
        </p>
        <p className="text-[#ff2b2b] my-4 text-center text-4xl md:text-5xl lg:text-6xl font-bold">
          মূল্যঃ = ৪৮০ টাকা ।
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
