// About

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/future/image"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function About({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "3DucbePbPn3BEjxpK3Ad1dd3")
  const textBlocks = sectionData.section.blocks.filter(textBlock => textBlock.type_of === "text")

  // Effect
  useEffect(() => {
  }, [])

  return (
    <div className="page">
      {/* Meta */}
      <MetaComponent project={project} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-column writer">
            <h1>{hero.title}</h1>
            <p className="font-weight-400">{hero.description}</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="content writer">
        <div className="content-box">
          {/* Text Blocks */}
          {textBlocks.map((textBlock, index) => {
            return (
              <div key={textBlock.uid} className={`content-row`}>
                <div className={`content-inner float-right`}>
                  <div dangerouslySetInnerHTML={{ __html: textBlock.text }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Endpoint
  const url = "https://hankyo-api-pro.herokuapp.com"

  // Project
  const projectToken = "ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"
  const projectReq = await fetch(`${url}/mies/project?project_token=${projectToken}`)
  const projectData = await projectReq.json()

  // Section
  const sectionUID = "3wbtGjsGzz9NqxySJBumk6fT"
  const sectionReq = await fetch(`${url}/mies/project/sections/${sectionUID}?project_token=${projectToken}`)
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
      sectionData
    }
  }
}

About.Layout = Layout
