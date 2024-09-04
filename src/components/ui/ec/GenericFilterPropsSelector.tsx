import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TTag } from "@/types/tags/tag";
import { ChevronsUpDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BoxHeading from "./BoxHeading";

const GenericFilterPropsSelector = ({
  filterBy,
  title,
  selectedValues,
  setSelectedValues,
  items,
  searchParams,
}: {
  filterBy: string;
  title: string;
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
  items: TTag[];
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  useEffect(() => {
    if (searchParams[filterBy] && Array.isArray(searchParams[filterBy])) {
      setSelectedValues(searchParams[filterBy] as unknown as string[]);
    } else if (typeof searchParams[filterBy] === "string") {
      setSelectedValues([searchParams[filterBy]] as string[]);
    } else {
      setSelectedValues([]);
    }
    if (!Object.keys(searchParams).length) {
      setSelectedValues([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="p-2">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 bg-gray-100 px-2">
          <BoxHeading className="mb-0">{title}</BoxHeading>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {items.map((item) => (
            <div key={item.slug} className="flex items-center space-x-2">
              <label className="select-none flex gap-2">
                <input
                  type="checkbox"
                  value={item.slug}
                  checked={selectedValues.includes(item.slug)}
                  onChange={() => handleCheckboxChange(item.slug)}
                />
                {item.name}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default GenericFilterPropsSelector;
