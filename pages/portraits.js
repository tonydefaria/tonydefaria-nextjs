// Portraits Page

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"
import Image from "next/image"

// Import Hankyo API client functions
import { fetchProjectData, fetchSectionData } from "../lib/HankyoClient"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function Portraits({ projectData, sectionData }) {
  // Props
  const project = projectData.project
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({ uid }) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")
  const images = sectionData.section.blocks.filter((image) => image.type_of === "image")

  // Effect
  useEffect(() => {
    let getImages = document.querySelectorAll("img.portraits-orientation")
    getImages.forEach(function (elem) {
      const grandParent = elem.parentNode.parentNode.parentNode
      if (elem.naturalWidth > elem.naturalHeight) {
        grandParent.classList.add("landscape")
      } else if (elem.naturalWidth < elem.naturalHeight) {
        grandParent.classList.add("portrait")
      } else {
        grandParent.classList.add("square")
      }
    })
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
            </div>
          </div>
        </div>

        <div className="portraits">
          <div className="portraits-box">
            {/* Portraits */}
            {images.map((image, index) => {
              let setPriority
              if (index <= 2) {
                setPriority = true
              } else {
                setPriority = false
              }

              let setAlignment
              if (image.align === "left") {
                setAlignment = "float-left"
              } else if (image.align === "center") {
                setAlignment = "flex-h-center"
              } else if (image.align === "right") {
                setAlignment = "float-right"
              }

              return (
                <div className={`portraits-row ${setAlignment}`} key={image.uid}>
                  <div className={`portraits-item`}>
                    <figure>
                      <picture>
                        <Image
                          src={image.image}
                          width={image.width}
                          height={image.height}
                          quality={75}
                          priority={setPriority}
                          sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
                          alt={`Tony de Faria - Portrait - ${image.uid}`}
                          title="Tony de Faria"
                          className="portraits-orientation"
                        />
                      </picture>
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE"
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
