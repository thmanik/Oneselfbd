import config from "@/config/config";
import { TPaymentMethod } from "@/types/paymentMethod";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
const SelectPaymentMethod = ({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  paymentMethods,
}: {
  selectedPaymentMethod: string | null;
  setSelectedPaymentMethod: Dispatch<SetStateAction<string | null>>;
  paymentMethods: TPaymentMethod[];
}) => {
  return (
    <div>
      {paymentMethods.map((paymentMethod) => (
        <div
          key={paymentMethod?.name}
          className="flex items-center py-2 border-b-2 border-b-base-100 hover:bg-base-100 px-3 rounded-md"
        >
          <input
            type="radio"
            id={paymentMethod?._id}
            name="paymentMethod"
            value={paymentMethod?._id}
            checked={selectedPaymentMethod === paymentMethod?._id}
            onChange={() => setSelectedPaymentMethod(paymentMethod?._id)}
          />
          <label
            htmlFor={paymentMethod?._id}
            className="select-none px-2 font-semibold text-sm cursor-pointer flex justify-between flex-grow items-center"
          >
            <span>{paymentMethod?.name}</span>
            <Image
              src={`${config.base_url}/${paymentMethod?.image?.src} ` || ""}
              alt={paymentMethod?.image?.alt || ""}
              width={200}
              height={200}
              className="w-10 h-10 rounded-md"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default SelectPaymentMethod;
