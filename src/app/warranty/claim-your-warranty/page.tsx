import ClaimFormHeader from "./components/claimFormHeader/ClaimFormHeader";
import Conditions from "./components/conditions/Conditions";
import InstructionVideo from "./components/instructionVideo/InstructionVideo";
import WarrantyForm from "./components/warrantyForm/WarrantyForm";

const ClaimYourWarrantyPage = () => {
  return (
    <div className="bg-[#F3F3FE] flex justify-center items-center">
      <div className="w-[85%] bg-[#FFFFFF] my-8 rounded-lg shadow-lg">
        <div className="mx-12">
          <ClaimFormHeader />
          <Conditions />
          <InstructionVideo />
          <WarrantyForm />
        </div>
      </div>
    </div>
  );
};

export default ClaimYourWarrantyPage;
