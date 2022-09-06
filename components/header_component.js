// Header Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Headroom from "headroom.js"

// Components
import BrandComponent from "./brand_component"
import HamburgerComponent from "./hamburger_component"
import MenuComponent from "../components/menu_component"

// Context
export const menuToggleContext = React.createContext()

export default function HeaderComponent({project}) {
  // State
  const [isOpen, setIsOpen] = useState(false)

  // Effect
  useEffect(() => {
    // Headroom.js
    let element = document.querySelector("header")
    let headroom = new Headroom(element)
    headroom.init()

    const scrolls = document.querySelectorAll(".lock-menu")
    if (!isOpen) {
      for (const scroll of scrolls) {
        scroll.classList.remove("noscroll")
        scroll.classList.add("scroll")
      }
    } else {
      for (const scroll of scrolls) {
        scroll.classList.remove("scroll")
        scroll.classList.add("noscroll")
      }
    }
  }, [isOpen, setIsOpen])

  return (
    <menuToggleContext.Provider value={[isOpen, setIsOpen]}>
      <header className="universal header" id="header">
        <BrandComponent />
        <HamburgerComponent />
        <MenuComponent project={project} />
      </header>
    </menuToggleContext.Provider>
  )
}
