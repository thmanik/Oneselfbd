"use client";

import { Button } from "@material-tailwind/react";

export default function EcButton({ children, className }) {
  return (
    <Button className={className} placeholder={""}>
      {children}
    </Button>
  );
}
