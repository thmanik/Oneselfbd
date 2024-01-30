"use client";

/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../public/data.json";
import "./PopularProducts.css";
const PopularProducts = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

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
    <div>
      <div className="flex justify-between mx-8 mt-14 ">
        <div>
          <h3>Popular Products</h3>
        </div>
        <div className="flex gap-5">
          <a className="" href="">
            Top
          </a>
          <a href="">All in one</a>
        </div>
      </div>
      <hr />
      <div className="mx-8">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
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

export default PopularProducts;
