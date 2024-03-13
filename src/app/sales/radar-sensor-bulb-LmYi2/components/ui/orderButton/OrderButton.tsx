"use client";
import Lottie from "lottie-react";
import React, { ReactNode, useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

type OrderButtonProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const OrderButton = ({ children, style, className }: OrderButtonProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${twMerge("flex justify-center", className)}`}>
      <div
        style={{
          position: "relative",
          width: isSmallScreen ? "100%" : "450px",
          height: "85px",
          overflow: "hidden",
          ...style,
        }}
      >
        <Lottie
          animationData={require("../../../../../../../public/images/animations/button-Animation.json")}
          loop
          autoplay
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="#order-form"
            style={{ cursor: "pointer", width: "100%" }}
            aria-label="Order Button"
          >
            <div className="text-[#FFFF00]">{children}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderButton;
