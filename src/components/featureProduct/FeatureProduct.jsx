"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const FeatureProduct = () => {
  return (
    <div className="grid md:grid-cols-12 md:ms-9  mt-16 gap-3">
      <div className="md:col-span-6 sm:col-span-12  ">
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-[90%] m-auto mt-3 w-[90%] object-cover "
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days,
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="md:col-span-6 sm:col-span-12  ">
        <Card
          shadow={false}
          className="w-full  h-56 ms:mx-3 rounded-none bg-gray-200   max-w-[38rem] flex-row"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 bg-gray-200"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-[90%] m-auto mt-3 w-[90%] object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days,
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FeatureProduct;
