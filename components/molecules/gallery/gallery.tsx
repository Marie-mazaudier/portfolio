import React, { FC } from "react";
import { Placeholder } from "../../atoms/placeholder/Placeholder";

export interface GalleryProps {
    images: ImageNode[];
    imageWidth?: number;
    imageHeight?: number;
    mobileImageHeight?: number;  // Hauteur sur les appareils mobiles
    columns?: number;  // Nombre de colonnes pour les appareils de bureau
    mobileColumns?: number;  // Nombre de colonnes pour les mobiles
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    className?: string;
}

export interface ImageNode {
    node: {
        altText: string;
        mediaItemUrl: string;
    };
}

export const Gallery: FC<GalleryProps> = ({
    images,
    imageWidth,
    imageHeight,
    columns = 3,  // Nombre par défaut de colonnes pour PC
    mobileColumns = 1,  // Nombre par défaut de colonnes pour mobile
    objectFit = "cover",
    className,
}) => {
    // Construire la classe pour la grille en utilisant Tailwind CSS
    const gridClass = `grid grid-cols-${mobileColumns} sm:grid-cols-${columns} gap-4 ${className || ''}`;

    return (
        <div className={gridClass}>
            {images.map((img, index) => (
                <div key={index} className="col-span-1">
                    <Placeholder
                        src={img.node.mediaItemUrl}
                        alt={img.node.altText}
                        imageWidth={imageWidth}
                        imageHeight={imageHeight}
                        objectFit={objectFit}
                        className="w-full h-auto sm:h-full"
                    />
                </div>
            ))}
        </div>
    );
};
