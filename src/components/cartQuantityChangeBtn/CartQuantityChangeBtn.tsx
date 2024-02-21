"use client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";

const CartQuantityChangeBtn = ({
  quantity,
  setQuantity,
  callBack,
}: {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  // eslint-disable-next-line no-unused-vars
  callBack?: (num: number) => void;
}) => {
  const quantityUpdateHandler = (newQuantity: number) => {
    if (newQuantity <= 1) {
      newQuantity = 1;
    }
    if (callBack) {
      callBack(newQuantity);
    }
    setQuantity(newQuantity);
  };
  return (
    <div className="flex gap-2">
      <Input
        value={quantity}
        className="max-w-[90px]"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          quantityUpdateHandler(Number(e.target.value))
        }
        type="number"
      />
    </div>
  );
};

export default CartQuantityChangeBtn;
