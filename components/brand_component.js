// Brand Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useContext } from "react";
import Link from "next/link";

// Import custom components
import { menuToggleContext } from "./header_component";

// Import SVGs
import BrandLogo from "../svgs/brand_logo";
import BrandIcon from "../svgs/brand_icon";

export default function BrandComponent() {
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
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Link href="/" className="brand-icon link mobile" onClick={() => { trackCabinEvent("Brand Mobile"); toggleMenu(); }}>
            <BrandIcon />
          </Link>
          <Link href="/" className="brand-logo link desktop" onClick={() => { trackCabinEvent("Brand Desktop"); toggleMenu(); }}>
            <BrandLogo />
          </Link>
        </div>
      </div>
    </div>
  );
}
