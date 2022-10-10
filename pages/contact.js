// Contact

// Built-in Components
import React, { useContext, useState, useEffect } from "react"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function Contact({projectData, sectionData}) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "97jSqZqqUvzZmFeZH3rPXSa3")
  const global_email = projectData.project.global_attributes.find(({name}) => name === "email")
  const social_networks = projectData.project.social_networks

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
          <div className="hero-column">
            <h1>{hero.title}</h1>
            <hr className="separator-xl" />
            <p className="font-weight-700">{hero.description}</p>
            <hr className="separator-xxl" />
            <p className="font-size-xs">Email:</p>
            <p className="font-size-s font-weight-900">{global_email.value}</p>
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
  const sectionUID = "9tbaxmgFMVHCNBQv1FNyxbph"
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

Contact.Layout = Layout
