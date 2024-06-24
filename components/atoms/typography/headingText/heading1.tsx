import { cva } from "class-variance-authority";
import React, { FC } from "react";

const h1Style = cva(["font-heading"], {
  variants: {
    intent: {
      thin :["font-thin"],
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
      extraBold: ["font-extrabold"],
    },
    size: {
      base: ["text-3xl md:text-3xl lg:text-4xl"], // Taille par défaut
      small: ["text-xl md:text-xl lg:text-2xl"],
      medium: ["text-3xl md:text-4xl lg:text-5xl"],
      large: ["text-5xl md:text-5xl lg:text-6xl"],
      extraLarge: ["text-5xl md:text-6xl lg:text-8xl leading-2"],
    },
    fontFamily: {
      grotesk: ["font-grotesk"],
      'grotesk-light': ["font-grotesk-light"],
      'grotesk-medium': ["font-grotesk-medium"],
      'grotesk-regular': ["font-grotesk-regular"],
      'grotesk-semibold': ["font-grotesk-semibold"],
    },
    leading: { // Nouvelle variante pour l'interligne
      none: ["leading-none"],
      tight: ["leading-tight"],
      normal: ["leading-normal"],
      loose: ["leading-loose"],
      extraLoose: ["leading-10"],
    }
  },
  defaultVariants: {
    size: "base",
    fontFamily: "grotesk", // Utilisation de la famille de polices Barlow par défaut
    leading: "normal", // Interligne par défaut
  },
});

export interface H1Props {
  intent?: "thin"| "normal" | "medium" | "semibold" | "bold" | "extraBold";
  size?: "base" | "small" | "medium" | "large" | "extraLarge";
  leading?: "none" | "tight" | "normal" | "loose" | "extraLoose"; // Ajouter l'option pour l'interligne
  className?: string;
  children?: React.ReactNode;
}

export const Heading1: FC<H1Props> = ({
  intent = "normal",
  size = "base",
  className = "",
  leading = "normal",
  children,
}) => {
  return <h1 className={`${h1Style({ intent, size })} ${className}`}>{children}</h1>;
};
