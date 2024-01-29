/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Carousel } from "@material-tailwind/react";
import "./carousel.css";

const CarouselPage = () => {
  return (
    <div className="grid grid-cols-8 lg:grid-cols-12 mt-5 mx-6">
      {/* First div taking 8 columns on all screens */}
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
          {/* Your Carousel Images */}
          <div>
            <div>
              <img
                src="https://i.ibb.co/QbhM89t/demo-Image-1.png"
                alt="image 1"
                className="h-full w-full object-cover carousel-image"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co/yq1nDSx/demo-Image-2.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/T2v8Cxm/demo-Image-3.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Second div taking 4 columns on medium screens and 4 columns on larger screens */}
      <div className=" md:col-span-4 lg:col-span-4  my-3">
        <div className="flex suggest-item md:m-3 items-center justify-center">
          <div>
            <img
              className="w-[85px] h-[85px]"
              src="https://i.ibb.co/zQ3RRNM/bulb-1.jpg"
              alt=""
            />
          </div>
          <div className="ms-5">
            <h3>The Classical Bulb</h3>
            <div>
              <Button
                size="sm"
                className="addTocartBtn "
                placeholder={undefined}
              >
                Order Now!
              </Button>
            </div>
          </div>
        </div>

        <div className="flex suggest-item  md:m-3 items-center justify-center">
          <div>
            <img
              className="w-[85px] h-[85px]"
              src="https://i.ibb.co/zQ3RRNM/bulb-1.jpg"
              alt=""
            />
          </div>
          <div className="ms-5">
            <h3>The Classical Bulb</h3>
            <div>
              <Button
                size="sm"
                className="addTocartBtn "
                placeholder={undefined}
              >
                Order Now!
              </Button>
            </div>
          </div>
        </div>
        <div className="flex suggest-item  md:m-3 items-center justify-center">
          <div>
            <img
              className="w-[85px] h-[85px] "
              src="https://i.ibb.co/zQ3RRNM/bulb-1.jpg"
              alt=""
            />
          </div>
          <div className="ms-5">
            <h3>The Classical Bulb</h3>
            <div>
              <Button
                size="sm"
                className="addTocartBtn "
                placeholder={undefined}
              >
                Order Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
