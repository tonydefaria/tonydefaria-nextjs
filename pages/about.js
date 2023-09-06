// About Page

// Built-in Components
import React, { useContext, useState, useEffect } from "react"

// Components
import MetaComponent from "../components/meta_component"

// Block Components
import TextBlockComponent from "../components/blocks/text_block_component"
import ImageBlockComponent from "../components/blocks/image_block_component"

// Layout
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
  )
}

// Fetch project and section data
export async function getStaticProps() {
  // API Endpoint
  const apiUrl = "https://hankyo-api-pro.herokuapp.com"
  const projectToken = "ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"
  const sectionUID = "3wbtGjsGzz9NqxySJBumk6fT"

  try {
    // Fetch project data
    const projectReq = await fetch(`${apiUrl}/mies/project?project_token=${projectToken}`)
    const projectData = await projectReq.json()

    // Fetch section data
    const sectionReq = await fetch(`${apiUrl}/mies/project/sections/${sectionUID}?project_token=${projectToken}`)
    const sectionData = await sectionReq.json()

    if (!projectData) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }

    return {
      props: {
        projectData,
        sectionData,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)

    return {
      props: {
        projectData: null,
        sectionData: null,
      },
    }
  }
}

// Attach layout to the page
About.Layout = Layout
