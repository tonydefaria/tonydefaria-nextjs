// Primary

// Built-in Components
import React from "react"

// Components
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Primary({ children }) {
  return (
    <div className="primary" id="primary">
      {/* Header */}
      <HeaderComponent />

      {/* Main */}
      <main className="universal main" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  )
}
