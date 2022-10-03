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
    window.scrollTo({top: 0, left: 0, right: 0})
  }

  // Cabin Events
  const trackMenuPortraitsCabin = () => { window.cabin.event("Menu Portraits") }
  const trackMenuContactCabin = () => { window.cabin.event("Menu Contact") }

  return (
    <div className={`menu flex-v-center ${isOpen ? "open" : "closed"}`} id="menu">
      <div className="menu-wrapper">
        <ul className="menu-box">
          {/*
          <li className="menu-item flex-h-center">
            <Link href="/portraits">
              <a className="link-l underline" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>
                Stories
              </a>
            </Link>
          </li>
          */}
          <li className="menu-item flex-h-center">
            <Link href="/portraits">
              <a className="link-l underline" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>
                Portraits
              </a>
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/about">
              <a className="link-l underline" onClick={() => { toggleMenu(); trackMenuPortraitsCabin();}}>
                About
              </a>
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/contact">
              <a className="link-l underline" onClick={() => { toggleMenu(); trackMenuContactCabin();}}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <ul className="menu-box flex-h-center">
          <SocialNetworksComponent social_networks={social_networks} />
        </ul>
      </div>
    </div>
  )
}
