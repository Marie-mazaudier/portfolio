// components/molecules/TechStack.tsx
import React from 'react';
import IconLabel from '@/atoms/icons/IconLabel';

interface TechStackProps {
    technologies: { icon: string; label: string; }[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
    return (
        <div className="flex flex-wrap justify-start gap-4 ml-[-15px]" style={{ maxWidth: '100%' }}>
        {technologies.map((tech, index) => (
            <div key={index} style={{ flex: '1 0 20%' }}> {/* Ajuste pour prendre 20% de la largeur parent, permettant 5 par ligne */}
                <IconLabel icon={tech.icon} label={tech.label} />
            </div>
        ))}
    </div>
    );
};

export default TechStack;
