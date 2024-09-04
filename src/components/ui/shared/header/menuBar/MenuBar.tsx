import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import TCategory from "@/types/categories/categories";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuBar = async ({
  categories,
  horizontal,
}: {
  categories?: TCategory[];
  horizontal?: boolean;
}) => {
  const menuLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Categories",
      href: "/category",
      subMenus: categories?.map(({ name, slug }) => ({
        title: name,
        href: `/shop?category=${slug}`,
      })),
    },
  ];
  return (
    <div>
      <Menubar
        className={`${horizontal && "flex flex-col  items-start"} bg-none bg-md-primary bg-lg-primary border-0`}
      >
        {menuLinks.map((menuItem) => {
          if (!menuItem.subMenus?.length) {
            return (
              <MenubarMenu key={menuItem.href}>
                <MenubarTrigger>
                  <Link
                    href={menuItem.href}
                    className="text-md font-semibold text-black hover:text-secondary md:text-white md:hover:text-secondary "
                  >
                    {menuItem.title}
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            );
          } else {
            return (
              <MenubarMenu key={menuItem.href}>
                <MenubarTrigger className="text-black md:text-white md:hover:text-secondery  font-semibold">
                  {menuItem.title} <IoMdArrowDropdown />
                </MenubarTrigger>
                <MenubarContent className="-mt-3">
                  {menuItem.subMenus?.map((subMenu) => (
                    <MenubarItem key={subMenu.href}>
                      <Link
                        href={subMenu.href}
                        className="hover:text-primary font-semibold"
                      >
                        {subMenu.title}
                      </Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            );
          }
        })}
      </Menubar>
    </div>
  );
};

export default MenuBar;
