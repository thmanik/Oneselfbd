import GenericFilterPropsSelector from "@/components/ui/ec/GenericFilterPropsSelector";
import TCategory from "@/types/categories/categories";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const CategorySelector = ({
  categories,
  searchParams,
  setCategoryParams,
  setSubcategoryParams,
}: {
  categories: TCategory[];
  searchParams: Record<string, string | string[] | undefined>;
  setCategoryParams: Dispatch<SetStateAction<string[]>>;
  setSubcategoryParams: Dispatch<SetStateAction<Record<string, string[]>>>;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    setCategoryParams(selectedValues);
  }, [selectedValues, setCategoryParams]);

  useEffect(() => {
    setSubcategoryParams(subcategories);
  }, [subcategories, setSubcategoryParams]);

  return (
    <GenericFilterPropsSelector
      filterBy="category"
      title="Filter by category"
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      items={categories}
      searchParams={searchParams}
      subcategories={subcategories}
      setSubcategories={setSubcategories}
    />
  );
};

export default CategorySelector;
