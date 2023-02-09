import React from "react";
type TextProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
};

export const Text = ({ size, color, children }: TextProps) => {
  return <div className={`class-width-${size}-${color}`}>{children}</div>;
};


