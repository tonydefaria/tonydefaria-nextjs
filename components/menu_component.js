// Menu Component

// Built-in components
import React, { useContext } from "react"
import Link from "next/link"

// Context
import { menuToggleContext } from "../components/header_component"

export default function MenuComponent() {
  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = () => {
    setTimeout(function() {
      setIsOpen(false)
    }, 250)
    window.scrollTo({top: 0, left: 0, right: 0})
  }

  // Cabin Events
  const trackMenuPortraitsCabin = () => { window.cabin.event("Menu Portraits") }
  const trackMenuContactCabin = () => { window.cabin.event("Menu Contact") }

  return (
    <div className={`menu flex-v-center ${isOpen ? "open" : "closed"}`} id="menu">
      <div className="menu-wrapper">
        <ul className="menu-box">
          <li className="menu-item">
            <Link href="/">
              <a className="link link-grey-blue" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>
                Link Two
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a className="link link-grey-blue" onClick={() => { toggleMenu(); trackMenuContactCabin();}}>
                Link Two
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
