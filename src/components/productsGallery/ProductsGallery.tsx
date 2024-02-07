"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import data from "../../../public/data.json";
const ProductsGallery = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 m-8  gap-3">
        {data.slice(0 - 6).map((singleData) => (
          <div key={singleData?.id} className="md:col-span-4 sm:col-span-12  ">
            <Card
              shadow={false}
              className="w-full ms:mx-3 h-40 rounded-none bg-gray-200 max-w-[38rem] flex-row"
              placeholder={undefined}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 bg-gray-200"
                placeholder={undefined}
              >
                <Image
                  width={140}
                  height={130}
                  src={singleData?.ProductImage}
                  alt="card-image"
                  className=" m-auto mt-3 object-cover "
                />
              </CardHeader>
              <CardBody placeholder={undefined}>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className=" mt-5"
                  placeholder={undefined}
                >
                  {singleData?.ProductName}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsGallery;
