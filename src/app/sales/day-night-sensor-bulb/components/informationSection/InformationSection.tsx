const InformationSection = () => {
  return (
    <section className="relative grid bg-[#116b80] my-5 place-items-center w-full h-[375px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10">
        <h3 className="text-[#2cfa2c] text-center text-xl md:text-2xl lg:text-3xl font-bold">
          যে কোন তথ্যের জন্য যোগাযোগ করুন
        </h3>
        <p className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold my-3">
          মোবাইলঃ +8801967214215
        </p>

        <div className="text-center  md:py-5 flex justify-center items-center">
          <p className=" text-2xl text-red-600 font-bold bg-yellow-400 w-[95%] md:px-10 py-5 rounded-full">
            লাইটের মুল্য- ৪৭০ টাকা
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
