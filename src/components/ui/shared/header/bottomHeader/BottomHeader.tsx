import ContainerMax from "@/components/containerMax/ContainerMax";
import TCategory from "@/types/categories/categories";
import MenuBar from "../menuBar/MenuBar";

const BottomHeader = async ({ categories }: { categories?: TCategory[] }) => {
  return (
    <div className="py-2 border-b-[1px] hidden md:block">
      <ContainerMax>
        <MenuBar categories={categories} />
      </ContainerMax>
    </div>
  );
};

export default BottomHeader;
