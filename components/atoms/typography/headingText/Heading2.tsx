import { cva } from "class-variance-authority";
import React, { FC } from "react";
const h2Style = cva([""], {
  variants: {
    intent: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
    size: { // Pré-configurer des tailles ici
      base: ["text-xl lg:text-3xl"], // Taille par défaut
      small: ["text-xl md:text-xl lg:text-2xl"],
      medium: ["text-xl lg:text-3xl"],
      large: ["text-5xl md:text-5xl lg:text-6xl"],
      extraLarge: ["text-5xl md:text-6xl lg:text-8xl"]
    },
    defaultVariants: {
      size: "base", // Définit la taille par défaut
    },
  },
});

export interface H2props {
  intent?: "normal" | "medium" | "semibold" | "bold";
  size?: "base" | "small" | "medium" | "large" | "extraLarge"; // Permettre la sélection de taille
  className?: string;
  children?: React.ReactNode;
}

export const Heading2: FC<H2props> = (props) => {
  const { intent = "normal", size = "base", className = "", children = "Your Text Here" } = props;
  return <h2 className={`${h2Style({ intent, size })} ${className}`}>{children}</h2>;
};
