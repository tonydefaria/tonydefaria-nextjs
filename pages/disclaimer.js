// Disclaimer Page

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../lib/hankyoClient"

// Components
import MetaComponent from "../components/meta_component"

// Block Components
import TextBlockComponent from "../components/blocks/text_block_component"
import ImageBlockComponent from "../components/blocks/image_block_component"

// Layout
import Layout from "../layouts/primary"

export default function Disclaimer({ projectData, sectionData }) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({ uid }) => uid === "Xn6JKBRCG9UuW8WV5XedFtv6")

  const blocks = sectionData.section.blocks
  const filterBlocks = blocks.filter(({ type_of }) => type_of !== "hero" && type_of !== "gallery")

  // Effect
  useEffect(() => {
    // Any side effects can be added here
  }, [])

  return (
    <Layout projectData={projectData}>
      <div className="page">
        {/* Meta */}
        <MetaComponent project={project} meta={meta} />

        {/* Hero */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-xxl">{hero.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content writer">
          <div className="content-box">
            {/* Blocks */}
            {filterBlocks.map((block, index) => {
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

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "M6Gb8e2661hihv9CaWyKDGv5"
  // Fetch project data and section data
  const projectData = await fetchProject()
  const sectionData = await fetchSection(sectionUID)

  return {
    props: {
      projectData,
      sectionData,
    },
  }
}
