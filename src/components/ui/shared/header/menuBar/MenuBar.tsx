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
      subMenus: categories?.map(({ name, _id }) => ({
        title: name,
        href: `/shop?category=${_id}`,
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
                    className=" hover:text-white font-semibold text-md"
                  >
                    {menuItem.title}
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            );
          } else {
            return (
              <MenubarMenu key={menuItem.href}>
                <MenubarTrigger className="hover:text-white font-semibold">
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
