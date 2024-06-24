import React from "react";
import { Button } from "@/atoms/button/Button";
import { ProjectCard } from "@/molecules/cards/projectCard";
//import { PostNode } from "src/types/blogCardTypes";
import { Heading2 } from "@/atoms/typography/headingText/Heading2";
import { GetLastWorksQuery } from "@/graphQL/types/lastWorks";


interface selectedWorkProps {
   // posts: PostNode[]; //  tableau de produits
   recentWorks: GetLastWorksQuery[];
}

export const SelectedWork = ({ recentWorks }: selectedWorkProps) => {
    //   console.log('LastPosts', posts)
    return (
        <section className="container mx-auto mb-14 lg:mb-24 px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7 col-span-12 lg:col-span-8 h-fit">
                {recentWorks.map((recentWork, index) => (
                    <ProjectCard
                        key={index}
                        data={{
                            title: recentWork.title,
                            slug: recentWork.slug,
                            excerpt: recentWork.excerpt,
                            // publishTime: recentWork.date,
                            typeDeProjets: recentWork.typeDeProjets.nodes.map(node => ({
                                name: recentWork.name,
                                slug: recentWork.slug,
                            })),
                        }}
                        image={{
                            mediaItemUrl: recentWork.featuredImage?.node?.mediaItemUrl,
                            altText: recentWork.featuredImage?.node?.altText,
                        }}
                    />

                ))}
            </div>
        </section>
    );
};