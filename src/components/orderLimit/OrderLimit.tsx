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
        <p>
          পুনরায় অর্ডার করার চেষ্টা করার জন্য ধন্যবাদ! উচ্চ মানের পরিষেবা
          নিশ্চিত করতে, আমরা বর্তমানে প্রতি ঘণ্টায় একটি অর্ডার গ্রহণ করছি। যদি
          আপনার কোন সহায়তা প্রয়োজন হয় বা আপনি শীঘ্রই আরেকটি অর্ডার দিতে চান,
          দয়া করে নিচের নাম্বারটিতে যোগাযোগ করুন।
        </p>
        <p className="text-center">
          যোগাযোগঃ <br /> +8801967214215
        </p>
        <p>
          আমাদের সাথে থাকার জন্য ধন্যবাদ জানাই এবং আপনার সেবা করার অপেক্ষায়
          রয়েছি!
        </p>
      </CommonModal>
    </div>
  );
};

export default OrderLimit;
