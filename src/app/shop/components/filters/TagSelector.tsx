import GenericFilterPropsSelector from "@/components/ui/ec/GenericFilterPropsSelector";
import { TTag } from "@/types/tags/tag";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const TagSelector = ({
  tags,
  setTagParams,
  searchParams,
}: {
  tags: TTag[];
  setTagParams: Dispatch<SetStateAction<string>>;
  searchParams: Record<string, string>;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  useEffect(() => {
    const params = new URLSearchParams();
    selectedValues?.forEach((value) => {
      params.append("tag", value);
    });
    setTagParams(params.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues]);

  return (
    <GenericFilterPropsSelector
      filterBy="tag"
      title="FIlter by tags"
      setSelectedValues={setSelectedValues}
      selectedValues={selectedValues}
      items={tags}
      searchParams={searchParams}
    />
  );
};

export default TagSelector;
