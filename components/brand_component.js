// Brand Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

// Context
import { menuToggleContext } from "../components/header_component"

// SVGs
import BrandLogo from "../svgs/brand_logo";
import BrandIcon from "../svgs/brand_icon";

export default function BrandComponent() {
  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = () => {
    setTimeout(function() {
      setIsOpen(false)
    }, 250)
  }

  // Cabin Events
  const trackBrandMobileCabin = () => { window.cabin.event("Brand Mobile") }
  const trackBrandDesktopCabin = () => { window.cabin.event("Brand Desktop") }

  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Link href="/">
            <a className="brand-icon link mobile" onClick={() => { trackBrandMobileCabin(); toggleMenu(); }}>
              <BrandIcon />
            </a>
          </Link>
          <Link href="/">
            <a className="brand-logo link desktop" onClick={() => { trackBrandDesktopCabin(); toggleMenu(); }}>
              <BrandLogo />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
