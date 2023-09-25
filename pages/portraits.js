// Portraits Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import Image from "next/image"

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";

// Import custom components
import MetaComponent from "../components/meta_component";

// Import the layout
import Layout from "../layouts/primary";

export default function Portraits({project, section, sectionMeta, sectionHero, sectionImages}) {
  return (
    <Layout project={project}>
      <div className="page">
        {/* Meta */}
        <MetaComponent project={project} meta={sectionMeta} />

        {/* Hero */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-display">{sectionHero.title}</h1>
            </div>
            <div className="hero-column">
              <p className="font-weight-700">{sectionHero.description}</p>
            </div>
          </div>
        </div>

        <div className="portraits">
          <div className="portraits-box">
            {/* Portraits */}
            {sectionImages.map((image, index) => {
              let setPriority
              if (index <= 2) {
                setPriority = true
              } else {
                setPriority = false
              }

              let setAlignment
              if (image.align === "left") {
                setAlignment = "float-left"
              } else if (image.align === "center") {
                setAlignment = "flex-h-center"
              } else if (image.align === "right") {
                setAlignment = "float-right"
              }

              return (
                <div className={`portraits-row ${setAlignment}`} key={image.uid}>
                  <div className={`portraits-item ${image.image_orientation}`}>
                    <figure>
                      <picture>
                        <Image
                          src={image.image}
                          width={image.image_width}
                          height={image.image_height}
                          quality={75}
                          priority={setPriority}
                          sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
                          alt={`Tony de Faria - Portrait - ${image.uid}`}
                          title="Tony de Faria"
                          className={`${image.image_orientation}`}
                        />
                      </picture>
                      <figcaption>{image.caption}</figcaption>
                    </figure>
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
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE";

  try {
    // Fetch project data and section data
    const projectData = await fetchProject();
    const sectionData = await fetchSection(sectionUID);
    const project = projectData.project;
    const section = sectionData.section;

    // Section attributes & blocks
    const sectionMeta = section.meta_tag;
    const sectionHero = section.blocks.find(({ uid }) => uid === "sHhk1Za3CSKpThi2X8eYDo1z");
    const sectionImages = section.blocks.filter((image) => image.type_of === "image")

    return {
      props: {
        project,
        section,
        sectionMeta,
        sectionHero,
        sectionImages,
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
