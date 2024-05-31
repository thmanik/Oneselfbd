import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import CustomPagination from "@/components/ui/shared/customPagination/CustomPagination";
import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";
import { TProduct } from "@/types/products/product";
import { TTag } from "@/types/tags/tag";
import { Metadata } from "next";
import CategorySection from "./components/CategorySection";
import ProductFilterContent from "./components/ProductFilterContent";

export const metadata: Metadata = {
  title: "Shop",
  description: "Buy now",
};

const ShopPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [{ data, meta: productMeta }] = await useQuery<any>(
    `/products`,
    searchParams
  );
  const products = (data?.products as TProduct[]) || [];
  const [{ data: tags = [] }] = await useQuery<TTag[]>(`/tags`);

  return (
    <section className=" relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ContainerMax>
        <CategorySection categories={categories} />
        <BoxHeading className="mt-12 mb-5">Shop</BoxHeading>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
          <div className="col-span-7 md:col-span-2">
            <ProductFilterContent
              searchParams={searchParams}
              tags={tags}
              categories={categories}
            />
          </div>
          <div className="col-span-7 lg:col-span-5 ">
            <div className="grid grid-cols-2 xls:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl: 2xl:grid-cols-5 gap-4 md:gap-7 justify-center ">
              {products.map((product) => (
                <ProductCardPrimary key={product._id} product={product} />
              ))}
              {!products.length ? (
                <ErrorMessage message="No products found" />
              ) : null}
            </div>
            <CustomPagination meta={productMeta} searchParams={searchParams} />
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default ShopPage;
