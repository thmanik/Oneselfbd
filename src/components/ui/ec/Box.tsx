import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "ring-1 shadow-md rounded-md p-5 ring-base-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
