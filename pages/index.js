// Index Page

// Import built-in Next.js components and libraries
import React from "react"
import Link from "next/link"
import Image from "next/image"

// Import Hankyo API client functions
import { fetchProjectData, fetchSectionData } from "../lib/HankyoClient"

// Import custom components
import MetaComponent from "../components/meta_component"

// Import the layout
import Layout from "../layouts/landing"

export default function Index({ projectData, sectionData }) {
  // Extract project data and section data from props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({ uid }) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  // Function to track Cabin events
  const trackCTACabin = () => {
    window.cabin.event("Landing Page CTA")
  }

  return (
    <Layout projectData={projectData}>
      <div className="page" id="top">
        {/* Meta information */}
        <MetaComponent project={project} meta={meta} />

        {/* Hero section */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-display text-align-center">{hero.title}</h1>
            </div>
            <div className="hero-row flex-h-center">
              <div className="width-with-max">
                <p className="font-weight-700 text-align-center">{hero.description}</p>
                <hr className="separator-s" />
                <div className="width-wide flex-h-center">
                  {/* Link to About page with Cabin event tracking */}
                  <Link href="/about" className="link-s underline link-blue-black" onClick={trackCTACabin}>
                    {hero.cta_label}
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-row">
              <figure>
                <picture>
                  {/* Hero image */}
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
                {/* Hero image caption */}
                <figcaption>{hero.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz"
  // Fetch project data and section data
  const projectData = await fetchProjectData()
  const sectionData = await fetchSectionData(sectionUID)

  return {
    props: {
      projectData,
      sectionData,
    }
  }
}
