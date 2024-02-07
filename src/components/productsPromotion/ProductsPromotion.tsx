"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const ProductsPromotion = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 md:ms-9  mt-20 ">
        <div className="md:col-span-8 sm:col-span-12  ">
          <Card
            shadow={false}
            className="w-full  h-56 rounded-none justify-between bg-gray-200  max-w-[52rem] flex-row"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                Lyft launching cross-platform
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal"
                placeholder={undefined}
              >
                Like so many organizations these days,
                <br />
                <p>
                  From{" "}
                  <span>
                    $<span className="text-2xl">99.99</span>
                  </span>{" "}
                </p>
              </Typography>
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 bg-gray-200"
              placeholder={undefined}
            >
              <Image
                width={250}
                height={150}
                src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
                alt="card-image"
                className=" object-cover ms-14 mt-2 "
              />
            </CardHeader>
          </Card>
        </div>
        <div className="md:col-span-4 sm:col-span-12 md:me-7 ">
          <Card
            shadow={false}
            className="w-full  h-56 rounded-none bg-gray-200  max-w-[38rem] flex-row"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                Lyft launching cross-platform
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal"
                placeholder={undefined}
              >
                Like so many organizations these days,
                <br />
                <p>
                  From{" "}
                  <span>
                    $<span className="text-2xl">99.99</span>
                  </span>{" "}
                </p>
              </Typography>
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 bg-gray-200"
              placeholder={undefined}
            >
              <Image
                width={200}
                height={150}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                alt="card-image"
                className=" object-cover me-4 mt-6"
              />
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-12 md:ms-9  mt-5 gap-4">
        <div className="md:col-span-4 sm:col-span-12  ">
          <Card
            shadow={false}
            className="w-full  h-56 rounded-none bg-gray-200  max-w-[38rem] flex-row"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                Lyft launching cross-platform
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal"
                placeholder={undefined}
              >
                Like so many organizations these days,
                <br />
                <p>
                  From{" "}
                  <span>
                    $<span className="text-2xl">99.99</span>
                  </span>{" "}
                </p>
              </Typography>
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 bg-gray-200"
              placeholder={undefined}
            >
              <Image
                width={200}
                height={150}
                src="https://i.ibb.co/YLM3tnP/LED-BULb.png"
                alt="card-image"
                className=" object-cover me-4 mt-6 "
              />
            </CardHeader>
          </Card>
        </div>
        <div className="md:col-span-8 sm:col-span-12 md:ms-7 ">
          <Card
            className="w-full  h-56 rounded-none bg-gray-200  max-w-[51rem] flex-row"
            placeholder={undefined}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 bg-gray-200 "
              placeholder={undefined}
            >
              <Image
                width={250}
                height={150}
                src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
                alt="card-image"
                className=" object-cover ms-5 mt-2 "
              />
            </CardHeader>
            <CardBody placeholder={undefined}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                Lyft launching cross-platform
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal"
                placeholder={undefined}
              >
                Like so many organizations these days,
                <br />
                <p>
                  From{" "}
                  <span>
                    $<span className="text-2xl">99.99</span>
                  </span>{" "}
                </p>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProductsPromotion;
