// Portraits

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import Image from "next/future/image"

// Components
import MetaComponent from "../components/meta_component"

// Layout
import Layout from "../layouts/primary"

export default function Portraits({projectData, sectionData}) {
  // Props
  const meta = sectionData.section.meta_tag
  const hero = sectionData.section.blocks.find(({uid}) => uid === "sHhk1Za3CSKpThi2X8eYDo1z")
  const images = sectionData.section.blocks.filter(image => image.type_of === "image")

  // Effect
  useEffect(() => {
  }, [])

  return (
    <Layout>
      {/* Meta */}
      <MetaComponent projectData={projectData} meta={meta} />

      {/* Portraits */}
      {images.map((image, index) => {

        let setPriority
        if (index <= 2) {
          setPriority = true
        } else {
          setPriority = false
        }

        return (
          <div key={image.uid}>
            <div>
              <figure>
                <picture>
                  <Image
                    src={image.image}
                    width={image.width}
                    height={image.height}
                    quality={75}
                    priority={setPriority}
                    sizes="(max-width: 959px) 75vw, (min-width: 960px) 50vw, 100vw"
                    alt={`Tony de Faria - Portrait - ${image.uid}`}
                    title="Tony de Faria"
                  />
                </picture>
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
              </figure>
            </div>
          </div>
        )
      })}
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
  const sectionUID = "ETawPaEzkHn3LqmnoZNkH7JE"
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
