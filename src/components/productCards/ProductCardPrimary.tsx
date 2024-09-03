import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import EcButton from "../EcButton/EcButton";

type TProps = {
  product: TProduct;
  className?: string;
};
const ProductCardPrimary = ({ product, className }: TProps) => {
  return (
    <Link
      href={{
        pathname: `/product/${product._id}/${product.slug}`,
        // query: {
        //   id: product._id,
        // },
      }}
      className={twMerge(
        "bg-white h-full  flex flex-col justify-between gap-2 group ring-1 ring-gray-100 shadow-md hover:ring-primary transition-all",
        className
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="bg-base-100">
          <Image
            src={`${config.base_url}/${product.thumbnail?.src}`}
            alt={product.thumbnail?.alt}
            height={400}
            width={400}
            className="w-48 h-48 min-w-[100px] aspect-square object-cover mx-auto"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <h2 className="font-semibold text-muted">
            {product.title.length < 40 ? (
              product.title
            ) : (
              <>{product.title.slice(0, 40)}...</>
            )}
          </h2>
          <div className="flex justify-between">
            <div>
              {product.salePrice ? (
                <>
                  <span className="text-muted text-xs">
                    &#2547;
                    <del>{product.regularPrice}</del>
                  </span>
                  <span className="font-bold"> &#2547;{product.salePrice}</span>
                </>
              ) : (
                <>
                  <span className="font-bold">
                    &#2547;{product.regularPrice}
                  </span>
                </>
              )}
            </div>
            <div>
              {product.stockStatus ? (
                <span
                  className={`${product?.stockStatus === "In stock" ? "text-green-500" : "text-red-500"} text-xs`}
                >
                  {product?.stockStatus}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <EcButton className="flex-grow rounded-none font-semibold text-white max-h-[40px]">
        View details
      </EcButton>
    </Link>
  );
};

export default ProductCardPrimary;
