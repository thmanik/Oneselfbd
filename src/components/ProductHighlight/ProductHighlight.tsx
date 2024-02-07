"use client";
import Image from "next/image";
import "./ProductHighlight.css";
const ProductHighlight = () => {
  return (
    <>
      <div className="flex highlight-section m-auto md:mt-16 md:mb-5 bg-gray-200 justify-center items-center">
        <div className="md:ms-5 ">
          <h3 className="md:text-2xl title font-bold text-gray-600">
            SHOP AND SAVE BIG HOTTEST BULBS
          </h3>
        </div>
        <div className="md:ms-14">
          <div>
            <h5 className="title">STARTING AT</h5>
            <span className="md:text-2xl price">%199.99</span>
          </div>
        </div>
        <div className="md:ms-5 ">
          <Image
            width={185}
            height={220}
            className="ProductHighlightImg"
            src="https://i.ibb.co/7VH5rMw/Orelco-Bulb-01.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProductHighlight;
