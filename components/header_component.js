// Header Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useState, useEffect } from "react";
import Headroom from "headroom.js";

// Import custom components
import BrandComponent from "./brand_component";
import HamburgerComponent from "./hamburger_component";
import MenuComponent from "./menu_component";

// Create a context for the menu toggle
export const menuToggleContext = React.createContext();

export default function HeaderComponent({ project }) {
  // Set the menu toggle state
  const [isOpen, setIsOpen] = useState(false);

  // Set the menu toggle state
  useEffect(() => {
    const headerElement = document.querySelector("header");
    const headroom = new Headroom(headerElement);
    headroom.init();

    const scrolls = document.querySelectorAll(".lock-menu");
    const isMenuOpen = isOpen ? "noscroll" : "scroll";

    scrolls.forEach((scroll) => {
      scroll.classList.remove(isMenuOpen === "noscroll" ? "scroll" : "noscroll");
      scroll.classList.add(isMenuOpen);
    });
  }, [isOpen]);

  return (
    <menuToggleContext.Provider value={[isOpen, setIsOpen]}>
      <header className="universal header" id="header">
        <BrandComponent />
        <HamburgerComponent />
        <MenuComponent project={project} />
      </header>
    </menuToggleContext.Provider>
  );
}
