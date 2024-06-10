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
import CustomBreadcrumb from "./components/customBreadcrumb/CustomBreadcrumb";

export const metadata: Metadata = {
  title: "Shop",
  description: "Buy now",
};

type ShopPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const ShopPage = async ({ searchParams }: ShopPageProps) => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  type ProductQueryResult = {
    products: TProduct[];
    meta: unknown;
  };

  const [{ data, meta: productMeta }] = await useQuery<ProductQueryResult>(
    `/products`,
    searchParams
  );
  const products = (data?.products as TProduct[]) || [];
  const [{ data: tags = [] }] = await useQuery<TTag[]>(`/tags`);
  const hasCategoryParam = !!searchParams.category;

  const breadcrumbPaths = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
  ];
  if (hasCategoryParam && typeof searchParams.category === "string") {
    const category = categories.find(
      (cat) => cat._id === searchParams.category
    );

    if (category) {
      breadcrumbPaths.push({
        name: category.name,
        url: `/shop?category=${category._id}`,
      });
    }
  }

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10  h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ContainerMax>
        <CustomBreadcrumb paths={breadcrumbPaths} />
        {!hasCategoryParam && <CategorySection categories={categories} />}
        <BoxHeading className="my-5 md:my-10">Shop</BoxHeading>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
          <div className="col-span-7 md:col-span-2">
            <ProductFilterContent
              searchParams={searchParams}
              tags={tags}
              categories={categories}
            />
          </div>
          <div className="col-span-7 lg:col-span-5">
            <div className="grid grid-cols-2 xls:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl: 2xl:grid-cols-5 gap-4 md:gap-7 justify-center">
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
