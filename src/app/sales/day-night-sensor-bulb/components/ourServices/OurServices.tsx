import Image from "next/image";

const OurServices = () => {
  const services = [
    {
      id: "01",
      title: "আমাদের প্রডাক্টে 1 বছরের গ্রান্টি পাচ্ছেন",
      image: "/images/day-night-sensor/day_night_icon1.png",
    },
    {
      id: "02",
      title: "আপনি প্রডাক্ট হাতে পেয়ে , দেখে টাকা পরিশোধ করবেন ।",
      image: "/images/day-night-sensor/day_night_icon2.png",
    },
    {
      id: "03",
      title: "পুরা বাংলাদেশে হোম ডেলিভারির সু-ব্যবস্তা",
      image: "/images/day-night-sensor/day_night_icon3.png",
    },
    {
      id: "04",
      title: "২৪ ঘন্টা কাস্টমার সাপোর্ট",
      image: "/images/day-night-sensor/day_night_icon4.png",
    },
  ];
  return (
    <section className="my-10">
      <div className="sm:w-4/6 md:w-2/5 lg:w-2/5 py-4 rounded-full text-center bg-[#FFD700] mx-auto sm:px-5 mt-4 mb-10">
        <p className="text-2xl font-bold text-[#0a1b2e]  ">
          আমাদের কাছ থেকে কেন কিনবেন?
        </p>
      </div>
      {/* --------------- card-------------- */}
      <div className="flex justify-center items-center mt-14 mb-5">
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service?.id}
                className="bg-[#00C1F2] w-[255px] h-[260px] rounded-[15px] flex flex-col items-center shadow-xl"
              >
                <div className="bg-white w-[257px] h-[250px] rounded-[7px] flex flex-col mt-3 items-center shadow-md">
                  <div className="mt-5">
                    <Image
                      width={120}
                      height={120}
                      className="!w-[70px] !h-[60px]"
                      src={service?.image}
                      alt="image"
                    />
                  </div>
                  <div className="mt-6 mb-3 text-center mx-3 md:mx-0 px-0">
                    <p className="text-[#183B56] md:mx-6 mb-2 text-[22px] font-bold sm:pb-2">
                      {service?.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
