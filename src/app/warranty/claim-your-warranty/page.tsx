// import ClaimFormHeader from "./components/claimFormHeader/ClaimFormHeader";
// import WarrantyForm from "./components/warrantyForm/WarrantyForm";

// const ClaimYourWarrantyPage = () => {
//   return (
//     <div className="bg-[#F3F3FE] flex justify-center items-center">
//       <div className="w-[85%] bg-[#FFFFFF] my-8 rounded-lg shadow-lg">
//         <div className="mx-12">
//           <ClaimFormHeader />
//           <WarrantyForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimYourWarrantyPage;

import ClaimFormHeader from "./components/claimFormHeader/ClaimFormHeader";
import WarrantyForm from "./components/warrantyForm/WarrantyForm";

const ClaimYourWarrantyPage = () => {
  return (
    <div className="bg-[#F3F3FE] flex justify-center items-center">
      <div className="w-[95%] md:w-[85%] bg-[#FFFFFF] my-8 rounded-lg shadow-lg">
        <div className="mx-2 md:mx-12">
          <ClaimFormHeader />
          <WarrantyForm />
        </div>
      </div>
    </div>
  );
};

export default ClaimYourWarrantyPage;
