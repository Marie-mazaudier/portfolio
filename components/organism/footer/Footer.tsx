import React from "react";
import { LogoWithText } from "../../atoms/brandLogo/LogoWithText";
import { SocialLink } from "../../atoms/socialLink/Social";
import { BodyText } from "../../atoms/typography/bodyText/BodyText";
import { SocialData } from "./FooterData";
import { FooterSection } from "./FooterSection";

export interface Footerprops {
  QuickLinkData: any;
  AccountData: any;
  SupportData: any;
  addEmailToBrevoList: any;
}

export const Footer = ({ QuickLinkData, AccountData, SupportData, addEmailToBrevoList }: Footerprops) => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-5 md:px-10 lg:px-0">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 md:gap-14 lg:gap-0">
          <div>
            <LogoWithText img='/Logo.png' className="text-white" />
            <BodyText size="sm" intent="medium" className="text-white pt-6">
              {" "}
              ADDRESSE
            </BodyText>
            <BodyText size="sm" className=" text-themeSecondary300">
              {" "}
              3566 Bird Spring Lane, <br /> Houston Texas
            </BodyText>
            <BodyText size="sm" intent="medium" className="text-white pt-6 uppercase">
              {" "}
              TéléPHONE
            </BodyText>
            <BodyText size="sm" className=" text-themeSecondary300">
              {" "}
              +1 423 208 3808
            </BodyText>
            <BodyText size="sm" intent="medium" className="text-white pt-6">
              {" "}
              Email
            </BodyText>
            <BodyText size="sm" className=" text-themeSecondary300 mb-6">
              {" "}
              hello@metashop.com
            </BodyText>
            <SocialLink data={SocialData} />
          </div>
          <div className="hidden lg:block">
            <FooterSection data={QuickLinkData} title="Nos marques" />
          </div>
          <div className="hidden lg:block">
            <FooterSection data={AccountData} title="Mon Compte" />
          </div>
          <div className="flex gap-24 lg:hidden">
            <FooterSection data={QuickLinkData} title="Nos marques" />
            <FooterSection data={AccountData} title="Mon Compte" />
          </div>
          <div>
            <FooterSection data={SupportData} title="Aide & Contact" />
          </div>
          <div className=" w-fit">
           
          </div>
        </div>
        <hr className=" border-themeSecondary800 w-full" />
        <div className="py-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <BodyText size="md" className="text-themeSecondary300">
            &copy; MetaShop 2022. All Rights Reserved
          </BodyText>
        </div>
      </div>
    </footer>
  );
};
