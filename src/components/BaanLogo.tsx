import React from "react";
// @ts-ignore
import logoUrl from "../assets/images/baan_thai_massage_logo_bez_pozadia.svg";

interface BaanLogoProps {
  className?: string;
  showText?: boolean;
  theme?: "dark" | "light" | "custom";
}

export function BaanLogo({ className = "w-16 h-16", showText = true, theme = "light" }: BaanLogoProps) {
  let colorClass = "";
  if (!className.includes("text-") && !className.includes("text-[")) {
    if (theme === "custom") {
      colorClass = "text-[#af8a54]";
    } else if (theme === "dark") {
      colorClass = "text-brand-peach-light";
    } else {
      colorClass = "text-[#a66d2d]";
    }
  }

  const maskStyle: React.CSSProperties = {
    maskImage: `url(${logoUrl})`,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskImage: `url(${logoUrl})`,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
  };

  if (showText) {
    return (
      <div 
        className={`bg-current ${colorClass} ${className} aspect-[650/506]`} 
        style={maskStyle}
      />
    );
  }

  // If showText is false, zoom in on the graphic part while maintaining dynamic color
  return (
    <div className={`relative overflow-hidden ${colorClass} ${className} aspect-square rounded-full flex items-center justify-center`}>
      <div
        className="absolute bg-current max-h-none max-w-none"
        style={{
          width: "185%", // Scales the shape to zoom in on graphic
          height: "165%",
          top: "-5%",
          left: "-42.5%",
          ...maskStyle,
        }}
      />
    </div>
  );
}
