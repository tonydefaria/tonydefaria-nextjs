// Landing layout
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"

// Components
import FaviconComponent from "../components/favicon_component"
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Landing({ children, project }) {
  return (
    <div className="landing lock-menu scroll" id="landing">
      {/* Favicon */}
      <FaviconComponent project={project} />
      {/* Header */}
      <HeaderComponent project={project} />
      {/* Main */}
      <main className="universal main lock-menu scroll" id="main">
        {children}
      </main>
      {/* Footer */}
      <FooterComponent project={project} />
    </div>
  )
}
