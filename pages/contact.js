// Contact Page

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

// Import Hankyo API client functions
import { fetchProjectData, fetchSectionData } from "../lib/HankyoClient"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function Contact({ projectData, sectionData }) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({ uid }) => uid === "97jSqZqqUvzZmFeZH3rPXSa3")
  const global_email = projectData.project.global_attributes.find(({ name }) => name === "email")
  const social_networks = projectData.project.social_networks

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
              <h1 className="header-size-display">{hero.title}</h1>
            </div>
            <div className="hero-column">
              <p className="font-weight-700">{hero.description}</p>
              <hr className="separator-xxl" />
              <p className="font-size-xs">Email:</p>
              <p className="font-size-s font-weight-900">{global_email.value}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "9tbaxmgFMVHCNBQv1FNyxbph"
  // Fetch project data and section data
  const projectData = await fetchProjectData()
  const sectionData = await fetchSectionData(sectionUID)

  return {
    props: {
      projectData,
      sectionData,
    },
  }
}
