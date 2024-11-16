import EcButton from "@/components/EcButton/EcButton";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import TCategory from "@/types/categories/categories";
import { TTag } from "@/types/tags/tag";
import { useRouter } from "next/navigation";
import { RefObject, useEffect, useState } from "react";
import PriceRangeSlider from "../components/priceRange/PriceRange";
import CategorySelector from "./filters/CategorySelector";

type ProductFilterProps = {
  searchParams: Record<string, string | string[] | undefined>;
  tags: TTag[];
  categories: TCategory[];
  sheetCloseRef: RefObject<HTMLButtonElement>;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  searchParams,
  categories,
  sheetCloseRef,
}) => {
  const [csSearchParams, setCsSearchParams] =
    useState<Record<string, string | string[] | undefined>>(searchParams);
  const [filters, setFilters] = useState<string>("");
  const [priceFilterInitialState, setPriceFilterInitialState] = useState<
    number[]
  >([Number(searchParams.minPrice) || 0, Number(searchParams.maxPrice) || 805]);
  const [tagParams, setTagParams] = useState<string>("");
  const [categoryParams, setCategoryParams] = useState<string[]>([]); // Store multiple categories as an array
  const [subcategoryParams, setSubcategoryParams] = useState<
    Record<string, string[]>
  >({});

  const router = useRouter();

  useEffect(() => {
    let newSearchParams = "";

    // Append minPrice and maxPrice
    if (priceFilterInitialState.length) {
      const minPrice =
        priceFilterInitialState[0] !== 0
          ? `minPrice=${priceFilterInitialState[0]}`
          : "";
      const maxPrice =
        priceFilterInitialState[1] !== 805
          ? `maxPrice=${priceFilterInitialState[1]}`
          : "";
      newSearchParams = `${minPrice ? `&${minPrice}` : ""}${
        maxPrice ? `&${maxPrice}` : ""
      }`;
    }

    // Handle subcategoryParams
    if (Object.keys(subcategoryParams).length) {
      Object.entries(subcategoryParams).forEach(([, subcategories]) => {
        if (subcategories.length) {
          // Add only the subcategories to the query string
          newSearchParams = `${newSearchParams}&subCategory=${subcategories.join(
            ","
          )}`;
        }
      });
    }

    // Handle categoryParams excluding categories with selected subcategories
    const remainingCategories = categoryParams.filter(
      (category) => !subcategoryParams[category]?.length
    );
    if (remainingCategories.length) {
      remainingCategories.forEach((category) => {
        newSearchParams = `${newSearchParams}&category=${category}`;
      });
    }

    // Append tagParams if present
    if (tagParams) {
      newSearchParams = `${newSearchParams}&${tagParams}`;
    }

    setFilters(newSearchParams);
  }, [priceFilterInitialState, tagParams, categoryParams, subcategoryParams]);

  const handleClearAllFilters = () => {
    setCsSearchParams({});
    setPriceFilterInitialState([0, 805]);
    setTagParams("");
    setCategoryParams([]); // Clear category
    setSubcategoryParams({}); // Clear all subcategories
    sheetCloseRef?.current?.click();
    router.push("/shop"); // Reset URL to base
  };

  const handleApplyFilters = () => {
    let newSearchParams = "";

    // Add minPrice and maxPrice first
    if (priceFilterInitialState[0] !== 0) {
      newSearchParams = `minPrice=${priceFilterInitialState[0]}`;
    }
    if (priceFilterInitialState[1] !== 805) {
      newSearchParams += `&maxPrice=${priceFilterInitialState[1]}`;
    }

    // Add subcategory if present, ignoring categoryParams
    if (Object.keys(subcategoryParams).length) {
      Object.entries(subcategoryParams).forEach(([, subcategories]) => {
        if (subcategories.length) {
          newSearchParams = `${newSearchParams}&subCategory=${subcategories.join(
            ","
          )}`;
        }
      });
    }

    // Add remaining categories without subcategories
    const remainingCategories = categoryParams.filter(
      (category) => !subcategoryParams[category]?.length
    );
    if (remainingCategories.length) {
      remainingCategories.forEach((category) => {
        newSearchParams = `${newSearchParams}&category=${category}`;
      });
    }

    // Add tags if available
    if (tagParams) {
      newSearchParams = `${newSearchParams}&${tagParams}`;
    }

    // Update the URL with the filters applied
    router.push(`/shop?${newSearchParams}`);
    sheetCloseRef?.current?.click();
  };

  return (
    <Box className="bg-white space-y-3">
      <BoxHeading className="bg-gray-100 py-1 px-2 mx-2">
        Filter by price
      </BoxHeading>
      <PriceRangeSlider
        initialState={priceFilterInitialState}
        setInitialState={setPriceFilterInitialState}
      />
      <CategorySelector
        categories={categories}
        searchParams={csSearchParams}
        setCategoryParams={setCategoryParams}
        setSubcategoryParams={setSubcategoryParams}
      />
      <div className="flex gap-2">
        <EcButton
          className="px-6 font-bold text-white"
          onClick={handleApplyFilters}
          disabled={!filters}
        >
          Find
        </EcButton>
        <EcButton
          className="px-6 font-bold hover:text-white"
          onClick={handleClearAllFilters}
          variant="ghost"
          disabled={!Object.keys(searchParams).length}
        >
          Clear all filters
        </EcButton>
      </div>
    </Box>
  );
};

export default ProductFilter;

// "use client";
// import EcButton from "@/components/EcButton/EcButton";
// import Box from "@/components/ui/ec/Box";
// import BoxHeading from "@/components/ui/ec/BoxHeading";
// import TCategory from "@/types/categories/categories";
// import { TTag } from "@/types/tags/tag";
// import { useRouter } from "next/navigation";
// import { RefObject, useEffect, useState } from "react";
// import PriceRangeSlider from "../components/priceRange/PriceRange";
// import CategorySelector from "./filters/CategorySelector";

// type ProductFilterProps = {
//   searchParams: Record<string, string | string[] | undefined>;
//   tags: TTag[];
//   categories: TCategory[];
//   sheetCloseRef: RefObject<HTMLButtonElement>;
// };

// const ProductFilter: React.FC<ProductFilterProps> = ({
//   searchParams,

//   categories,
//   sheetCloseRef,
// }) => {
//   const [csSearchParams, setCsSearchParams] =
//     useState<Record<string, string | string[] | undefined>>(searchParams);
//   const [filters, setFilters] = useState<string>("");
//   const [priceFilterInitialState, setPriceFilterInitialState] = useState<
//     number[]
//   >([Number(searchParams.minPrice) || 0, Number(searchParams.maxPrice) || 805]);
//   const [tagParams, setTagParams] = useState<string>("");
//   const [categoryParams, setCategoryParams] = useState<string>("");

//   const router = useRouter();

//   useEffect(() => {
//     let newSearchParams = "";
//     if (priceFilterInitialState.length) {
//       const minPrice =
//         priceFilterInitialState[0] !== 0
//           ? `minPrice=${priceFilterInitialState[0]}`
//           : "";
//       const maxPrice =
//         priceFilterInitialState[1] !== 805
//           ? `maxPrice=${priceFilterInitialState[1]}`
//           : "";
//       newSearchParams = `${minPrice ? `&${minPrice}` : ""}${maxPrice ? `&${maxPrice}` : ""}`;
//     }
//     if (tagParams) {
//       newSearchParams = `${newSearchParams}&${tagParams}`;
//     }
//     if (categoryParams) {
//       newSearchParams = `${newSearchParams}&${categoryParams}`;
//     }
//     setFilters(newSearchParams);
//   }, [priceFilterInitialState, tagParams, categoryParams]);

//   const handleClearAllFilters = () => {
//     setCsSearchParams({});
//     setPriceFilterInitialState([0, 805]);
//     setTagParams("");
//     setCategoryParams("");
//     sheetCloseRef?.current?.click();
//     router.push(`?`);
//   };

//   return (
//     <Box className="bg-white space-y-3">
//       <BoxHeading className="bg-gray-100 py-1 px-2 mx-2">
//         Filter by price
//       </BoxHeading>
//       <PriceRangeSlider
//         initialState={priceFilterInitialState}
//         setInitialState={setPriceFilterInitialState}
//       />
//       {/* <TagSelector
//         tags={tags}
//         setTagParams={setTagParams}
//         searchParams={csSearchParams}
//       /> */}
//       <CategorySelector
//         categories={categories}
//         searchParams={csSearchParams}
//         setCategoryParams={setCategoryParams}
//       />
//       <div className="flex gap-2">
//         <EcButton
//           className="px-6 font-bold text-white"
//           onClick={() => {
//             router.push(`?${filters}`);
//             sheetCloseRef?.current?.click();
//           }}
//           disabled={!filters}
//         >
//           Find
//         </EcButton>
//         <EcButton
//           className="px-6 font-bold hover:text-white"
//           onClick={handleClearAllFilters}
//           variant="ghost"
//           disabled={!Object.keys(searchParams).length}
//         >
//           Clear all filters
//         </EcButton>
//       </div>
//     </Box>
//   );
// };

// export default ProductFilter;
