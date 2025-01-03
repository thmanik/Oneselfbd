import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import Image from "next/image";
import Link from "next/link";
const ProductCardSecondary = ({ product }: { product: TProduct }) => {
  return (
    <div className="grid grid-cols-4 w-80 gap-3 p-2">
      <div>
        <Image
          src={`${config.base_url}/${product.thumbnail?.src} ` || ""}
          alt={product.thumbnail?.alt || ""}
          width={300}
          height={300}
          className="w-20 h-20 object-cover"
        />
      </div>
      <div className="col-span-3 space-y-1">
        <Link
          href={`/product/${product._id}/${product.slug}`}
          className="font-semibold text-secondary hover:text-primary"
        >
          {product.title}
        </Link>

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
  );
};

export default ProductCardSecondary;
