// Header Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"

// Components
import BrandComponent from "./brand_component"
import HamburgerComponent from "./hamburger_component"

export default function HeaderComponent() {
  return (
    <header className="universal header" id="header">
      <BrandComponent />
      <HamburgerComponent />
    </header>
  )
}
