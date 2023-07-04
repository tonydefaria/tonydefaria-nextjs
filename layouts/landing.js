// Landing

// Built-in Components
import React, { useContext, useState, useEffect } from "react"
import smoothscroll from 'smoothscroll-polyfill';

// Components
import FaviconComponent from "../components/favicon_component"
import HeaderComponent from "../components/header_component"
import FooterComponent from "../components/footer_component"

export default function Landing({ children }) {
  // Effect
  useEffect(() => {
    smoothscroll.polyfill();

    document.addEventListener("click", e => {
      const target = e.target;
      if (!target.classList.contains("js-smooth-scroll")) return
      e.preventDefault()
      const targetId = target.hash
      const targetElement = document.querySelector(targetId)
      const rectTop = targetElement.getBoundingClientRect().top
      const offsetTop = window.pageYOffset
      // const buffer = 0;
      // const top = rectTop + offsetTop - buffer;
      const top = rectTop + offsetTop
      window.scrollTo({top, behavior: "smooth"});
    });
  }, [])

  // Get props
  const project = children.props.projectData.project

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
  )
}
