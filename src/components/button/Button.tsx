"use client";

import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

export default function EcButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <Button className={className} placeholder={""}>
      {children}
    </Button>
  );
}
