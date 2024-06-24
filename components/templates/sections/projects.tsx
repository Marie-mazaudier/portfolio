// projects.tsx
import React from "react";
import { Heading2 } from "@/atoms/typography/headingText/Heading2";
import { Placeholder } from "@/atoms/placeholder/Placeholder";
import { BodyText } from "@/atoms/typography/bodyText/BodyText";
import { HorizontalLine } from "@/atoms/line/HorizontalLine";
import { SelectedWork } from "@/components/organism/sections/selectedWork";
interface projectsProps {
    titre?: string;
    description?: string;
    image?: string | {
        node: {
            mediaItemUrl: string;
            altText?: string;
        };
    };
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'center' | 'flex-end';
    recentWorks: any[];  // Typez correctement selon les types générés
}
export const Projects: React.FC<projectsProps> = ({recentWorks, titre,description, horizontalAlign = 'center', verticalAlign = 'middle'}) => {
    //const getImageUrl = () => typeof image === 'string' ? image : image?.node.mediaItemUrl;
    //const getImageAlt = () => typeof image === 'string' ? "" : image?.node.altText;
  return (
    <div className="container-fluid">
         <div className="div flex justify-end gap-6">
         <div className="div">         
            <Heading2 size="extraLarge" intent="medium" className=" text-primary text-right tracking-wide">Projets </Heading2>
         </div>
         <div className="div flex flex-col justify-center w-[18%]">         
         <HorizontalLine thickness="2px" color="border-primary" />
         </div>
         <div className="div">         
            <Heading2 intent="medium" size="extraLarge" className=" text-primary text-right tracking-wide"> sélectionnés</Heading2>
         </div>
      </div>
        <div className="div px-10 lg:px-28 2xl:px-40">
      <SelectedWork recentWorks={recentWorks}/>

        </div>
      
    </div>
  );
};

export default Projects;
