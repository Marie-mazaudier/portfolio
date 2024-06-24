import React, { useEffect, useState } from "react";
import * as DOMPurify from 'dompurify';
import { Heading1 } from "@/atoms/typography/headingText/heading1";
import { BodyText } from "@/atoms/typography/bodyText/BodyText";
import CircularText from "@/atoms/typography/circularText/CircularText";
import { Placeholder } from "@/atoms/placeholder/Placeholder";
import TechnologySection from "@/components/organism/sections/TechnologySection";

interface BannerProps {
    titre?: string;
    description: string;
    image: string | {
        node: {
            mediaItemUrl: string;
            altText?: string;
        };
    };
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'flex-start' | 'center' | 'flex-end';
    defaultFontFamily?: string; // Défaut à 'font-barlow'
}

export const Banner: React.FC<BannerProps> = ({
    titre,
    description,
    image,
    horizontalAlign = 'center',
    verticalAlign = 'flex-end',
    defaultFontFamily = 'font-barlow',
}) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        setHtmlContent(DOMPurify.sanitize(description));
    }, [description]);
    const getImageUrl = () => typeof image === 'string' ? image : image.node.mediaItemUrl;
    const getImageAlt = () => typeof image === 'string' ? "" : image.node.altText;
    return (
        <div className="container-fluid h-screen flex flex-col justify-center">
            <div className="flex flex-row h-[60vh] items-center mx-auto gap-20 md:gap-32 px-10 lg:px-28 2xl:px-40">
                <div className="w-2/3 flex h-full flex-col justify-center pr-[17%]"> {/* Padding right ajouté ici */}
                    {titre && (
                        <Heading1 size="large" intent="thin" leading="loose" className={`text-primary text-left ${defaultFontFamily}`}>
                            Développeuse Web <br/> Full Stack
                        </Heading1>
                    )}
                    <BodyText className="mt-8 mb-4 text-primary">
                        an electrical and electronics engineer who loves doodling. I started doodling for fun on notebooks during boring lectures, which evolved into an interest in graphic design as I began working with Photoshop and Illustrator. Over the years, my doodling canvas has expanded from notebooks to walls, shoes, speakers, and the digital domain. I started building digital narratives with Greenisis, one of my very first projects, which peaked my interest in web design and development. Currently, I am working as a UI developer at Skellam AI, Banglore.
                        <br/><br/>
                        
                    </BodyText>
                        <TechnologySection />
                </div>
                <div className="w-1/3 h-full flex flex-col justify-end ">
               {/* <Placeholder
                        className="fade-in mt-10"
                        src={getImageUrl()}
                        imageWidth={150}
                        imageHeight={150}
                        alt={getImageAlt()}
                        objectFit="cover"
                        horizontalAlign="left"
                        verticalAlign={verticalAlign}
                        borderRadius="pill" // Utilisez 'round' pour moins de rondeur ou 'pill' pour complet
                    />*/}
                              
                    <BodyText className="uppercase mt-5 text-primary">Développement web, API<br/>Intégration graphique<br/>Javascript, Tailwind, Next.JS</BodyText>
                
                    <div className="flex justify-start mt-8 items-center w-full h-[150px]">
                        <CircularText text="Marie Mazaudier →" radius={28} />
                    </div>   
                </div>
            </div>
        </div>
    );
};
