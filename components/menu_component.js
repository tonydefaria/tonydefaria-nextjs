// Menu Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useContext } from "react";
import Link from "next/link";

// Import custom components
import SocialNetworksComponent from "../components/social_networks_component";
import { menuToggleContext } from "./header_component";

export default function MenuComponent({ project }) {
  // Props
  const social_networks = project.social_networks;

  // Get the menu toggle state
  const [isOpen, setIsOpen] = useContext(menuToggleContext);

  // Close the menu after a link is clicked
  const toggleMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
    window.scrollTo({ top: 0, right: 0, bottom: 0, left: 0 });
  };

  // Track the event in Cabin
  const trackCabinEvent = (eventName) => {
    window.cabin.event(eventName);
  };

  return (
    <div className={`menu flex-v-center ${isOpen ? "open" : "closed"}`} id="menu">
      <div className="menu-wrapper">
        <ul className="menu-box">
          <li className="menu-item flex-h-center">
            <Link href="/portraits" className="link-l underline" onClick={() => { toggleMenu(); trackCabinEvent("Menu Portraits"); }}>
              Portraits
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/about" className="link-l underline" onClick={() => { toggleMenu(); trackCabinEvent("Menu About"); }}>
              About
            </Link>
          </li>
          <li className="menu-item flex-h-center">
            <Link href="/contact" className="link-l underline" onClick={() => { toggleMenu(); trackCabinEvent("Menu Contact"); }}>
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
  );
}
