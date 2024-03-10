import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/redux/StoreProvider";
import "@smastrom/react-rating/style.css";
import { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Oneself",
    template: "%s | Oneself",
  },
  description: "Oneself",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${hindSiliguri.className} text-accent`}>
          {children}
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
