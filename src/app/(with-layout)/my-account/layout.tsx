import ContainerMax from "@/components/containerMax/ContainerMax";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

const UserAccountLayout = ({ children }: Props) => {
  const isLoggedIn = !!cookies()?.get("refreshToken")?.value;
  return (
    <section className="px-6 py-8">
      {/* Main Content */}
      <ContainerMax>
        <div className="grid md:grid-cols-12  px-4 py-6">
          <div className="md:col-span-4 sm:col-span-12">
            <Sidebar isLoggedIn={isLoggedIn} />
          </div>
          <div className="md:col-span-8 sm:col-span-12 md:mx-6 my-4">
            {children}
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default UserAccountLayout;
