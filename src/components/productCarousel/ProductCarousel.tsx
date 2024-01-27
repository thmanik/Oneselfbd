/* eslint-disable @next/next/no-img-element */
// components/SuggestedProducts.tsx
"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {
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

import React, { useState } from "react";
// Import Swiper React components
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import data from "../../../public/data.json";
import "./productCarousel.css";
const SuggestedProducts: React.FC = () => {
  const [value, setValue] = useState<string>("tab1");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    // You can add additional logic here if needed
  };

  return (
    <div className="mt-8 bg-gray-100 rounded" style={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <TabsHeader placeholder={undefined}>
          <Tab value="tab1" placeholder={undefined}>
            <div className={`py-2 px-4 font-medium uppercase cursor-pointer`}>
              <div
                className={`flex items-center gap-2 ${
                  value === "tab1" ? "bg-blue-500 text-white" : "text-gray-700"
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
                  value === "tab2" ? " text-black" : "text-gray-700"
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
                  value === "tab3" ? " text-black" : "text-gray-700"
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
            <div>
              <Swiper
                slidesPerView={6}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card className="mt-6 w-52 h-96" placeholder={undefined}>
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

                      <img
                        className="CarouselProductImg"
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter className="pt-0" placeholder={undefined}>
                        <div className="flex">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <ShoppingCartIcon className="bg-lime-800" />
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
            <div>
              <Swiper
                slidesPerView={6}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card className="mt-6 w-52 h-96" placeholder={undefined}>
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

                      <img
                        className="CarouselProductImg"
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter className="pt-0" placeholder={undefined}>
                        <div className="flex">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <ShoppingCartIcon className="bg-lime-800" />
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
            <div>
              <Swiper
                slidesPerView={6}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data?.map((singledata) => (
                  <SwiperSlide key={singledata.id}>
                    <Card className="mt-6 w-52 h-96" placeholder={undefined}>
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

                      <img
                        className="CarouselProductImg"
                        src={singledata?.ProductImage}
                        alt="card-image"
                      />

                      <CardFooter className="pt-0" placeholder={undefined}>
                        <div className="flex">
                          <div>$ {singledata?.SellingPrice}</div>
                          <div>
                            <ShoppingCartIcon className="bg-lime-800" />
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
