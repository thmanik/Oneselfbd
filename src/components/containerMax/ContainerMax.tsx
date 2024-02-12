import { ReactNode } from "react";

const ContainerMax = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto px-2 2xl:px-0">{children}</div>;
};

export default ContainerMax;
