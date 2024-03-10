import ContainerMax from "@/components/containerMax/ContainerMax";
import BottomHeaderNavLinks from "./components/BottomHeaderNavLinks";
import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";

const BottomHeader = async () => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");
  return (
    <div className="py-2 border-b-[1px] hidden md:block">
      <ContainerMax>
        <BottomHeaderNavLinks categories={categories} />
      </ContainerMax>
    </div>
  );
};

export default BottomHeader;
