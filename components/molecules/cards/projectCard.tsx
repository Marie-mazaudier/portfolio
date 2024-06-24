import React, { useEffect, useState } from "react";
import { Placeholder } from "../../atoms/placeholder/Placeholder";
import { BodyText } from "../../atoms/typography/bodyText/BodyText";
import { Heading3 } from "../../atoms/typography/headingText/heading3";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import * as DOMPurify from 'dompurify';
import { formatDateFR } from "@/lib/utils/dateUtils";

export type projectCardProps = {
  data?: {
    id?: number;
    title?: string;
    slug?: string;
    excerpt?: any;
    featuredmedia?: {
      sourceUrl?: string;
      alt?: string;
    };
    categories?: {
      nodes: { name: string; slug: string }[];
    };
    date?: string;
  };
  image?: {
    mediaItemUrl?: string;
    altText?: string;
  };
  date?: string;
};
export const ProjectCard = ({ data, image, date }: projectCardProps) => {
  //console.log('data', data)
  //const publishDateFR = formatDateFR(data?.date ?? '');
  const contentWithStyle = data?.excerpt?.replace(/<p>/g, "<p/>");
  const contentWithoutHtml = contentWithStyle?.replace(/(<([^>]+)>)/gi, "");
  const contentWithoutHtmlAndLimit = contentWithoutHtml?.slice(0, 375);
  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    // Mettre à jour le contenu HTML ici si nécessaire
    setHtmlContent(DOMPurify.sanitize(contentWithoutHtmlAndLimit))

  }, [contentWithoutHtmlAndLimit]);

  return (
    <div className="p-6 h-full ">
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          {image?.mediaItemUrl ? (
            <Placeholder
              className="shadow-md rounded-md"
              src={image.mediaItemUrl}
              alt={image.altText}
              imageWidth={607}
              imageHeight={788}
              objectFit="cover"
            />
          ) : (
            <Skeleton height={286} />
          )}
        </div>
      </div>
      {data?.title ? (
        <Link href={`/${data?.slug}`}>
          <Heading3
            intent="medium"
            className="small transition hover:duration-700 leading-5"
            size="xs"
          >
            {data.title}
          </Heading3>
        </Link>
      ) : (
        <Skeleton height={30} />
      )}
        <div className="flex justify-between flex-wrap gap-2  left-3">
            {/*<BodyText className="mt-4" intent="regular">{publishDateFR}</BodyText>*/}
            {data?.categories?.nodes && data?.categories?.nodes.map((category: { name: string; slug: string }, index: number) => (
              <Link href={`/category/${category.slug}`} key={index}>
                <BodyText
                  size="sm"
                  intent="medium"
                  className="text-white rounded-lg bg-themeRgbaColorTwo border px-2 py-1 w-fit"
                >
                  {category.name}
                </BodyText>
              </Link>
            ))}
        </div>
      {data?.excerpt ? (
        <BodyText size="md" className="text-themeGray mt-2.5 line-clamp-2">
          <span
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          ></span>
        </BodyText>
      ) : (
        <Skeleton height={40} />
      )}
    </div>
  );
};
