import config from "@/config/config";
import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HorizontalProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-base-100 grid grid-cols-2 gap-5 justify-center items-center p-5 rounded-lg">
      <div className="flex justify-end">
        <Image
          src={`${config.base_url}/uploads/public${product.image.src}`}
          alt={product.image.alt}
          width={600}
          height={400}
          priority
          className="aspect-square w-24 rounded-md"
        />
      </div>
      <div>
        <h2 className="text-accent font-semibold">{product.title}</h2>
        <div>
          {product.salePrice ? (
            <>
              <span className="text-muted">
                &#2547;
                <del>{product.price}</del>
              </span>
              <span className="text-2xl font-bold">
                &#2547;
                <span>{product.salePrice}</span>
              </span>
            </>
          ) : (
            <>
              <span className="text-2xl font-bold">
                &#2547;
                <span>{product.price}</span>
              </span>
            </>
          )}
        </div>
        <Link
          href={`/product/${product.slug}`}
          className="font-semibold text-primary hover:text-primary/80 transition-all flex items-center gap-2"
        >
          <span>Buy now</span>
          <span>
            <IoIosArrowDroprightCircle />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
