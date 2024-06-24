import React, { useEffect, useState } from "react";
import { Spaces } from "@/atoms/space/Spaces";
import * as DOMPurify from 'dompurify';
import { Heading1 } from "@/atoms/typography/headingText/heading1";
import {Heading2} from "@/atoms/typography/headingText/Heading2";
import { Placeholder } from "@/atoms/placeholder/Placeholder";
interface BlocDeuxColonnesProps {
    titre?: string;
    sousTitre?: string;
    description: string;
    image: {
        node: {
            mediaItemUrl: string;
            altText?: string;
        };
    };
    imagePosition?: 'left' | 'right';
}

export const BlocDeuxColonnes: React.FC<BlocDeuxColonnesProps> = ({ titre, sousTitre, description, image, imagePosition = 'right' }) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        setHtmlContent(DOMPurify.sanitize(description));
    }, [description]);

    const words = titre?.split(" ") || [];

    return (
        <div className="container-fluid">
            <div className={`flex ${imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col h-full justify-between items-center mx-auto gap-5 md:gap-20 px-10 lg:px-28 2xl:px-40`}>
                <div className="lg:w-3/5 h-full flex flex-col justify-center fade-in">
                    {words.length > 0 && (
                        <>
                            <Heading1 size="extraLarge" intent="semibold" className="text-left font-medium">
                                <span className="font-medium text-themePrimary600 text-2xl">{words[0]}</span><br />
                                {words.slice(1).join(" ")}
                            </Heading1>
                            <Spaces size="xss" />
                            <div className="border-principal lg:w-1/3"></div>
                        </>
                    )}
                    <Spaces size="xss" />
                    <Heading2 size="small" className="text-left leading-6">
                        {sousTitre}
                    </Heading2>
                    <p className="text-left texte_class my-8" dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                </div>
                <div className="lg:w-2/5 flex px-0 items-center justify-center h-full">
                    <Placeholder
                        className="fade-in"
                        src={image.node.mediaItemUrl}
                        imageWidth={550}
                        imageHeight={550}
                        alt={image.node.altText}
                        objectFit={"contain"}
                    />
                </div>
            </div>
        </div>
    );
};
