// components/CircularText.tsx
import React from 'react';

interface CircularTextProps {
  text: string;
  radius: number;  // Le rayon du cercle pour le positionnement du texte
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius }) => {
  const cleanText = text.replace(/\s/g, ''); // Enlever les espaces pour un placement uniforme
  const len = cleanText.length;
  const angle = 360 / len;

  return (
    <div className="circular-text-container" style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, position: 'relative' }}>
      {Array.from(cleanText).map((char, i) => (
        <span
          key={i}
          className="char uppercase font-semibold text-primary"
          style={{
            position: 'absolute',
            height: `${radius}px`,  // Moitié du diamètre pour aligner le texte à l'extérieur
            transformOrigin: 'bottom center',
            transform: `rotate(${angle * i}deg) translate(0, -100%)`,
            fontSize: `${radius * 0.45}px`  // Taille de police basée sur le rayon
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default CircularText;
