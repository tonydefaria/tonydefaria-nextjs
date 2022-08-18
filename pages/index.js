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
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  // Effect
  useEffect(() => {
  }, [])

  return (
    <Layout>
      {/* Meta */}
      <MetaComponent projectData={projectData} meta={meta} />

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <div className="hero-column">
          </div>
          <div className="hero-column">
          </div>
        </div>
      </div>
    </Layout>
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
