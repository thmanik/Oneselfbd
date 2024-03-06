import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import { useBaseUrl } from "@/hooks/useBaseUrl";
import useQuery from "@/hooks/useQuery";
import { TProduct } from "@/types/products/product";
import { TSingleProduct } from "@/types/products/singleProduct";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";
import ProductDetails from "./components/ProductDetails";
import ProductSharing from "./components/ProductSharing";
import RelatedProduct from "./components/RelatedProduct";
import SingleProductClientContent from "./components/SingleProductClientContent";
import SingleProductPageImageGallery from "./components/SingleProductPageImageGallery";

type TSingleProductPage = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: TSingleProductPage) => {
  const baseUrl = useBaseUrl();
  const [{ data: product, success: isSingleProductSuccess }] =
    await useQuery<TSingleProduct>(`/products/${params.id}`);

  const [{ data: relatedProduct }] = await useQuery<TProduct[]>(
    `/products?category=${product?.category?._id?._id}`
  );
  if (!isSingleProductSuccess) {
    return (
      <ErrorMessage
        message="No product found"
        className="text-center text-2xl py-5"
      />
    );
  }
  const { image, category, brand, inventory, title, shortDescription, price } =
    product as TSingleProduct;

  return (
    <>
      <section className="my-10">
        <ContainerMax>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Box className="shadow-none">
              <SingleProductPageImageGallery image={image} />
            </Box>
            <Box className="space-y-4">
              <Link
                className="text-sm text-muted"
                href={`/category/${category._id._id}`}
              >
                {category._id.name}
              </Link>
              <h2 className="font-semibold text-xl lg:text-2xl">{title}</h2>
              <Rating style={{ maxWidth: 80 }} value={3.5} readOnly />
              <div className="flex gap-5">
                <p className="text-md text-muted">{brand[0].name}</p>
                <p>
                  <span className="text-muted">Availability: </span>
                  <span className="font-semibold">
                    {inventory.stockQuantity <= 0 ? (
                      <span className="text-red-600">Out of stock</span>
                    ) : (
                      <span className="text-green-600">
                        {inventory.stockQuantity} In stock
                      </span>
                    )}
                  </span>
                </p>
              </div>
              <hr />
              <div
                dangerouslySetInnerHTML={{ __html: shortDescription }}
                className="text-muted"
              ></div>
              <h2 className="text-3xl my-2">
                {price.salePrice ? (
                  <>
                    <del className="text-muted text-base">
                      {price.regularPrice}&#2547;
                    </del>
                    <span> {price.salePrice}&#2547; </span>
                  </>
                ) : (
                  <span>{price.salePrice}&#2547; </span>
                )}
              </h2>
              <div>
                <SingleProductClientContent product={product} />
              </div>
              <ProductSharing
                productUrl={`${baseUrl}/product/${product?._id}`}
              />
            </Box>
            <div className="col-span-1 md:col-span-2 mt-10">
              <ProductDetails product={product} />
            </div>
            <div className="col-span-1 md:col-span-2 mt-10">
              <RelatedProduct products={relatedProduct} />
            </div>
          </div>
        </ContainerMax>
      </section>
    </>
  );
};

export default SingleProductPage;
