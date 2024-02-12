"use client";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
// import {
//   JSXElementConstructor,
//   Key,
//   PromiseLikeOfReactNode,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
// } from "react";
import Image from "next/image";
import data from "../../../../../public/data.json";

const PreFooter = () => {
  return (
    <div className="grid md:grid-cols-12 mx-8 mt-16">
      <div className="md:col-span-3 sm:col-span-12">
        <div>
          <a href="">Featured Products</a>
          <hr />
        </div>
        <div>
          <div className="m-2">
            {data.slice(0, 3).map(
              (singleData: {
                id: number;
                ProductName: string;
                Category: string;
                ProductImage: string;
                ProductImageGallery: string[];
                RegularPrice: number;
                SellingPrice: number;
                ShortDescription: string;
                FullDescription: string;
                Specification: {
                  Brand: string;
                  Voltage: string;
                  Review: number;
                };
              }) => (
                <a
                  href=""
                  key={singleData.id.toString()} // Convert id to string if necessary
                  className="flex p-3 product-card gap-2"
                >
                  <div>
                    <Image
                      width={45}
                      height={45}
                      src={singleData.ProductImage}
                      alt=""
                    />
                  </div>
                  <div className="ms-2">
                    <h3>{singleData.ProductName}</h3>
                    <p>Review: {singleData.Specification.Review}</p>
                    <p>{singleData.SellingPrice}</p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-12">
        <div>
          <a href="">To Selling Products</a>
          <hr />
        </div>
        <div>
          {/* <div className="m-2">
            {data
              .slice(0 - 3)
              .map(
                (singleData: {
                  SellingPrice: ReactNode;
                  Specification: Record<string, unknown>;
                  id: Key | null | undefined;
                  ProductImage: string | undefined;
                  ProductName:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                }) => (
                  <a
                    href=""
                    key={singleData?.id}
                    className="flex p-3 product-card gap-2"
                  >
                    <div>
                      <img
                        className="PreFooter-img"
                        src={singleData?.ProductImage}
                        alt=""
                      />
                    </div>
                    <div className="ms-2">
                      <h3>{singleData?.ProductName}</h3>
                      <p>{singleData?.Specification?.Review}</p>
                      <p>{singleData?.SellingPrice}</p>
                    </div>
                  </a>
                )
              )}
          </div> */}
          <div className="m-2">
            {data.slice(0 - 3).map(
              (singleData: {
                id: number;
                ProductName: string;
                Category: string;
                ProductImage: string;
                ProductImageGallery: string[];
                RegularPrice: number;
                SellingPrice: number;
                ShortDescription: string;
                FullDescription: string;
                Specification: {
                  Brand: string;
                  Voltage: string;
                  Review: number;
                };
              }) => (
                <a
                  href=""
                  key={singleData?.id}
                  className="flex p-3 product-card gap-2"
                >
                  <div>
                    <Image
                      width={45}
                      height={45}
                      src={singleData?.ProductImage}
                      alt=""
                    />
                  </div>
                  <div className="ms-2">
                    <h3>{singleData?.ProductName}</h3>
                    <p>{singleData?.Specification?.Review}</p>
                    <p>{singleData?.SellingPrice}</p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-12">
        <div>
          <a href="">On-Selling Products</a>
          <hr />
        </div>
        <div>
          <div className="m-2">
            {data.slice(0 - 3).map(
              (singleData: {
                id: number;
                ProductName: string;
                Category: string;
                ProductImage: string;
                ProductImageGallery: string[];
                RegularPrice: number;
                SellingPrice: number;
                ShortDescription: string;
                FullDescription: string;
                Specification: {
                  Brand: string;
                  Voltage: string;
                  Review: number;
                };
              }) => (
                <a
                  href=""
                  key={singleData?.id}
                  className="flex p-3 product-card gap-2"
                >
                  <div>
                    <Image
                      width={45}
                      height={45}
                      src={singleData?.ProductImage}
                      alt=""
                    />
                  </div>
                  <div className="ms-2">
                    <h3>{singleData?.ProductName}</h3>
                    <p>{singleData?.Specification?.Review}</p>
                    <p>{singleData?.SellingPrice}</p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-3 sm:col-span-12">
        <Card className="mt-6 w-80 rounded-none" placeholder={undefined}>
          <CardBody placeholder={undefined}>
            <div className="justify-between flex">
              <div>
                <h3>Product Name</h3>
              </div>
              <div>
                <div>
                  Starting AT <br /> <span>$99.99</span>
                </div>
              </div>
            </div>
          </CardBody>
          <CardHeader
            color="blue-gray"
            className="relative h-56"
            placeholder={undefined}
          >
            <Image
              width={220}
              height={200}
              src="https://i.ibb.co/zrtWxWR/l-LED-BULB.jpg"
              alt="card-image"
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default PreFooter;
