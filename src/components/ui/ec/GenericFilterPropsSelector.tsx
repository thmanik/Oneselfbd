import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import TCategory from "@/types/categories/categories";
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
  subcategories,
  setSubcategories,
}: {
  filterBy: string;
  title: string;
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
  items: TCategory[];
  searchParams: Record<string, string | string[] | undefined>;
  subcategories: Record<string, string[]>;
  setSubcategories: Dispatch<SetStateAction<Record<string, string[]>>>;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Handles category checkbox changes
  const handleCategoryCheckboxChange = (categorySlug: string) => {
    const updatedSelectedValues = [...selectedValues];

    if (updatedSelectedValues.includes(categorySlug)) {
      updatedSelectedValues.splice(
        updatedSelectedValues.indexOf(categorySlug),
        1
      );
    } else {
      updatedSelectedValues.push(categorySlug);
    }

    setSelectedValues(updatedSelectedValues);
  };

  // Handles subcategory checkbox changes for multiple selections
  const handleSubcategoryCheckboxChange = (
    subcategorySlug: string,
    categorySlug: string
  ) => {
    const updatedSubcategories = { ...subcategories };

    // Initialize an array if it doesn't exist for this category
    if (!Array.isArray(updatedSubcategories[categorySlug])) {
      updatedSubcategories[categorySlug] = [];
    }

    // Toggle the subcategory selection
    if (updatedSubcategories[categorySlug].includes(subcategorySlug)) {
      updatedSubcategories[categorySlug] = updatedSubcategories[
        categorySlug
      ].filter((slug) => slug !== subcategorySlug);
    } else {
      updatedSubcategories[categorySlug].push(subcategorySlug);
    }

    setSubcategories(updatedSubcategories);
  };

  // Handles category dropdown toggle
  const handleCategoryToggle = (categorySlug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categorySlug)
        ? prev.filter((slug) => slug !== categorySlug)
        : [...prev, categorySlug]
    );
  };

  // Set selected values based on searchParams
  useEffect(() => {
    const param = searchParams[filterBy];
    if (Array.isArray(param)) {
      setSelectedValues(param as string[]);
    } else if (typeof param === "string") {
      setSelectedValues([param]);
    } else {
      setSelectedValues([]);
    }
  }, [searchParams, filterBy, setSelectedValues]);

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
          {items.map((category) => (
            <div key={category.slug} className="space-y-2">
              <div className="flex items-center space-x-2">
                <label className="select-none flex gap-2">
                  <input
                    type="checkbox"
                    value={category.slug}
                    checked={selectedValues.includes(category.slug)}
                    onChange={() => handleCategoryCheckboxChange(category.slug)}
                    onClick={() => handleCategoryToggle(category.slug)}
                  />
                  {category.name}
                </label>
              </div>

              {category.subcategories && category.subcategories.length > 0 && (
                <div
                  className={`ml-6 space-y-2 ${
                    expandedCategories.includes(category.slug)
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {category.subcategories.map((subCategory) => (
                    <div
                      key={subCategory.slug}
                      className="flex items-center space-x-2"
                    >
                      <label className="select-none flex gap-2">
                        <input
                          type="checkbox"
                          value={subCategory.slug}
                          checked={subcategories[category.slug]?.includes(
                            subCategory.slug
                          )}
                          onChange={() =>
                            handleSubcategoryCheckboxChange(
                              subCategory.slug,
                              category.slug
                            )
                          }
                        />
                        {subCategory.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default GenericFilterPropsSelector;
