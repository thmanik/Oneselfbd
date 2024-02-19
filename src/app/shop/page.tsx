import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import CustomPagination from "@/components/ui/shared/customPagination/CustomPagination";
import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";
import { TProduct } from "@/types/product";
import { TMeta } from "@/types/response";
import { TTag } from "@/types/tags/tag";
import { Metadata } from "next";
import CategorySection from "./components/CategorySection";
import ProductFilter from "./components/ProductFilter";

export const metadata: Metadata = {
  title: "Shop | Oneself",
  description: "Buy now",
};

const ShopPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const { data: categoriesResponse } = await useQuery("/categories");
  const { data: productsResponse } = await useQuery(`/products`, {
    searchParams,
  });
  const { data: tagsResponse } = await useQuery(`/tags`);
  const categories = (categoriesResponse?.data as unknown as TCategory[]) ?? [];
  const products =
    (productsResponse?.data?.data as unknown as TProduct[]) ?? [];
  const tags = (tagsResponse?.data as unknown as TTag[]) ?? [];
  return (
    <section className="pt-16 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ContainerMax>
        <CategorySection categories={categories} />
        <div className="grid grid-cols-1 md:grid-cols-7 mt-20 gap-5">
          <div className="col-span-1 md:col-span-2">
            <ProductFilter
              searchParams={searchParams}
              tags={tags}
              categories={categories}
            />
          </div>
          <div className="col-span-1 md:col-span-5 pt-5">
            <BoxHeading>Shop</BoxHeading>
            <div className="flex flex-wrap gap-5">
              {products.map((product) => (
                <ProductCardPrimary
                  key={product._id}
                  product={product}
                  className="rounded-md hover:scale-105 transition-all"
                />
              ))}
              {!products.length ? (
                <ErrorMessage message="No products found" />
              ) : null}
            </div>
            <CustomPagination
              meta={productsResponse?.data?.meta as TMeta}
              searchParams={searchParams}
            />
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default ShopPage;
