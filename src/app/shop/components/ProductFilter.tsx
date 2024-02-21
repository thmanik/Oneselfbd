"use client";
import EcButton from "@/components/EcButton/EcButton";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import TCategory from "@/types/categories/categories";
import { TTag } from "@/types/tags/tag";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySelector from "./filters/CategorySelector";
import PriceRangePicker from "./filters/PriceRangePicker";
import TagSelector from "./filters/TagSelector";

const ProductFilter = ({
  searchParams,
  tags,
  categories,
}: {
  searchParams: Record<string, string | string[] | undefined>;
  tags: TTag[];
  categories: TCategory[];
}) => {
  const [csSearchParams, setCsSearchParams] = useState(searchParams);
  const [filters, setFilters] = useState("");
  const [priceFilterInitialState, setPriceFilterInitialState] = useState<
    number[]
  >([0, 0]);
  const [tagParams, setTagParams] = useState<string>("");
  const [categoryParams, setCategoryParams] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    let newSearchParams = "";
    if (priceFilterInitialState.length) {
      const minPrice =
        priceFilterInitialState[0] === 0
          ? ""
          : `&minPrice=${priceFilterInitialState[0]}`;
      const maxPrice =
        priceFilterInitialState[0] === 0
          ? ""
          : `&minPrice=${priceFilterInitialState[1]}`;
      newSearchParams = `${minPrice}${maxPrice}`;
    }
    if (tagParams) {
      // newSearchParams += tagParams;
      newSearchParams = `${newSearchParams}&${tagParams}`;
    }
    if (categoryParams) {
      newSearchParams = `${newSearchParams}&${categoryParams}`;
    }
    setFilters(newSearchParams);
  }, [priceFilterInitialState, tagParams, categoryParams]);

  const handleClearAllFilters = () => {
    setCsSearchParams({});
    router.push(`?`);
  };

  return (
    <Box className="bg-white space-y-3">
      <BoxHeading>Filter by price</BoxHeading>
      <PriceRangePicker
        initialState={priceFilterInitialState}
        setInitialState={setPriceFilterInitialState}
        searchParams={csSearchParams}
      />
      <TagSelector
        tags={tags}
        setTagParams={setTagParams}
        searchParams={csSearchParams}
      />
      <CategorySelector
        categories={categories}
        searchParams={csSearchParams}
        setCategoryParams={setCategoryParams}
      />
      <div className="flex gap-2">
        <EcButton
          className="px-6 font-bold text-white"
          onClick={() => router.push(`?${filters}`)}
          disabled={!filters}
        >
          Find
        </EcButton>
        <EcButton
          className="px-6 font-bold hover:text-white"
          onClick={() => handleClearAllFilters()}
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
