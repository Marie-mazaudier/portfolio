import Image from "next/image";
import React, { FC } from "react";

export interface PlaceholderProps {
  src: string;
  imageWidth?: number;
  imageHeight?: number;
  alt?: string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  horizontalAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'flex-start' | 'center' | 'flex-end';
  borderRadius?: 'none' | 'round' | 'pill'; // Ajout de borderRadius comme prop
}

export const Placeholder: FC<PlaceholderProps> = ({
  src,
  imageWidth = 550,
  imageHeight = "auto",
  alt = "image",
  className = "",
  objectFit = "cover",
  horizontalAlign = 'center',
  verticalAlign = 'flex-end',
  borderRadius = 'none' // Valeur par défaut est 'none'
}) => {
  const borderRadiusClasses = {
    none: '',
    round: 'rounded-lg', // Bordure moyennement arrondie
    pill: 'rounded-full' // Bordure complètement arrondie pour un cercle parfait
  };

  return (
    <div style={{ display: 'flex', alignItems: verticalAlign, justifyContent: horizontalAlign, height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        layout="fixed" // Utilisation du layout fixed pour contrôler la taille sans affecter la résolution
        objectFit={objectFit}
        priority={true} // Chargement prioritaire de l'image
        className={`${className} ${borderRadiusClasses[borderRadius]}`}
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }} // Styles CSS pour contrôler la taille visuelle
      />
    </div>
  );
};
