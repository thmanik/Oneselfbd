import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import { TSingleProduct } from "@/types/products/singleProduct";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";
import ProductClientWrapper from "./components/ProductClientWrapper"; // Import the client-side wrapper
import ProductDetails from "./components/ProductDetails";
import ProductSharing from "./components/ProductSharing";
import RelatedProduct from "./components/RelatedProduct";
import SingleProductPageImageGallery from "./components/SingleProductPageImageGallery";

type TProps = {
  params: {
    slug: string[];
    id: string;
  };
};

export async function generateMetadata({ params }: TProps) {
  const product = await fetch(
    `${config.base_url}/api/v1/products/${params.slug[0]}`
  ).then((res) => res.json());

  return {
    title: product.data?.title,
    description: product.data?.body,
  };
}

const fetchProductData = async (slug: string) => {
  const productResponse = await fetch(
    `${config.base_url}/api/v1/products/${slug}`
  );
  const product = await productResponse.json();
  return product.data as TSingleProduct;
};

const fetchRelatedProducts = async (categoryId: string) => {
  const relatedProductsResponse = await fetch(
    `${config.base_url}/api/v1/products?category=${categoryId}`
  );
  const relatedProducts = await relatedProductsResponse.json();
  return relatedProducts.data as TProduct[];
};

const SingleProductPage = async ({ params }: TProps) => {
  const product = await fetchProductData(params.slug[0]);
  const relatedProducts = await fetchRelatedProducts(
    product?.category?._id?._id || ""
  );

  if (!product) {
    return (
      <ErrorMessage
        message="No product found"
        className="text-center text-2xl py-5"
      />
    );
  }

  const {
    gallery,
    category,
    brand,
    inventory,
    title,
    shortDescription,
    price,
    variations,
  } = product;

  // Determine the default variation if available
  const defaultVariation = variations[0] || null;
  const initialVariationPrice = defaultVariation
    ? defaultVariation.price
    : price;

  return (
    <section className="my-10">
      <ContainerMax>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Box className="shadow-none ring-2">
            <SingleProductPageImageGallery gallery={gallery} />
          </Box>
          <Box className="space-y-4 shadow-none ring-0">
            <Link
              className="text-sm text-muted"
              href={`/category/${category?._id?._id}`}
            >
              {category?._id?.name}
            </Link>
            <h2 className="font-semibold text-xl lg:text-2xl">{title}</h2>
            <Rating style={{ maxWidth: 80 }} value={3.5} readOnly />
            <div className="flex gap-5">
              <p className="text-md text-muted">brand: {brand?.name || null}</p>
              <p>
                <span className="text-muted">Availability: </span>
                <span className="font-semibold">
                  {inventory?.stockQuantity <= 0 ? (
                    <span className="text-red-600">Out of stock</span>
                  ) : (
                    <span className="text-green-600">
                      {inventory?.stockQuantity} In stock
                    </span>
                  )}
                </span>
              </p>
            </div>
            <hr />
            <div
              dangerouslySetInnerHTML={{ __html: shortDescription || "" }}
              className="text-muted"
            />
            {/* Use the client-side wrapper component */}
            <ProductClientWrapper
              product={product}
              initialVariationPrice={initialVariationPrice}
            />
            <ProductSharing
              productUrl={`${config.base_url}/product/${product._id}`}
            />
          </Box>
          <div className="col-span-1 md:col-span-2 mt-10">
            <ProductDetails product={product} />
          </div>
          <div className="col-span-1 md:col-span-2 mt-10">
            <RelatedProduct products={relatedProducts} />
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default SingleProductPage;
