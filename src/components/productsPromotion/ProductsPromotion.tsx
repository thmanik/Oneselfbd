"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ProductsPromotion = () => {
  return (
    <>
      <div className="grid md:grid-cols-12 md:ms-9  mt-20 ">
        <div className="md:col-span-8 sm:col-span-12  ">
          <Card
            shadow={false}
            className="w-full  h-56 rounded-none bg-gray-200  max-w-[52rem] flex-row"
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
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-[90%]  mt-3 w-[90%] object-cover "
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
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-[90%]  mt-3 w-[90%] object-cover "
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
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-[90%]  mt-3 w-[90%] object-cover "
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
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-[90%]  mt-3 w-[90%] object-cover "
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
