import React from 'react';

interface HorizontalLineProps {
  thickness?: string; // L'épaisseur de la ligne, par exemple '2px'
  color?: string;     // La couleur de la ligne, par exemple 'gray-400' ou toute couleur CSS valide
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({
  thickness = '1px',
  color = 'gray-400'
}) => {
  return (
    <hr className={`container mx-auto w-full border-t ${color}`} style={{ borderTopWidth: thickness }} />
  );
};
