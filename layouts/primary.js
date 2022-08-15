// Primary

// Built-in Components
import React from "react"

export default function Primary({ children }) {
  return (
    <div className="primary" id="primary">
      <main className="universal main" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
