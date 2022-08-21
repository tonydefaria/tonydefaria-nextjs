// About

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/future/image"

import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function About({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "3DucbePbPn3BEjxpK3Ad1dd3")

  const blocks = sectionData.section.blocks
  const filterBlocks = blocks.filter(({type_of}) => type_of !== ("hero" || "gallery"))

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
            <p className="font-weight-700 grey-900-cl">{hero.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content writer">
        <div className="content-box">
          <div className={`content-row`}>
            {/* Blocks */}
            {filterBlocks.map((block, index) => {
              let setBlock
              if (block.type_of === "text") {
                setBlock =
                  parse(sanitizeHtml(block.text));
              } else if (block.type_of === "image") {
                setBlock =
                  <figure>
                    <picture>
                      <Image
                        src={block.image}
                        width={block.width}
                        height={block.height}
                        quality={100}
                        alt={`Tony de Faria - Portrait - ${block.uid}`}
                        title="Tony de Faria"
                        priority="true"
                        sizes="(max-width: 959px) 75vw, (min-width: 960px) 50vw, 100vw"
                      />
                    </picture>
                    <figcaption>{block.caption}</figcaption>
                  </figure>
              }
              return (
                <div key={block.uid} className={`content-inner float-right`}>
                  {setBlock}
                </div>
              )
            })}
          </div>
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
