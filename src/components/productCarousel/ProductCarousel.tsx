// components/SuggestedProducts.tsx
"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import data from "../../../public/data.json";

const SuggestedProducts: React.FC = () => {
  const [value, setValue] = useState<string>("tab1");
  const [slidesPerView, setSlidesPerView] = useState(1);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    // You can add additional logic here if needed
  };

  useEffect(() => {
    const handleResize = () => {
      // Update slidesPerView based on screen width
      if (window.innerWidth < 200) {
        setSlidesPerView(1); // Small screens
      } else if (window.innerWidth < 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(5); // Medium and larger screens
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-8 bg-gray-100 rounded" style={{ width: "100%" }}>
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
                Featured
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
                On Sale
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
                Top Rated
              </div>
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody placeholder={undefined}>
          <TabPanel value="tab1">
            <div className="md:mx-5">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper   my-16"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card
                      className="my-4 W-56 mx-1 h-96 relative"
                      placeholder={undefined}
                    >
                      <CardBody placeholder={undefined}>
                        <Typography placeholder={undefined}>
                          {singledata?.Category}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                          placeholder={undefined}
                        >
                          {singledata?.ProductName}
                        </Typography>
                      </CardBody>

                      <Image
                        width={180}
                        height={200}
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter
                        className="pt-0 absolute bottom-0 left-0 right-0"
                        placeholder={undefined}
                      >
                        <div className="flex justify-between">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <Button
                              size="sm"
                              className="BtnStyle"
                              placeholder={undefined}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel value="tab2">
            <div className="md:mx-5">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper   my-10"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card
                      className="my-4 W-56 mx-1 h-96 relative"
                      placeholder={undefined}
                    >
                      <CardBody placeholder={undefined}>
                        <Typography placeholder={undefined}>
                          {singledata?.Category}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                          placeholder={undefined}
                        >
                          {singledata?.ProductName}
                        </Typography>
                      </CardBody>

                      <Image
                        width={180}
                        height={200}
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter
                        className="pt-0 absolute bottom-0 left-0 right-0"
                        placeholder={undefined}
                      >
                        <div className="flex justify-between">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <Button
                              size="sm"
                              className="BtnStyle"
                              placeholder={undefined}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel value="tab3">
            <div className="md:mx-5">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper   my-10"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card
                      className="my-4 W-56 mx-1 h-96 relative"
                      placeholder={undefined}
                    >
                      <CardBody placeholder={undefined}>
                        <Typography placeholder={undefined}>
                          {singledata?.Category}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                          placeholder={undefined}
                        >
                          {singledata?.ProductName}
                        </Typography>
                      </CardBody>

                      <Image
                        width={180}
                        height={200}
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter
                        className="pt-0 absolute bottom-0 left-0 right-0"
                        placeholder={undefined}
                      >
                        <div className="flex justify-between">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <Button
                              size="sm"
                              className="BtnStyle"
                              placeholder={undefined}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default SuggestedProducts;
