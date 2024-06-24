import Head from "next/head"; // Correct import
import { Banner } from "@/components/organism/banner/Banner";
import Projects from "@/templates/sections/projects";
import { Spaces } from "@/atoms/space/Spaces";
import client from "@/lib/apolloClient";
import { LAST_WORKS_QUERY } from "@/graphQL/projets/lastWorks";
import { GetLastWorksQuery } from "@/graphQL/types/lastWorks";

interface HomeProps {
  recentWorks: GetLastWorksQuery[];
}

  export default function Home({recentWorks }: HomeProps) {

  return (
    <div>
       <Head>
        <title> Home | Portfolio</title>
        <meta name="description" content="Home page description" />
      </Head>
      <main className="p-4 bg-BgLightVariant">
        <Banner  
        titre="Développeuse Web Front-End.
         Lorem ipsum dolor iset." 
        description="Développeuse Web Front-End"  
        image={{
            node: {
              mediaItemUrl: "/Marie_photo.jpg", // URL of the image
              altText: "Portrait de Marie Mazaudier" // Optional alternative text
            }
          }}
          defaultFontFamily="font-barlow-semibold" // Utilisation de la variante Barlow Medium
          />
          <Spaces size="lg"/>
        <Projects recentWorks={recentWorks} />
      </main>
    </div>
  );
};


// Générer les données via SSG
export async function getStaticProps() {
  const { data } = await client.query({
    query: LAST_WORKS_QUERY
  });
  console.log(data.projets.nodes)
    return {
    props: {
      recentWorks: data.projets.nodes
    },
    revalidate: 1 // Revalide toutes les 3 heures
  };
}