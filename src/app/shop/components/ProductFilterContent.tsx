"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TCategory from "@/types/categories/categories";
import { TTag } from "@/types/tags/tag";
import { useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import ProductFilter from "./ProductFilter";

const ProductFilterContent = ({
  searchParams,
  tags,
  categories,
}: {
  searchParams: Record<string, string | string[] | undefined>;
  tags: TTag[];
  categories: TCategory[];
}) => {
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const filterContent = (
    <ProductFilter
      searchParams={searchParams}
      tags={tags}
      categories={categories}
      sheetCloseRef={sheetCloseRef}
    />
  );

  return (
    <>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="gap-3 hover:text-white">
              <FaBarsStaggered /> Open filter
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="p-4">
              <SheetTitle>FIlter</SheetTitle>
            </SheetHeader>
            {filterContent}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" ref={sheetCloseRef} className="hidden">
                  Save changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:block">{filterContent}</div>
    </>
  );
};

export default ProductFilterContent;
