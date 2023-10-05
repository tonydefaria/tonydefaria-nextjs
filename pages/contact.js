// Contact Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";

// Import custom components
import MetaComponent from "../components/meta_component";

// Import the layout
import Layout from "../layouts/primary"

export default function Contact({project, projectEmail, section, sectionMeta, sectionHero}) {
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
              <hr className="separator-xxl" />
              <p className="font-size-xs">Email:</p>
              <p className="font-size-s font-weight-900">{projectEmail.value}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Set the section UID
  const sectionUID = "9tbaxmgFMVHCNBQv1FNyxbph";

  try {
    // Fetch project data and section data
    const projectData = await fetchProject();
    const sectionData = await fetchSection(sectionUID);
    const project = projectData.project;
    const section = sectionData.section;

    // Project attributes & blocks
    const projectEmail = project.global_attributes.find(({ name }) => name === "email")

    // Section attributes & blocks
    const sectionMeta = section.metadata;
    const sectionHero = section.blocks.find(({ uid }) => uid === "97jSqZqqUvzZmFeZH3rPXSa3");

    // Return the options as props
    return {
      props: {
        project,
        projectEmail,
        section,
        sectionMeta,
        sectionHero,
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
