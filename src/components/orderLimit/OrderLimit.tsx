import { Dispatch, SetStateAction } from "react";
import CommonModal from "../commonModal/CommonModal";

const OrderLimit = ({
  limitModalStatus,
  setLimitModalStatus,
}: {
  limitModalStatus: boolean;
  setLimitModalStatus: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleLimitModal = () => {
    setLimitModalStatus((prev) => !prev);
  };
  return (
    <div>
      <CommonModal
        open={limitModalStatus}
        handleOpen={handleLimitModal}
        modalTitle="Reached order limit"
        className="min-h-[400px] w-[320px]"
      >
        <p className="text-justify">
          <p>প্রিয় গ্রাহক,</p>
          পুনরায় অর্ডার করার চেষ্টা করার জন্য ধন্যবাদ! আপনার একটি অর্ডার
          সঠিকভাবে সম্পূর্ণ হয়েছে, অনুগ্রহ করে অপেক্ষা করুন আমাদের প্রতিনিধি
          আপনার সাথে নির্ধারিত সময়ের মধ্যে কল দিয়ে অর্ডারটি কনফর্ম করবে। যদি
          আপনার কোন সহায়তা প্রয়োজন হয় বা আপনি শীঘ্রই আরেকটি অর্ডার দিতে চান,
          দয়া করে নিচের নাম্বারটিতে যোগাযোগ করুন।
        </p>
        <p className="text-center">
          যোগাযোগঃ <br /> +8801967214215
        </p>
        <p className="text-center">
          আমাদের সাথে থাকার জন্য ধন্যবাদ জানাই এবং আপনার সেবা করার অপেক্ষায়
          রয়েছি!
        </p>
      </CommonModal>
    </div>
  );
};

export default OrderLimit;
