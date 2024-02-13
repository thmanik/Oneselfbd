"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const BannerCarousel = () => {
  return (
    <div className="col-span-8 lg:col-span-8 bg-blue-gray-50">
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 m-6 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        placeholder={undefined}
      >
        <div>
          <div>
            <Image
              width={1000}
              height={800}
              src="https://i.ibb.co/QbhM89t/demo-Image-1.png"
              alt="image 1"
              className="  object-cover carousel-image"
            />
          </div>
        </div>
        <Image
          width={1000}
          height={800}
          src="https://i.ibb.co/yq1nDSx/demo-Image-2.png"
          alt="image 2"
          className="  object-cover"
        />
        <Image
          width={1000}
          height={800}
          src="https://i.ibb.co/T2v8Cxm/demo-Image-3.png"
          alt="image 3"
          className="object-cover"
        />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
