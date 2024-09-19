import JumpToTopBtn from "@/components/jumpToTopBtn/JumpToTopBtn";
import Footer from "@/components/ui/shared/footer/Footer";
import Header from "@/components/ui/shared/header/Header";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
      <JumpToTopBtn />
    </>
  );
}
