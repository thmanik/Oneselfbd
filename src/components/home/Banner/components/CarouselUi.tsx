import { Button } from "@/components/ui/button";
import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import Image from "next/image";
import Link from "next/link";

const CarouselUi = ({ product }: { product: TProduct }) => {
  return (
    <div className="relative py-10  px-2 md:px-10">
      <div className="absolute inset-0 -z-10 h-full w-full mt-3 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="grid grid-cols-2 md:grid-cols-2 items-center">
        <div>
          <p className="text-muted text-xs md:text-base">Buy now the</p>
          <h2 className="text-secondary text-xl md:text-4xl font-bold uppercase">
            {product.title}
          </h2>
          <div className="flex md:block lg:block gap-4 md:gap-0 lg:gap-0">
            <p>
              <span className="uppercase text-xs text-muted">from</span>
              <span className="block text-xl font-bold">
                <sup className="text-sm">&#2547;</sup>
                {product.salePrice ? product.salePrice : product.price}
              </span>
            </p>
            <Link href={`/product/${product._id}`} className="mt-2  block b-5">
              <Button
                className="text-sm md:text-base  font-semibold text-white"
                variant="secondary"
              >
                Buy now
              </Button>
            </Link>
          </div>
        </div>
        <div className=" md:block">
          <Image
            src={`${config.base_url}/${product.thumbnail?.src} ` || ""}
            alt={product.thumbnail?.alt || ""}
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselUi;
