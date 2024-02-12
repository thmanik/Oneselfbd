"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../public/data.json";
const TrendingProducts = () => {
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
          <h3>Trending Products</h3>
        </div>
        <div>
          <a href="">Go to the TrendingProducts</a>
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
    </div>
  );
};

export default TrendingProducts;
