// components/atoms/IconLabel.tsx
import React from 'react';

interface IconLabelProps {
    icon: string; // URL de l'icône
    label: string; // Texte de l'étiquette
}

const IconLabel: React.FC<IconLabelProps> = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center justify-center p-2">
            <img src={icon} alt={label} className="h-8 mb-2" />
            <span className="text-sm text-center">{label}</span>
        </div>
    );
};

export default IconLabel;
