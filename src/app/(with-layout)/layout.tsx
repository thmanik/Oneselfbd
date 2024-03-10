import { ReactNode } from "react";
import Footer from "@/components/ui/shared/footer/Footer";
import Header from "@/components/ui/shared/header/Header";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
