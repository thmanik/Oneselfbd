import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ContainerMax = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={twMerge("container", className)}>{children}</div>;
};

export default ContainerMax;
