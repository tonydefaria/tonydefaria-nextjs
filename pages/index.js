// Layout
import Layout from "../layouts/primary"

// Built-in Components
import React, { useEffect } from "react"
import Image from "next/future/image"

// Components
import MetaComponent from "../components/meta_component"

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
      <div className="intro">
        <div className="intro-box">
          <div className="intro-row">
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
