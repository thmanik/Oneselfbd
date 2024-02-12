import config from "@/config/config";
import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductCardPrimary = ({ product }: { product: TProduct }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="bg-white w-[188px] border- p-4 flex flex-col gap-2 group"
    >
      <p className="text-xs text-muted">{product?.category?.name}</p>
      <h2 className="text-secondary font-bold">{product.title}</h2>
      <Image
        src={`${config.base_url}/uploads/public${product.image.src}`}
        alt={product.image.alt}
        height={400}
        width={400}
        className="w-28 h-28 aspect-square object-cover mx-auto"
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
      <Button className="bg-gray-300 text-white group-hover:bg-primary font-bold">
        Buy now
      </Button>
    </Link>
  );
};

export default ProductCardPrimary;
