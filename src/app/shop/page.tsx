"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import data from "../../../public/data.json";
import FilterBar from "./component/FilterBar";
const ShopPage = () => {
  return (
    <div className="my-10 mx-6 ">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-3 sm:col-span-12">
          <FilterBar />
        </div>

        <div className="md:col-span-9 sm:col-span-12">
          <div className="md:grid md:grid-cols-12">
            {data?.map((singledata) => (
              <div className="md:col-span-3 sm:col-span-12" key={singledata.id}>
                <Card
                  className="my-4 W-56 mx-1 h-96 relative"
                  placeholder={undefined}
                >
                  <CardBody placeholder={undefined}>
                    <Typography
                      className="text-sub_title"
                      placeholder={undefined}
                    >
                      {singledata?.Category}
                    </Typography>
                    <Typography
                      variant="h5"
                      className="mb-2 text-heading"
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
              </div>
            ))}
            {/* <div className="md:col-span-3 sm:col-span-12">2</div>
            <div className="md:col-span-3 sm:col-span-12">3</div>
            <div className="md:col-span-3 sm:col-span-12">4</div>
            <div className="md:col-span-3 sm:col-span-12">5</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
