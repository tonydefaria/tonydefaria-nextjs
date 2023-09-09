// Landing

// Built-in Components
import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

// Components
import FaviconComponent from "../components/favicon_component";
import HeaderComponent from "../components/header_component";
import FooterComponent from "../components/footer_component";

export default function Landing({ children, projectData }) {
  // Enable smooth scrolling polyfill for improved scrolling behavior
  useEffect(() => {
    smoothscroll.polyfill();

    // Add a click event listener for smooth scrolling when clicking on certain elements
    document.addEventListener("click", e => {
      const target = e.target;
      if (!target.classList.contains("js-smooth-scroll")) return; // Exit if the clicked element doesn't have the smooth-scroll class
      e.preventDefault();
      const targetId = target.hash;
      const targetElement = document.querySelector(targetId);
      const rectTop = targetElement.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      // Calculate the target scroll position for smooth scrolling
      const top = rectTop + offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, []);

  // Extract project data from props
  const project = projectData.project;

  return (
    <div className="landing lock-menu scroll" id="landing">
      {/* Favicon */}
      <FaviconComponent project={project} />
      {/* Header */}
      <HeaderComponent project={project} />
      {/* Main */}
      <main className="universal main lock-menu scroll" id="main">
        {children}
      </main>
      {/* Footer */}
      <FooterComponent project={project} />
    </div>
  );
}
