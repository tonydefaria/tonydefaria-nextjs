// Primary Layout
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";

// Import custom components
import FaviconComponent from "../components/favicon_component";
import HeaderComponent from "../components/header_component";
import FooterComponent from "../components/footer_component";

export default function Primary({ children, project }) {
  return (
    <div className="primary lock-menu scroll" id="primary">
      {/* Favicon */}
      <FaviconComponent project={project} />
      {/* Header */}
      <HeaderComponent project={project} />
      {/* Main */}
      <main className="universal main lock-menu scroll" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
      {/* Footer */}
      <FooterComponent project={project} />
    </div>
  );
}
