import type { ReactNode } from "react";

interface AboutBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default function AboutBackground({
  children,
  className = "",
}: AboutBackgroundProps) {
  return (
    <div
      className={`relative w-full overflow-hidden text-[#1E2A21] ${className}`}
      style={{
        backgroundImage: "linear-gradient(to bottom, #FFF2C3, #F8F6EF)",
      }}
    >
      {children}
    </div>
  );
}