import React, { useEffect, useRef, useState } from "react";
import { Heading2 } from "@/atoms/typography/headingText/Heading2";
import { Heading3 } from "@/atoms/typography/headingText/heading3";
import { Spaces } from "@/atoms/space/Spaces";
import * as DOMPurify from 'dompurify';


interface BlocTexteSimpleProps {
    estimation: EstimationData
}
interface EstimationData {
    titre: string;
    sousTitre1: string;
    description: string;
    sousTitre2: string;
    description2: string;
}
export const BlocTexteSimple: React.FC<BlocTexteSimpleProps> = ({ estimation }) => {
    const [htmlContent, setHtmlContent] = useState('');
    const [htmlContent2, setHtmlContent2] = useState('');

    /*=============GSAP INITIALISATION===================*/
    // Références pour les éléments que vous souhaitez animer
    const words = estimation.titre.split(" ");

    useEffect(() => {
        // Mettre à jour le contenu HTML ici si nécessaire
        setHtmlContent(DOMPurify.sanitize(estimation.description))
        setHtmlContent2(DOMPurify.sanitize(estimation.description2))


    }, [estimation.description, estimation.description2]);

    return (
        <div className="container-fluid ">
            {/* Section */}
            <div className="flex  justify-center items-center mx-auto  gap-5 md:gap-10 px-2 md:px-20">
                <div className="w-2/3 shadow-dropShadowSm  px-20 py-10  flex flex-col justify-center fade-in">
                    <Heading2 size="small" className=" leading-6 text-center" children={estimation.titre} />
                    <Spaces size="xss" />
                    <Heading3 size="small" className="text-center text-themePrimary600" children={estimation.sousTitre1}></Heading3>
                    <div className="text-center texte_class my-4" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                    <Heading3 size="small" className="text-center text-themePrimary600" children={estimation.sousTitre2}></Heading3>
                    <div className="text-center texte_class my-4" dangerouslySetInnerHTML={{ __html: htmlContent2 }}></div>
                </div>

            </div>
        </div>
    );

};