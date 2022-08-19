// Header Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"

// Components
import SitemapComponent from "../components/sitemap_component"
import CopyrightComponent from "../components/copyright_component"

export default function FooterComponent() {
  return (
    <footer className="universal footer" id="footer">
      <SitemapComponent />
      <CopyrightComponent />
    </footer>
  )
}
