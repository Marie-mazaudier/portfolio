import React from "react";
import { Heading3 } from "@/atoms/typography/headingText/heading3";
import { BodyText } from "@/atoms/typography/bodyText/BodyText";
import { Spaces } from "@/atoms/space/Spaces";


export interface InfosContactProps {
    adresse?: string;
    email?: string;
    horaires?: string;
    telephone?: string;
}
export const InfoContact: React.FC<InfosContactProps> = ({ adresse, email, horaires, telephone }) => {
    /*=============GSAP INITIALISATION===================*/
    // Références pour les éléments que vous souhaitez animer


    return (
        <div className="container-fluid ">
            {/* Section */}
            <div className="flex  max-lg:flex-col h-full lg:justify-start lg:items-start  max-lg:justify-center  max-lg:items-center mx-auto  gap-5 md:gap-0 md:px-2 xl:px-80">
                <div className=" lg:w-1/2 flex  lg:border-r  lg:px-16 flex-col items-center justify-end h-full md:py-8">
                    {/* <MapPin color="black" strokeWidth={0.5} size={20} />*/}
                    <Heading3 className="uppercase text-center" children={'Boutique'} />
                    <Spaces size="xss" />
                    <BodyText size="md" className="text-center" children={adresse} />
                </div>
                <div className=" lg:w-1/2 flex  flex-col  items-center justify-end h-full lg:px-8 md:py-8">
                    { /*<AtSign color="black" strokeWidth={0.5} size={20} />*/}
                    <Heading3 className="uppercase text-center" children={'Nos Coordonnées'} />
                    <Spaces size="xss" />
                    <BodyText size="md" className="text-center" children={email} />
                    <BodyText size="md" className="text-center" children={telephone} />
                </div>
            </div>
        </div>
    );

};