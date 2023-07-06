// Menu Component

// Built-in components
import React, { useContext } from "react"
import Link from "next/link"

// Components
import SocialNetworksComponent from "../components/social_networks_component"

// Context
import { menuToggleContext } from "../components/header_component"

export default function MenuComponent({project}) {
  // Props
  const social_networks = project.social_networks

  // Context
  const [isOpen, setIsOpen] = useContext(menuToggleContext)

  // Toggle Menu
  const toggleMenu = () => {
    setTimeout(function() {
      setIsOpen(false)
    }, 250)
    window.scrollTo({top: 0, right: 0, bottom: 0, left: 0})
  }

  // Cabin Events
  const trackMenuPortraitsCabin = () => { window.cabin.event("Menu Portraits") }
  const trackMenuAboutCabin = () => { window.cabin.event("Menu About") }
  const trackMenuContactCabin = () => { window.cabin.event("Menu Contact") }

  return (
    <div className={`menu flex-v-center ${isOpen ? "open" : "closed"}`} id="menu">
      <div className="menu-wrapper">
        <ul className="menu-box">
          <li className="menu-item flex-h-center">
            <Link href="/portraits" className="link-l underline" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>
              Portraits
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/about" className="link-l underline" onClick={() => { toggleMenu(); trackMenuAboutCabin();}}>
              About
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/contact" className="link-l underline" onClick={() => { toggleMenu(); trackMenuContactCabin();}}>
              Contact
            </Link>
          </li>
        </ul>
        <hr className="separator-xxl" />
        <ul className="menu-box flex-h-center">
          <SocialNetworksComponent social_networks={social_networks} />
        </ul>
      </div>
    </div>
  )
}
