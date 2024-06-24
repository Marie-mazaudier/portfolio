import { cva } from "class-variance-authority";
import React, { FC } from "react";

const btStyle = cva([""], {
  variants: {
    intent: {
      thin: ["font-extralight"],
      regular: ["font-light"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
    size: {
      xs: ["text-xs"],
      sm: ["text-xs sm:text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
    },
  },
});

export interface BTProps {
  intent?: "thin" | "regular" | "medium" | "semibold" | "bold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export const BodyText: FC<BTProps> = ({
  intent = "regular",
  size = "sm",
  className = "",
  children,
  dangerouslySetInnerHTML
}) => {
  // Vérifie si dangerouslySetInnerHTML est utilisé
  if (dangerouslySetInnerHTML) {
    return (
      <p className={`${btStyle({ intent, size })} ${className}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    );
  }

  // Render children si dangerouslySetInnerHTML n'est pas utilisé
  return (
    <p className={`${btStyle({ intent, size })} ${className}`}>
      {children}
    </p>
  );
};
