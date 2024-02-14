import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "All products",
    url: "/shop",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Track your order",
    url: "/track-your-order",
  },
  {
    name: "Location",
    url: "/location",
  },
];

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
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="py-3 px-2 border-b-2 block text-accent font-bold hover:bg-base-100 hover:text-secondary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavLinks;
