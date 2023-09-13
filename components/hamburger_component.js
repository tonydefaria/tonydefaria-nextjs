// Hamburger Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useContext } from "react";
import Link from "next/link";

// Import custom components
import { menuToggleContext } from "./header_component";

// Import SVGs
import CloseIcon from "../svgs/close";
import HamburgerIcon from "../svgs/hamburger";

export default function HamburgerComponent() {
  // Get the menu toggle state
  const [isOpen, setIsOpen] = useContext(menuToggleContext);

  // Close the menu after a link is clicked
  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, right: 0, bottom: 0, left: 0 });
  };

  // Track the event in Cabin
  const trackCabinEvent = () => {
    window.cabin.event("Hamburger");
  };

  return (
    <div className="hamburger">
      <div className="hamburger-box">
        <div className="hamburger-item">
          <Link href="/" className="hamburger-link link" onClick={(event) => { trackCabinEvent(); toggleMenu(event); }}>
            <span className="icon">
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
