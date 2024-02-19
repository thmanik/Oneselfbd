import GenericFilterPropsSelector from "@/components/ui/ec/GenericFilterPropsSelector";
import TCategory from "@/types/categories/categories";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const CategorySelector = ({
  categories,
  searchParams,
  setCategoryParams,
}: {
  categories: TCategory[];
  searchParams: Record<string, string>;
  setCategoryParams: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (Array.isArray(selectedValues)) {
      selectedValues?.forEach((value) => {
        params.append("category", value);
      });
      setCategoryParams(params.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues]);
  return (
    <GenericFilterPropsSelector
      filterBy="category"
      title="FIlter by category"
      setSelectedValues={setSelectedValues}
      selectedValues={selectedValues}
      items={categories}
      searchParams={searchParams}
    />
  );
};

export default CategorySelector;
