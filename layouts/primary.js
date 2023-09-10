// Primary Layout

// Built-in Components
import React, { useEffect } from "react"

// Components
import FaviconComponent from "../components/favicon_component"
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Primary({ children, projectData }) {
  // useEffect(() => {
  //   // Add any initialization code if needed
  //   // This effect runs once when the component mounts
  // }, [])

  // Extract project data from props
  const project = projectData.project

  return (
    <div className="primary lock-menu scroll" id="primary">
      {/* Favicon */}
      <FaviconComponent project={project} />
      {/* Header */}
      <HeaderComponent project={project} />
      {/* Main */}
      <main className="universal main lock-menu scroll" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
      {/* Footer */}
      <FooterComponent project={project} />
    </div>
  )
}
