// NavLinks.tsx
"use client"; // This is still a client component to manage the state for the sidebar

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import TCategory from "@/types/categories/categories";
import { usePathname } from "next/navigation"; // Import usePathname to get the current pathname
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuBar from "../menuBar/MenuBar";

const NavLinks = ({ categories }: { categories?: TCategory[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the sidebar when a menu item is clicked
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="my-auto" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[540px] bg-primary text-white"
        >
          <SheetHeader>
            <SheetDescription className="pt-10">
              <MenuBar
                horizontal
                categories={categories}
                activePath={pathname} // Pass the active path to MenuBar
                onMenuItemClick={handleMenuItemClick}
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavLinks;

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import TCategory from "@/types/categories/categories";
// import { FaBars } from "react-icons/fa";
// import MenuBar from "../menuBar/MenuBar";

// const NavLinks = ({ categories }: { categories?: TCategory[] }) => {
//   return (
//     <>
//       <Sheet>
//         <SheetTrigger className="my-auto">
//           <FaBars className="w-7 h-7" />
//         </SheetTrigger>
//         <SheetContent side="left" className="w-[300px] sm:w-[540px]">
//           <SheetHeader>
//             <SheetDescription className="pt-10">
//               <MenuBar horizontal categories={categories} />
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </>
//   );
// };

// export default NavLinks;
