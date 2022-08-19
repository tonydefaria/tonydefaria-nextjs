// Index

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
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

  const setHeroColumnHeight = () => {
    const classExists = document.getElementsByClassName("get-hero-column").length > 0
    if (classExists) {
      const getColumnHeight = document.querySelector(".get-hero-column").clientHeight
      const setColumnHeight = document.querySelector(".set-hero-column")
      if (window.innerWidth > 959) {
        setColumnHeight.style.height = getColumnHeight + "px"
      } else {
        setColumnHeight.style.height = "auto"
      }
    }
  }

  // Effect
  useEffect(() => {
    setHeroColumnHeight()
    window.addEventListener("load", setHeroColumnHeight)
    window.addEventListener("resize", setHeroColumnHeight)
  }, [])

  return (
    <div className="page">
      {/* Meta */}
      <MetaComponent project={project} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-column get-hero-column">
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
          <div className="hero-column set-hero-column">
            <h1>{hero.title}</h1>
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
