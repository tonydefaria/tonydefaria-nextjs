// Hamburger Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function HamburgerComponent() {
  return (
    <div className="hamburger">
      <div className="hamburger-box">
        <div className="hamburger-item">
          <Link href="/">
            <a className="hamburger-link link"></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
