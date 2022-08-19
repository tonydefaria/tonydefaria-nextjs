// Primary

// Built-in Components
import React from "react"

// Components
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Primary({ children }) {
  // Get props
  const project = children.props.projectData.project

  return (
    <div className="primary lock-menu scroll" id="primary">
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
