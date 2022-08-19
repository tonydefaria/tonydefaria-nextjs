// Index

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/future/image"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function Index({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  return (
    <div className="page" id="top">
      {/* Meta */}
      <MetaComponent project={project} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="header-size-xxl text-align-center">{hero.title}</h1>
          </div>
          <div className="hero-row">
            <figure>
              <picture>
                <Image
                  src={hero.image}
                  width={hero.width}
                  height={hero.height}
                  quality={75}
                  priority="true"
                  sizes="(max-width: 959px) 75vw, (min-width: 960px) 50vw, 100vw"
                  alt={`Tony de Faria - Home - ${hero.uid}`}
                  title="Tony de Faria"
                />
              </picture>
            </figure>
          </div>
          <div className="hero-row">
            <p className="text-align-center">{hero.subtitle}</p>
          </div>
          <div className="hero-row flex-h-center">
            <Link href="/about"><a className="button-s button-grey-blue">{hero.cta_label}</a></Link>
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
