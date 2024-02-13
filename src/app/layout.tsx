import Header from "@/components/ui/shared/header/Header";
import StoreProvider from "@/redux/StoreProvider";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Footer from "./ui/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </StoreProvider>
    </html>
  );
}
