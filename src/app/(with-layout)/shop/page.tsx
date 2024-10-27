// import ContainerMax from "@/components/containerMax/ContainerMax";
// import ErrorMessage from "@/components/errorMessage/ErrorMessage";
// import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
// import CustomPagination from "@/components/ui/shared/customPagination/CustomPagination";
// import useQuery from "@/hooks/useQuery";
// import TCategory from "@/types/categories/categories";
// import { TProduct } from "@/types/products/product";
// import { TTag } from "@/types/tags/tag";
// import { Metadata } from "next";
// import CategorySection from "./components/CategorySection";
// import ProductFilterContent from "./components/ProductFilterContent";
// import CustomBreadcrumb from "./components/customBreadcrumb/CustomBreadcrumb";

// export const metadata: Metadata = {
//   title: "Shop",
//   description: "Buy now",
// };

// type ShopPageProps = {
//   searchParams: Record<string, string | string[] | undefined>;
// };

// const ShopPage = async ({ searchParams }: ShopPageProps) => {
//   const [{ data: categories = [] }] =
//     await useQuery<TCategory[]>("/categories");

//   type ProductQueryResult = {
//     products: TProduct[];
//     meta: unknown;
//   };

//   const [{ data, meta: productMeta }] = await useQuery<ProductQueryResult>(
//     `/products`,
//     searchParams
//   );

//   const products = (data as unknown as TProduct[]) || [];
//   const [{ data: tags = [] }] = await useQuery<TTag[]>(`/tags`);
//   const hasCategoryParam = !!searchParams.category;

//   const breadcrumbPaths = [
//     { name: "Home", url: "/" },
//     { name: "Shop", url: "/shop" },
//   ];
//   if (hasCategoryParam && typeof searchParams.category === "string") {
//     const category = categories.find(
//       (cat) => cat.slug === searchParams.category
//     );

//     if (category) {
//       breadcrumbPaths.push({
//         name: category.name,
//         url: `/shop?category=${category.slug}`,
//       });
//     }
//   }

//   return (
//     <section className="relative">
//       <div className="absolute inset-0 -z-10  h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
//       <ContainerMax>
//         <CustomBreadcrumb paths={breadcrumbPaths} />
//         {!hasCategoryParam && <CategorySection categories={categories} />}
//         {/* <BoxHeading className="my-5 md:my-10">Shop</BoxHeading> */}
//         <div className="grid grid-cols-1 md:grid-cols-7 gap-5 my-4 md:my-16">
//           <div className="col-span-7 md:col-span-2">
//             <ProductFilterContent
//               searchParams={searchParams}
//               tags={tags}
//               categories={categories}
//             />
//           </div>
//           <div className="col-span-7 lg:col-span-5">
//             <div className="grid grid-cols-2  md:grid-cols-4  gap-4 md:gap-6 justify-center">
//               {products?.map((product) => (
//                 <ProductCardPrimary key={product._id} product={product} />
//               ))}
//               {!products?.length ? (
//                 <ErrorMessage message="No products found" />
//               ) : null}
//             </div>
//             <CustomPagination meta={productMeta} searchParams={searchParams} />
//           </div>
//         </div>
//       </ContainerMax>
//     </section>
//   );
// };

// export default ShopPage;

import ContainerMax from "@/components/containerMax/ContainerMax";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import ProductCardPrimary from "@/components/productCards/ProductCardPrimary";
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

// Define the product query result type
type ProductQueryResult = {
  products: TProduct[];
  meta: unknown;
};

const ShopPage = async ({ searchParams }: ShopPageProps) => {
  const flashSaleParam = searchParams.flashSale === "true"; // Check if flash sale is requested

  // Fetch flash sale products if the flash sale param is set
  const [{ data: flashSaleProducts = [] }] =
    await useQuery<TProduct[]>("/products/featured");
  // Fetch categories, products, and tags as usual
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  const [{ data, meta: productMeta }] = await useQuery<ProductQueryResult>(
    `/products`,
    searchParams
  );

  // If flash sale is active, use flash sale products instead of regular products
  const products = flashSaleParam
    ? flashSaleProducts
    : (data as unknown as TProduct[]) || [];

  const [{ data: tags = [] }] = await useQuery<TTag[]>(`/tags`);
  const hasCategoryParam = !!searchParams.category;

  const breadcrumbPaths = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
  ];

  if (flashSaleParam) {
    breadcrumbPaths.push({ name: "Flash Sale", url: "/shop?flashSale=true" });
  }

  if (hasCategoryParam && typeof searchParams.category === "string") {
    const category = categories.find(
      (cat) => cat.slug === searchParams.category
    );

    if (category) {
      breadcrumbPaths.push({
        name: category.name,
        url: `/shop?category=${category.slug}`,
      });
    }
  }

  return (
    <section className="relative mt-16 md:mt-0 px-2">
      <div className="absolute inset-0 -z-10  h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <ContainerMax>
        <CustomBreadcrumb paths={breadcrumbPaths} />
        {!hasCategoryParam && !flashSaleParam && (
          <CategorySection categories={categories} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 my-4 md:my-16">
          <div className="col-span-7 md:col-span-2">
            <ProductFilterContent
              searchParams={searchParams}
              tags={tags}
              categories={categories}
            />
          </div>
          <div className="col-span-7 lg:col-span-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center">
              {products?.map((product) => (
                <ProductCardPrimary key={product._id} product={product} />
              ))}
              {!products?.length ? (
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
