// TwoColumnBlock.tsx
import React from "react";

interface TwoColumnBlockProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftSize?: "1/2" | "1/3" | "2/3";
  rightSize?: "1/2" | "1/3" | "2/3";
  leftAlignItems?: 'start' | 'center' | 'end';
  rightAlignItems?: 'start' | 'center' | 'end';
  leftJustifyContent?: 'start' | 'center' | 'end';
  rightJustifyContent?: 'start' | 'center' | 'end';
  height?: string; // Nouvelle propriété pour la hauteur, attend une classe de hauteur Tailwind CSS
}

const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({
  leftContent,
  rightContent,
  leftSize = "1/2",
  rightSize = "1/2",
  leftAlignItems = 'center',
  rightAlignItems = 'center',
  leftJustifyContent = 'center',
  rightJustifyContent = 'center',
  height = "auto" // Valeur par défaut pour la hauteur
}) => {
  // Application des classes de colonnes avec contrôle dynamique
  const leftColumnClasses = `flex flex-col items-${leftAlignItems} justify-${leftJustifyContent} ${leftSize === "1/2" ? "w-1/2" : leftSize === "1/3" ? "w-1/3" : "w-2/3"}`;
  const rightColumnClasses = `flex flex-col items-${rightAlignItems} justify-${rightJustifyContent} ${rightSize === "1/2" ? "w-1/2" : rightSize === "1/3" ? "w-1/3" : "w-2/3"}`;

  return (
    <div className={`flex ${height}`}>  
      <div className={leftColumnClasses}>
        {leftContent}
      </div>
      <div className={rightColumnClasses}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnBlock;
