"use client";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import data from "../../../public/data.json";
import "./PreFooter.css";
/* eslint-disable @next/next/no-img-element */
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
            {data
              .slice(0 - 3)
              .map(
                (singleData: {
                  SellingPrice: ReactNode;
                  Specification: any;
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
                ),
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
          <div className="m-2">
            {data
              .slice(0 - 3)
              .map(
                (singleData: {
                  SellingPrice: ReactNode;
                  Specification: any;
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
                ),
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
            {data
              .slice(0 - 3)
              .map(
                (singleData: {
                  SellingPrice: ReactNode;
                  Specification: any;
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
                ),
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
                <p>
                  Starting AT <br /> <span>$99.99</span>
                </p>
              </div>
            </div>
          </CardBody>
          <CardHeader
            color="blue-gray"
            className="relative h-56"
            placeholder={undefined}
          >
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default PreFooter;
