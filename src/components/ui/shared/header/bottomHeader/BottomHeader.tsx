import ContainerMax from "@/components/containerMax/ContainerMax";
import BottomHeaderNavLinks from "./components/BottomHeaderNavLinks";

const BottomHeader = () => {
  return (
    <div className="py-2 border-b-[1px] hidden md:block">
      <ContainerMax>
        <BottomHeaderNavLinks />
      </ContainerMax>
    </div>
  );
};

export default BottomHeader;
