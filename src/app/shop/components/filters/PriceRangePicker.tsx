"use client";
import { Input } from "@/components/ui/input";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

const PriceRangePicker = ({
  initialState,
  setInitialState,
  searchParams,
}: {
  initialState: number[];
  setInitialState: Dispatch<SetStateAction<number[]>>;
  searchParams: Record<string, string>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (valueFor: string, value: number) => {
    if (valueFor === "min") {
      setInitialState([value, initialState[1]]);
    } else {
      setInitialState([initialState[0], value]);
    }
  };

  useEffect(() => {
    setInitialState([
      Number(searchParams.minPrice) || 0,
      Number(searchParams.maxPrice) || 0,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.minPrice, searchParams.maxPrice]);
  useEffect(() => {
    if (!Object.keys(searchParams).length) {
      setInitialState([0, 0]);
      formRef?.current?.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div>
      <form className="grid grid-cols-2 gap-3" ref={formRef}>
        <Input
          type="number"
          defaultValue={initialState[0] !== 0 ? initialState[0] : undefined}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("min", Number(e.target.value))
          }
          placeholder="Min"
        />
        <Input
          type="number"
          defaultValue={initialState[1] !== 0 ? initialState[1] : undefined}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("max", Number(e.target.value))
          }
          placeholder="Max"
        />
      </form>
      <div className="col-span-2 mt-5">
        <span className="text-muted font-semibold">Price:</span>
        <span className="font-bold">
          {initialState[0]}&#2547; - {initialState[1]}&#2547;
        </span>
      </div>
    </div>
  );
};

export default PriceRangePicker;
