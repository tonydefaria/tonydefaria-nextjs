// Layout
import Primary from "../layouts/primary"

// Built-in Components
import Image from "next/future/image"

export default function Index({sectionData}) {
  // Props
  const hero = sectionData.section.blocks.find(({uid}) => uid === "wqq2dxdWkWsqRwjWAbiCEpbx")

  return (
    <div>
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
    </div>
  )
}

export async function getStaticProps() {
  // Hankyo Endpoint
  const url = "https://hankyo-api-pro.herokuapp.com"
  const token = "?hankyo_token=ZjiAAoU4XpdbuFqLqGTZPR1VmfucM7ya62TV2Dej3DUGMsAG"

  // Project
  const projectReq = await fetch(`${url}/mies/project${token}`)
  const projectData = await projectReq.json()

  // Section
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz"
  const sectionReq = await fetch(`${url}/mies/project/sections/${sectionUID}${token}`)
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

Index.Layout = Primary
