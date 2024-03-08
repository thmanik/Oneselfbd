"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import TCategory from "@/types/categories/categories";
import Link from "next/link";
import React from "react";
type TProps = {
  isHorizontal?: boolean;
  categories: TCategory[];
};
const BottomHeaderNavLinks = ({ isHorizontal, categories }: TProps) => {
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
      subMenus: categories.map(({ name }) => ({
        title: name,
        href: "/electric-bulb",
      })),
    },
  ];

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList
          className={`${isHorizontal && "flex flex-col items-start"}`}
        >
          {menuLinks.map((menuLink) => {
            if (menuLink?.subMenus?.length) {
              return (
                <NavigationMenuItem key={menuLink.href}>
                  <NavigationMenuTrigger className="hover:bg-transparent bg-transparent hover:text-secondary focus:bg-transparent">
                    {menuLink.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-64">
                      {menuLink?.subMenus?.map((subMenu) => (
                        <ListItem
                          key={subMenu.title}
                          title={subMenu.title}
                          href={`${menuLink.href}${subMenu.href}`}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={menuLink.href}>
                <Link href={menuLink.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} hover:bg-transparent bg-transparent hover:text-secondary focus:bg-transparent`}
                  >
                    {menuLink.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent ",
            className
          )}
          {...props}
        >
          <span className="text-sm font-medium leading-none block">
            {title}
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default BottomHeaderNavLinks;
