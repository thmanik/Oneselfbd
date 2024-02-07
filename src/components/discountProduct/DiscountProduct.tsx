"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./DiscountProduct.css";
// import required modules
import { Pagination } from "swiper/modules";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import data from "../../../public/data.json";
const DiscountProduct = () => {
  const [slidesPerViews, setSlidesPerViews] = useState(1);

  useEffect(() => {
    const handleResizee = () => {
      // Update slidesPerViews based on screen width
      if (window.innerWidth < 600) {
        setSlidesPerViews(2); // Small screens, show 2 items
      } else if (window.innerWidth < 1200) {
        setSlidesPerViews(4); // Medium screens, show 4 items
      } else {
        setSlidesPerViews(4); // Larger screens, show 4 items
      }
    };

    // Initial setup
    handleResizee();

    // Add event listener for window resize
    window.addEventListener("resize", handleResizee);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizee);
    };
  }, []);
  return (
    <div className="grid md:grid-cols-12 my-10 mx-5">
      <div className="md:col-span-2 sm:col-span-12">
        <div className="my-4 W-56 mx-1  h-96">
          <p className="md:text-2xl text-gray-900">
            Weekly Deals<br></br> limited, Just Now
          </p>

          <hr />
          <div className=" w-48 h-48">
            <p className="percentage-sign  text-gray-700">%</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-10 ms-16">
        <Swiper
          slidesPerView={slidesPerViews}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper   my-10"
        >
          {data?.map((singledata) => (
            <SwiperSlide key={singledata.id}>
              <Card className="my-4 W-56 mx-1  h-96 " placeholder={undefined}>
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
                  className="CarouselProductImg img-fluid"
                  src={singledata?.ProductImage}
                  alt="card-image"
                />

                <CardFooter className="pt-0" placeholder={undefined}>
                  <div className="flex justify-between">
                    <div>$ {singledata?.SellingPrice}</div>
                    <div>
                      <Button
                        size="sm"
                        className="addTocartBtn "
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
    </div>
  );
};

export default DiscountProduct;
