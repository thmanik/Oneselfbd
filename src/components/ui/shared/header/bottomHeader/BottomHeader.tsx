"use client";
import ContainerMax from "@/components/containerMax/ContainerMax";
import TCategory from "@/types/categories/categories";
import MenuBar from "../menuBar/MenuBar";
import { usePathname } from "next/navigation";
const BottomHeader = ({ categories }: { categories?: TCategory[] }) => {
  const pathname = usePathname();
  return (
    <div className="py-2 border-b-[1px] hidden bg-primary  md:block">
      <ContainerMax>
        <MenuBar categories={categories} activePath={pathname} />
      </ContainerMax>
    </div>
  );
};

export default BottomHeader;
