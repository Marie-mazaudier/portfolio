// components/organisms/TechnologySection.tsx
import React from 'react';
import TechStack from '@/molecules/list-icons/TechStack';

const TechnologySection: React.FC = () => {
    const technologies = [
        { icon: '/icons/elementor.svg', label: 'Elementor' },
        { icon: '/icons/wordpress.svg', label: 'Wordpress' },
        { icon: '/icons/css-3.svg', label: 'Css3' },
        { icon: '/icons/javascript.svg', label: 'Javascript' },
        { icon: '/icons/react.svg', label: 'React' },
        { icon: '/icons/next-js.svg', label: 'Next.JS' },
        { icon: '/icons/node-js.svg', label: 'Node.JS' },
        { icon: '/icons/tailwind.svg', label: 'Tailwind CSS' },
        { icon: '/icons/vercel.svg', label: 'Vercel' },
        { icon: '/icons/typescript.svg', label: 'Typescript' },
        { icon: '/icons/graphql.svg', label: 'GraphQL' },
        { icon: '/icons/apollo.svg', label: 'Apollo Client' },
        // Ajoutez d'autres technologies ici...
    ];

    return (
        <div className="p-0">
           {/* <h2 className="text-xl uppercase text-primary text-left mb-4">Technologies I Work With</h2>*/}
            <TechStack technologies={technologies} />
        </div>
    );
};

export default TechnologySection;
