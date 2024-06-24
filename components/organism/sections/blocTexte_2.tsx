import React, { useEffect, useState } from "react";
import * as DOMPurify from 'dompurify';
interface blocTexte_2Props {
    paragraphe: string;

}

export const BlocTexte_2: React.FC<blocTexte_2Props> = ({ paragraphe }) => {
    const [htmlContent, setHtmlContent] = useState('');


    useEffect(() => {
        // Mettre à jour le contenu HTML ici si nécessaire
        setHtmlContent(DOMPurify.sanitize(paragraphe))


    }, [paragraphe]);

    return (
        <div className="container-fluid ">
            {/* Section */}
            {/* Section */}
            <div className="flex  justify-between items-center px-2 md:px-32 gap-3 md:gap-8 fade-in">
                <div className="w-1/4 flex items-center justify-center  ">
                    <div className="border-principal w-full "></div>
                </div>
                <div className="w-3/4  px-5 flex flex-col justify-center pr-20">
                    <p className="text-left texte_class my-8" dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                </div>
            </div>
        </div>
    );

};