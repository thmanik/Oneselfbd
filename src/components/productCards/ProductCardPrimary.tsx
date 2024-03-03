import { useBaseUrl } from "@/hooks/useBaseUrl";
import { TProduct } from "@/types/products/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import EcButton from "../EcButton/EcButton";

const ProductCardPrimary = ({
  product,
  className,
}: {
  product: TProduct;
  className?: string;
}) => {
  const baseUrl = useBaseUrl();
  return (
    <Link
      href={`/product/${product._id}`}
      className={twMerge(
        "bg-white w-52 h-[328px] flex flex-col justify-between gap-2 group ring-1 ring-gray-100 shadow-md hover:ring-primary transition-all",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="bg-base-100">
          <Image
            src={`${baseUrl}/${product.image.src}`}
            alt={product.image.alt}
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
                <span className="font-bold">&#2547;{product.regularPrice}</span>
              </>
            )}
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
