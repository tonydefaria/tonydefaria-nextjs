// Portraits Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// https://www.lightgalleryjs.com/docs/settings/#dynamic

// Import built-in Next.js components and libraries
import React, { useEffect, useState } from "react"; // Import React and useState here
import Image from "next/image";
import Lightbox from "../components/lightbox"; // Adjust the path as needed
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";
import MetaComponent from "../components/meta_component";
import Layout from "../layouts/primary";


export default function Portraits({ project, section, sectionMeta, sectionHero, sectionImages }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <Layout project={project}>
      {/* ... your existing code ... */}

      <div className="portraits">
        <div className="portraits-box">
          {/* Portraits */}
          {sectionImages.map((image, index) => {
            // ... your existing code ...

            return (
              <div className={`portraits-row`} key={image.uid}>
                <div className={`portraits-item ${image.orientation}`}>
                  <figure>
                    {/* Render the thumbnail image */}
                    {/* ... your existing code ... */}
                    <picture>
                      <Image
                        src={image.image}
                        width={image.width}
                        height={image.height}
                        quality={75}
                        sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
                        alt={`Tony de Faria - Portrait - ${image.uid}`}
                        title="Tony de Faria"
                        className={`${image.orientation}`}
                        onClick={() => openLightbox(index)}
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Render the Lightbox component if lightboxIndex is not null */}
      {lightboxIndex !== null && (
        <Lightbox
          images={sectionImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </Layout>
  );
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
