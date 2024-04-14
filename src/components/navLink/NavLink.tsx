"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  children: ReactNode;
  activeClassName?: string;
  className?: string;
  href: string;
};

const NavLink = ({ children, activeClassName, className, href }: TProps) => {
  const pathname = usePathname();
  const isMatch = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(className, `${isMatch ? activeClassName : null}`)}
    >
      {children}
    </Link>
  );
};

export default NavLink;
