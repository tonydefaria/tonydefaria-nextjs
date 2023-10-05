// Disclaimer Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";

// Import custom components
import MetaComponent from "../components/meta_component";

// Block Components
import TextBlockComponent from "../components/blocks/text_block_component";
import ImageBlockComponent from "../components/blocks/image_block_component";

// Import the layout
import Layout from "../layouts/primary";

export default function Disclaimer({project, section, sectionMeta, sectionHero, sectionBlocks}) {
  return (
    <Layout project={project}>
      <div className="page">
        {/* Meta */}
        <MetaComponent project={project} meta={sectionMeta} />

        {/* Hero */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-xxl">{sectionHero.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content writer">
          <div className="content-box">
            {/* Blocks */}
            {sectionBlocks.map((block, index) => {
              let setBlock
              if (block.type_of === "text") {
                setBlock = <TextBlockComponent block={block} />
              } else if (block.type_of === "image") {
                setBlock = <ImageBlockComponent block={block} />
              }
              return (
                <div key={block.uid} className="content-row writer-box">
                  <div className="float-right">
                    {setBlock}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Set the section UID
  const sectionUID = "M6Gb8e2661hihv9CaWyKDGv5";

  try {
    // Fetch project data and section data
    const projectData = await fetchProject();
    const sectionData = await fetchSection(sectionUID);
    const project = projectData.project;
    const section = sectionData.section;

    // Section attributes & blocks
    const sectionMeta = section.metadata;
    const sectionHero = section.blocks.find(({ uid }) => uid === "Xn6JKBRCG9UuW8WV5XedFtv6");
    const sectionBlocks = section.blocks.filter(({ type_of }) => type_of !== "hero" && type_of !== "gallery");

    return {
      props: {
        project,
        section,
        sectionMeta,
        sectionHero,
        sectionBlocks,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return an empty object or handle the error as needed
    return {
      props: {},
    };
  }
}
