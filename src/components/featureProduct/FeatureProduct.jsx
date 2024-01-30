"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import data from "../../../public/data.json";
const FeatureProduct = () => {
  return (
    <div className="grid md:grid-cols-12 md:ms-9  mt-16 gap-3">
      {data.slice(0 - 2).map((singleData) => (
        <div key={singleData?.id} className="md:col-span-6 sm:col-span-12  ">
          <Card
            shadow={false}
            className="w-full ms:mx-3 h-56 rounded-none bg-gray-200 max-w-[38rem] flex-row"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 bg-gray-200"
            >
              <img
                src={singleData?.ProductImage}
                alt="card-image"
                className="h-[90%] m-auto mt-3 w-[90%] object-cover "
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {singleData?.ProductName}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {singleData?.ShortDescription}
              </Typography>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeatureProduct;
