import { cva } from "class-variance-authority";
import React, { FC } from "react";
const h3Style = cva([""], {
  variants: {
    intent: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
    size: { // Pré-configurer des tailles ici
      base: ["text-xl md:text-xl lg:text-2xl"], // Taille par défaut
      xs: ["text-base md:text-base lg:text-1xl"],
      small: ["text-xl md:text-xl lg:text-1xl"],
      medium: ["text-xl lg:text-3xl"],
      large: ["text-5xl md:text-5xl lg:text-6xl"],
      extraLarge: ["text-5xl md:text-6xl lg:text-7xl"]
    },
    defaultVariants: {
      size: "base", // Définit la taille par défaut
    },
  },
});

export interface H3props {
  intent?: "normal" | "medium" | "semibold" | "bold";
  size?: "base" | "xs" | "small" | "medium" | "large" | "extraLarge"; // Permettre la sélection de taille
  className?: string;
  children?: React.ReactNode;
}

export const Heading3: FC<H3props> = (props) => {
  const { intent = "normal", size = "base", className = "", children = "Your Text Here" } = props;
  return <h3 className={`${h3Style({ intent, size })} ${className}`}>{children}</h3>;
};
