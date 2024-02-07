/* eslint-disable jsx-a11y/alt-text */

"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { Navigation, Thumbs } from "swiper/modules";

const ProductsDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = React.useState("html");
  const [value, setValue] = useState<string>("tab1");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  const handleChange = (newValue: string) => {
    setValue(newValue);
    // You can add additional logic here if needed
  };
  return (
    <div className="md:mb-5 ">
      <hr />
      <div className="md:grid md:grid-cols-12 mt-5  mx-10">
        {/* Product Photo Carousel */}
        <div className="md:col-span-6 sm:col-span-12 bg-blue-gray-50 md:h-[75%] md:w-[80%] ">
          <Swiper
            style={{
              maxHeight: "100%", // Set a maximum height for the entire Swiper
            }}
            loop={true}
            spaceBetween={1}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
                className="object-cover"
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                className="object-cover"
                alt="Nature 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/zrtWxWR/l-LED-BULB.jpg"
                className="object-cover"
                alt="Nature 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/3BFKjfS/Orelco-Bulb-02.jpg"
                className="object-cover"
                alt="Nature 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/zrtWxWR/l-LED-BULB.jpg"
                className="object-cover"
                alt="Nature 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={530}
                height={450}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                className="object-cover"
                alt="Nature 6"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={1}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="mySwiper bg-blue-gray-100"
          >
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
                alt="Nature 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                alt="Nature 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/zrtWxWR/l-LED-BULB.jpg"
                alt="Nature 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/3BFKjfS/Orelco-Bulb-02.jpg"
                alt="Nature 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/zrtWxWR/l-LED-BULB.jpg"
                alt="Nature 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={125}
                height={100}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                alt="Nature 6"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Products Details */}
        <div className="md:col-span-6 sm:col-span-12">
          <div className="md:ms-10">
            <div>
              {" "}
              <span className="text-2xl">$10000</span>{" "}
              <span className="line-through ms-5">$11000</span>
            </div>
            <div className="flex justify-between mt-6 mb-3">
              <div>
                <span>In Stock</span>
                <br />
                <span>Only 90 left</span>
              </div>
              <div>
                <span>Brand Name</span>
              </div>
            </div>
            <div className="mb-5 mt-10">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptatem nisi laudantium nihil commodi doloremque, fugit
                provident quasi impedit amet ipsa, necessitatibus porro?
                Accusamus et voluptatibus veniam, omnis similique animi.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptatem nisi laudantium nihil commodi doloremque, fugit
                provident quasi impedit amet ipsa, necessitatibus porro?
                Accusamus et voluptatibus veniam, omnis similique animi.
              </p>
            </div>
            <hr />

            <div className="flex justify-around mt-5 ">
              <div> - 0 +</div>
              <div>
                <Button size="lg" className="BtnStyle" placeholder={undefined}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="my-20">
        <Tabs value={value} onChange={handleChange}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-primary shadow-none rounded-none",
            }}
            placeholder={undefined}
          >
            <Tab value="tab1" placeholder={undefined}>
              <div className={`py-2 px-4 font-medium uppercase cursor-pointer`}>
                <div
                  className={`flex items-center gap-2 ${
                    value === "tab1" ? " text-primary" : "text-gray-700"
                  }`}
                  onClick={() => handleChange("tab1")}
                >
                  Details
                </div>
              </div>
            </Tab>
            <Tab value="tab2" placeholder={undefined}>
              <div className={`py-2 px-4 font-medium uppercase cursor-pointer`}>
                <div
                  className={`flex items-center gap-2 ${
                    value === "tab2" ? " text-primary" : "text-gray-700"
                  }`}
                  onClick={() => handleChange("tab2")}
                >
                  More Information
                </div>
              </div>
            </Tab>
            <Tab value="tab3" placeholder={undefined}>
              <div className={`py-2 px-4 font-medium uppercase cursor-pointer`}>
                <div
                  className={`flex items-center gap-2 ${
                    value === "tab3" ? " text-primary" : "text-gray-700"
                  }`}
                  onClick={() => handleChange("tab3")}
                >
                  Reviews
                </div>
              </div>
            </Tab>
          </TabsHeader>
          <TabsBody placeholder={undefined}>
            <TabPanel value="tab1">
              <div className="md:mx-5"></div>
            </TabPanel>
            <TabPanel value="tab2">
              <div className="md:mx-5"></div>
            </TabPanel>
            <TabPanel value="tab3">
              <div className="md:mx-5"></div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsDetails;
