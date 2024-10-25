// MenuBar.tsx
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

const MenuBar = ({
  categories,
  horizontal,
  onMenuItemClick,
  activePath, // Accept activePath as a prop
}: {
  categories?: TCategory[];
  horizontal?: boolean;
  onMenuItemClick?: () => void; // Optional prop to close the sidebar
  activePath?: string; // New prop for the active path
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
      title: "Track your order",
      href: "/track-your-order",
      displayOnSmallScreenOnly: true,
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
        className={`${horizontal && "flex flex-col items-start"} bg-primary border-0`}
      >
        {menuLinks.map((menuItem) => {
          const visibilityClass = menuItem.displayOnSmallScreenOnly
            ? "block md:hidden"
            : "block";

          const isActive = activePath === menuItem.href; // Check if the current path matches the menu item's href

          if (!menuItem.subMenus?.length) {
            return (
              <MenubarMenu key={menuItem.href}>
                <MenubarTrigger>
                  <Link
                    href={menuItem.href}
                    className={`text-sm md:text-md  lg:text-lg hover:!text-secondary flex justify-between items-center font-semibold py-2 px-4 transition duration-200 ${isActive ? "!text-secondary" : "!text-white"} ${visibilityClass}`}
                    onClick={onMenuItemClick} // Close sidebar on link click
                  >
                    {menuItem.title}
                  </Link>
                </MenubarTrigger>
                <hr className="border-gray-300 w-full md:hidden m-0" />
              </MenubarMenu>
            );
          } else {
            return (
              <MenubarMenu key={menuItem.href}>
                <MenubarTrigger
                  className={`ps-8 pt-3 md:pt-2 md:ps-0 font-semibold  md:text-md lg:text-lg md:mx-auto hover:cursor-pointer hover:!text-secondary transition duration-200 ${isActive ? "!text-secondary" : "!text-white"}`}
                >
                  {menuItem.title} <IoMdArrowDropdown />
                </MenubarTrigger>
                <MenubarContent className="-mt-3">
                  {menuItem.subMenus?.map((subMenu) => {
                    const isSubMenuActive = activePath === subMenu.href; // Check for sub-menu active state

                    return (
                      <MenubarItem key={subMenu.href}>
                        <Link
                          href={subMenu.href}
                          className={`hover:text-primary font-semibold ${isSubMenuActive ? "font-extrabold" : ""}`}
                          onClick={onMenuItemClick} // Close sidebar on submenu click
                        >
                          {subMenu.title}
                        </Link>
                      </MenubarItem>
                    );
                  })}
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

// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import TCategory from "@/types/categories/categories";
// import Link from "next/link";
// import { IoMdArrowDropdown } from "react-icons/io";

// const MenuBar = async ({
//   categories,
//   horizontal,
// }: {
//   categories?: TCategory[];
//   horizontal?: boolean;
// }) => {
//   const menuLinks = [
//     {
//       title: "Home",
//       href: "/",
//     },
//     {
//       title: "Shop",
//       href: "/shop",
//     },
//     {
//       title: "Categories",
//       href: "/category",
//       subMenus: categories?.map(({ name, slug }) => ({
//         title: name,
//         href: `/shop?category=${slug}`,
//       })),
//     },
//   ];
//   return (
//     <div>
//       <Menubar
//         className={`${horizontal && "flex flex-col  items-start"} bg-none bg-md-primary bg-lg-primary border-0`}
//       >
//         {menuLinks.map((menuItem) => {
//           if (!menuItem.subMenus?.length) {
//             return (
//               <MenubarMenu key={menuItem.href}>
//                 <MenubarTrigger>
//                   <Link
//                     href={menuItem.href}
//                     className="text-md font-semibold text-black hover:text-secondary md:text-white md:hover:text-secondary "
//                   >
//                     {menuItem.title}
//                   </Link>
//                 </MenubarTrigger>
//               </MenubarMenu>
//             );
//           } else {
//             return (
//               <MenubarMenu key={menuItem.href}>
//                 <MenubarTrigger className="text-black md:text-white md:hover:text-secondery  font-semibold">
//                   {menuItem.title} <IoMdArrowDropdown />
//                 </MenubarTrigger>
//                 <MenubarContent className="-mt-3">
//                   {menuItem.subMenus?.map((subMenu) => (
//                     <MenubarItem key={subMenu.href}>
//                       <Link
//                         href={subMenu.href}
//                         className="hover:text-primary font-semibold"
//                       >
//                         {subMenu.title}
//                       </Link>
//                     </MenubarItem>
//                   ))}
//                 </MenubarContent>
//               </MenubarMenu>
//             );
//           }
//         })}
//       </Menubar>
//     </div>
//   );
// };

// export default MenuBar;
