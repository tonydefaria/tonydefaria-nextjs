// About Page

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";

// Import custom components
import MetaComponent from "../components/meta_component"

// Block Components
import TextBlockComponent from "../components/blocks/text_block_component"
import ImageBlockComponent from "../components/blocks/image_block_component"

// Import the layout
import Layout from "../layouts/primary"

export default function About({ projectData, sectionData }) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({ uid }) => uid === "3DucbePbPn3BEjxpK3Ad1dd3")

  const blocks = sectionData.section.blocks
  // Filter out hero and gallery blocks
  const filterBlocks = blocks.filter(({ type_of }) => type_of !== "hero" && type_of !== "gallery")

  // Effect
  // useEffect(() => {
  // Any side effects can be added here
  // }, [])

  return (
    <Layout projectData={projectData}>
      <div className="page">
        {/* Meta */}
        <MetaComponent project={project} meta={meta} />

        {/* Hero */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-display">{hero.title}</h1>
            </div>
            <div className="hero-column">
              <p className="font-size-m font-weight-700">{hero.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content writer">
          <div className="content-box">
            {/* Blocks */}
            {filterBlocks.map((block, index) => {
              // Determine alignment class
              let setAlignment
              if (block.align === "left") {
                setAlignment = "float-left"
              } else if (block.align === "center") {
                setAlignment = "flex-h-center"
              } else if (block.align === "right") {
                setAlignment = "float-right"
              }

              // Set the block component based on its type
              let setBlock
              if (block.type_of === "text") {
                setBlock = <TextBlockComponent block={block} setAlignment={setAlignment} />
              } else if (block.type_of === "image") {
                setBlock = <ImageBlockComponent block={block} />
              }

              return (
                <div key={block.uid} className="content-row writer-box">
                  <div className={`content-inner ${setAlignment}`}>
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

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "3wbtGjsGzz9NqxySJBumk6fT"

  // Fetch project data and section data
  const projectData = await fetchProject()
  const sectionData = await fetchSection(sectionUID)

  return {
    props: {
      projectData,
      sectionData,
    }
  }
}
