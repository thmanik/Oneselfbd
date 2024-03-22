import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import TCategory from "@/types/categories/categories";
import { FaBars } from "react-icons/fa";
import MenuBar from "../menuBar/MenuBar";

const NavLinks = ({ categories }: { categories?: TCategory[] }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="my-auto">
          <FaBars className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[540px]">
          <SheetHeader>
            <SheetDescription className="pt-10">
              <MenuBar horizontal categories={categories} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavLinks;
