import { ReactNode } from "react";
import Sidebar from "./components/sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

const UserAccountLayout = ({ children }: Props) => {
  return (
    <section className="px-6 py-8">
      {/* Main Content */}
      <div className="grid md:grid-cols-12  px-4 py-6">
        <div className="md:col-span-4 sm:col-span-12">
          <Sidebar />
        </div>
        <div className="md:col-span-8 sm:col-span-12 md:mx-6 my-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default UserAccountLayout;
