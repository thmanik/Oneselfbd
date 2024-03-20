import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type TProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

const Quantity = ({ quantity, setQuantity }: TProps) => {
  const handleIncrement = () => {
    setQuantity((quantity || 0) + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex justify-center items-center gap-5 ">
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = parseInt(e.target.value, 10);
          const maxValue = 9999;
          if (!isNaN(value) && value > maxValue) {
            setQuantity(maxValue);
          } else {
            setQuantity(Math.max(1, value));
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
