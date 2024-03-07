import Footer from "@/components/ui/shared/footer/Footer";
import Header from "@/components/ui/shared/header/Header";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/redux/StoreProvider";
import "@smastrom/react-rating/style.css";
import { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

const inter = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Oneself",
    template: "%s | Oneself",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} text-accent`}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
