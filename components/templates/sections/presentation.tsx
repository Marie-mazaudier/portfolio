// ExampleParentComponent.tsx
import React from "react";
import TwoColumnBlock from "@/components/organism/columns/TwoColumnBloc";
import { Heading1 } from "@/atoms/typography/headingText/heading1";
import { Placeholder } from "@/atoms/placeholder/Placeholder";
import { BodyText } from "@/atoms/typography/bodyText/BodyText";
import TechnologySection from "@/components/organism/sections/TechnologySection";
interface PresentationProps {
    titre?: string;
    description: string;
    image: string | {
        node: {
            mediaItemUrl: string;
            altText?: string;
        };
    };
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'middle' | 'bottom';
}
export const Presentation: React.FC<PresentationProps> = ({titre,description,image, horizontalAlign = 'center', verticalAlign = 'middle'}) => {
    
    const getImageUrl = () => typeof image === 'string' ? image : image.node.mediaItemUrl;
    const getImageAlt = () => typeof image === 'string' ? "" : image.node.altText;
  return (
    <div className="container-fluid bg-primary h-screen  ">
        <TechnologySection/>
      {/*<TwoColumnBlock
        leftContent={
          <>
            <Heading1 className=" text-secondary" size="extraLarge">Left Column</Heading1>
            <BodyText>Content for the left column.</BodyText>
          </>
        }
        rightContent={
            <>
       
            <Heading1 className=" text-secondary" size="extraLarge">Left Column</Heading1>
            <BodyText>Content for the left column.</BodyText>
          </>
        }
        leftSize="1/2"
        rightSize="1/2"
        leftAlignItems="center"  // Verticalement centré
        rightAlignItems="center"  // Verticalement au début
        leftJustifyContent="center"  // Horizontalement centré
        rightJustifyContent="center"  // Horizontalement à la fin
        height="h-screen" // Hauteur du bloc à la hauteur de l'écran

      />*/}
    </div>
  );
};

export default Presentation;
