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
        "bg-white w-[188px] border- p-4 flex flex-col gap-2 group",
        className
      )}
    >
      <p className="text-xs text-muted">{product?.category?.name}</p>
      <h2 className="text-secondary font-bold">{product.title}</h2>
      <Image
        src={`${baseUrl}/${product.image.src}`}
        alt={product.image.alt}
        height={400}
        width={400}
        className="w-28 h-28 aspect-square object-cover mx-auto"
        priority
      />
      <div>
        {product.salePrice ? (
          <>
            <span className="text-muted text-xs">
              &#2547;
              <del>{product.regularPrice}</del>
            </span>
            <span className="font-bold"> &#2547; {product.salePrice}</span>
          </>
        ) : (
          <>
            <span className="font-bold">{product.regularPrice}</span>
          </>
        )}
      </div>
      <EcButton className="bg-gray-300 text-white group-hover:bg-primary font-bold">
        Buy now
      </EcButton>
    </Link>
  );
};

export default ProductCardPrimary;
