import React, { useEffect, useRef, useState } from "react";
import { Heading2 } from "@/atoms/typography/headingText/Heading2";
import * as DOMPurify from 'dompurify';
import { BodyText } from "@/atoms/typography/bodyText/BodyText";

interface BlocTexteDeuxColonnesProps {
    Text1: string;
    Text2: string;
    titre1?: string;
    titre2?: string;
}

export const BlocTexteDeuxColonnes: React.FC<BlocTexteDeuxColonnesProps> = ({ Text1, Text2, titre1, titre2 }) => {
    const [htmlContent, setHtmlContent] = useState('');
    const [htmlContent2, setHtmlContent2] = useState('');


    useEffect(() => {
        // Mettre à jour le contenu HTML ici si nécessaire
        setHtmlContent(DOMPurify.sanitize(Text1))
        setHtmlContent2(DOMPurify.sanitize(Text2))

    }, [Text1, Text2]);

    return (
        <div className="container mx-auto px-10 lg:px-8 2xl:px-32">
            {/* Section */}
            <div className="flex flex-wrap justify-between items-start">
                <div className="lg:w-1/2 h-full pr-28   border-r">
                    <Heading2 size="small" className="text-left leading-6 " children={titre1} />
                    <p className="text-left texte_class my-8" dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                </div>
                <div className="lg:w-1/2   pl-28  h-full">
                    <Heading2 size="small" className="text-left leading-6 " children={titre2} />
                    <p className="text-left texte_class my-8" dangerouslySetInnerHTML={{ __html: htmlContent2 }}></p>

                </div>
            </div>
        </div>
    );

};