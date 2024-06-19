import ContainerMax from "@/components/containerMax/ContainerMax";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

const UserAccountLayout = ({ children }: Props) => {
  const isLoggedIn = !!cookies()?.get("__app.ec.rt")?.value;
  return (
    <section className="px-6 py-8">
      {/* Main Content */}
      <ContainerMax>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <Sidebar isLoggedIn={isLoggedIn} />
          </div>
          <div className="col-span-12 md:col-span-8">{children}</div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default UserAccountLayout;
