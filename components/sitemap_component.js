// Sitemap Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function SitemapComponent() {
  return (
    <div className="sitemap flex-h-center">
      <div className="sitemap-box">
        <div className="sitemap-item">
          <Link href="/">
            <a className="link-s underline">Home</a>
          </Link>
        </div>
        <div className="sitemap-item">
          <Link href="/portraits">
            <a className="link-s underline">Portraits</a>
          </Link>
        </div>
        <div className="sitemap-item">
          <Link href="/about">
            <a className="link-s underline">About</a>
          </Link>
        </div>
        <div className="sitemap-item">
          <Link href="/contact">
            <a className="link-s underline">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
