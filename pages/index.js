// Index

// Import built-in Next.js components and libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import Hankyo API client functions
import { fetchProject, fetchSection } from "../hankyo/hankyo_client";
import { extractData } from "../hankyo/hankyo_utils";

// Import custom components
import MetaComponent from "../components/meta_component";

// Import the layout
import Layout from "../layouts/landing";

export default function Index({ projectData, sectionData, sectionHeroBlocks }) {
  // Access individual section heroes by UID
  const sectionHero = sectionHeroBlocks["wqq2dxdWkWsqRwjWAbiCEpbx"];

  // Function to track Cabin events
  const trackCTACabin = () => {
    window.cabin.event("Landing Page CTA");
  };

  return (
    <Layout projectData={projectData}>
      <div className="page" id="top">
        {/* Meta information */}
        <MetaComponent project={projectData.project} meta={sectionData.section.meta_tag} />

        {/* Hero section */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-row">
              <h1 className="header-size-display text-align-center">
                {sectionHero.title}
              </h1>
            </div>
            <div className="hero-row flex-h-center">
              <div className="width-with-max">
                <p className="font-weight-700 text-align-center">
                  {sectionHero.description}
                </p>
                <hr className="separator-s" />
                <div className="width-wide flex-h-center">
                  {/* Link to About page with Cabin event tracking */}
                  <Link
                    href="/about"
                    className="link-s underline link-blue-black"
                    onClick={trackCTACabin}
                  >
                    {sectionHero.cta_label}
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-row">
              <figure>
                <picture>
                  {/* Hero image */}
                  <Image
                    src={sectionHero.image}
                    width={sectionHero.width}
                    height={sectionHero.height}
                    quality={75}
                    priority={true}
                    sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
                    alt={`Tony de Faria - Home - ${sectionHero.uid}`}
                    title="Tony de Faria"
                  />
                </picture>
                {/* Hero image caption */}
                <figcaption>{sectionHero.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fetch data using getStaticProps
export async function getStaticProps() {
  const sectionUID = "4MDntMTiDVcR9P8vUtvr2eKz";

  // Fetch project data and section data
  const projectData = await fetchProject();
  const sectionData = await fetchSection(sectionUID);

  // Specify the UIDs of the hero blocks you want to find
  const sectionHeroBlockUIDs = ["wqq2dxdWkWsqRwjWAbiCEpbx"];

  // Extract sectionHeroBlocks data
  const sectionHeroBlocks = extractData(
    projectData,
    sectionData,
    sectionHeroBlockUIDs
  ).sectionHeroBlocks

  return {
    props: {
      projectData,
      sectionData,
      sectionHeroBlocks,
    },
  };
}
