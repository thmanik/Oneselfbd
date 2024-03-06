import { Toaster } from "@/components/ui/toaster";
import "@smastrom/react-rating/style.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Oneself",
    template: "%s | Oneself",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-hind-siliguri text-accent`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
