import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const BoxHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-xl font-bold mb-4", className)}>{children}</h2>
  );
};

export default BoxHeading;
