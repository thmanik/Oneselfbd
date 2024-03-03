import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import BottomHeaderNavLinks from "../bottomHeader/components/BottomHeaderNavLinks";

const NavLinks = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="my-auto">
          <FaBars className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[540px]">
          <SheetHeader>
            <SheetDescription className="pt-10">
              <BottomHeaderNavLinks isHorizontal />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavLinks;
