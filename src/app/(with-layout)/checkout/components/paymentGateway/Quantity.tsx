import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type TProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  // eslint-disable-next-line no-unused-vars
  callBack?: (num: number) => Promise<void>;
};

const Quantity = ({ quantity, setQuantity, callBack }: TProps) => {
  const handleIncrement = async () => {
    const newQuantity = (quantity || 0) + 1;
    setQuantity(newQuantity);
    if (callBack) {
      await callBack(newQuantity);
    }
  };
  const handleDecrement = async () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    if (callBack) {
      await callBack(newQuantity);
    }
  };

  return (
    <div className="flex justify-center items-center md:gap-5 gap-3 ">
      <button
        onClick={handleDecrement}
        disabled={quantity == 1 ? true : false}
        className="text-xl hover:bg-slate-100 px-3 py-2  rounded"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        min={1}
        max={9999}
        value={quantity || ""}
        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
          const value = parseInt(e.target.value, 10);
          const maxValue = 9999;
          let newQuantity = 9999;
          if (!isNaN(value) && value > maxValue) {
            setQuantity(maxValue);
            newQuantity = maxValue;
          } else {
            newQuantity = Math.max(1, value);
            setQuantity(newQuantity);
            // setQuantity(Math.max(1, value));
          }
          if (callBack) {
            await callBack(newQuantity);
          }
        }}
        className="text-xl border text-center w-[50px] h-[35px] rounded-md focus:outline-slate-100  [appearance:textfield][&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        onClick={handleIncrement}
        className="text-xl hover:bg-slate-100 px-3 py-2 rounded"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default Quantity;
