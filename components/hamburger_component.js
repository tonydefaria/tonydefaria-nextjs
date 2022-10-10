// Hamburger Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

// Context
import { menuToggleContext } from "../components/header_component"

// SVGs
import CloseIcon from "../svgs/close"
import HamburgerIcon from "../svgs/hamburger"

export default function HamburgerComponent() {
  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
    // window.scrollTo({top: 0, right: 0, bottom: 0, left: 0})
  }

  // Cabin Events
  const trackHamburgerCabin = () => { window.cabin.event("Hamburger") }

  return (
    <div className="hamburger">
      <div className="hamburger-box">
        <div className="hamburger-item">
          <Link href="/">
            <a className="hamburger-link link" onClick={(event) => { trackHamburgerCabin(); toggleMenu(event); }}>
              <span className="icon">
                {isOpen ? <CloseIcon /> : <HamburgerIcon /> }
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
