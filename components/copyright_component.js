// Copyright Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"

export default function CopyrightComponent() {
  // Effect
  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, [])

  return (
    <div className="copyright flex-h-center">
      <div className="copyright-box">
        <div className="copyright-item">
          <p className="font-size-xxs">&copy; 1980-<span className="year"></span> Tony de Faria</p>
        </div>
      </div>
    </div>
  )
}
