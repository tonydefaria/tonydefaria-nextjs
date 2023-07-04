// Index

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/landing"

export default function Index({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  // Cabin Events
  const trackCTACabin = () => { window.cabin.event("Landing Page CTA") }

  return (
    <div className="page" id="top">
      {/* Meta */}
      <MetaComponent project={project} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <figure>
              <picture>
                <Image
                  src={hero.image}
                  width={hero.width}
                  height={hero.height}
                  quality={75}
                  priority="true"
                  sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
                  alt={`Tony de Faria - Home - ${hero.uid}`}
                  title="Tony de Faria"
                />
              </picture>
              <figcaption>{hero.caption}</figcaption>
            </figure>
          </div>
          <div className="hero-row">
            <h1 className="header-size-display text-align-center">{hero.title}</h1>
          </div>
          <div className="hero-row">
            <p className="font-weight-700 text-align-center">{hero.description}</p>
            <hr className="separator-s" />
            <div className="width-wide flex-h-center">
              <Link href="/about" className="link-s underline link-blue-black" onClick={() => { trackCTACabin(); }}>{hero.cta_label}</Link>
            </div>
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
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz"
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

Index.Layout = Layout
