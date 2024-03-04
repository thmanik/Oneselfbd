const ProductReplacement = () => {
  return (
    <div className="my-5">
      <div className="flex justify-center items-center">
        <div className="w-full md:h-[230px] bg-[#116b80] flex justify-center items-center">
          <div className="w-[80%] h-[80%] bg-[#1d96b4] my-5 flex flex-col justify-center items-center md:w-[80%] md:h-[80%]">
            <div className="mx-4 my-3 py-8">
              {" "}
              {/* Added padding here */}
              <h3 className="text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                রিপ্লেসমেন্ট এর পদ্ধতি --
              </h3>
              <p className="text-[#FFFFFF] text-sm md:text-lg lg:text-xl text-center font-bold">
                আমাদের প্রতিটি সেন্সর লাইটের একটা কোড নাম্বার আছে। ১ বছরের ভিতরে
                নষ্ট হলে। আপনি আমাদেরকে কোর্ড নাম্বার টা বললে, আমরা একটা
                প্রোডাক্ট আপনার কাছে পাঠিয়ে দিব। আপনি আমাদের প্রোডাক্টটা হাতে
                পেয়ে, নষ্ট প্রোডাক্টটা ডেলিভারি ম্যান এর কাছে দিয়ে দিবেন।আপনার
                কোড নাম্বারটা আপনার নামে আমাদের কম্পিউটারে এন্ট্রি করা থাকবে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReplacement;
