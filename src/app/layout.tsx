import ContainerMax from "@/components/containerMax/ContainerMax";
import StoreProvider from "@/redux/StoreProvider";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Footer from "./ui/shared/footer/Footer";
import Header from "./ui/shared/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header></Header>
          <main>
            <ContainerMax>{children}</ContainerMax>
          </main>
          <Footer></Footer>
        </body>
      </StoreProvider>
    </html>
  );
}
