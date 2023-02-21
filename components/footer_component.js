// Footer Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"

// Components
import SitemapComponent from "../components/sitemap_component"
import SocialNetworksComponent from "../components/social_networks_component"
import CopyrightComponent from "../components/copyright_component"
import LegalComponent from "../components/legal_component"

export default function FooterComponent({project}) {
  // Props
  const social_networks = project.social_networks

  return (
    <footer className="universal footer" id="footer">
      <SocialNetworksComponent social_networks={social_networks} />
      <CopyrightComponent />
      <div className="universal-row">
        <LegalComponent />
      </div>
    </footer>
  )
}
