import { ReactNode } from "react";

const ContainerMax = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default ContainerMax;
