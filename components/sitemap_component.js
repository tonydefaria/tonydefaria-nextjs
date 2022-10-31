// Sitemap Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function SitemapComponent() {
  return (
    <div className="sitemap flex-h-center">
      <div className="sitemap-box">
        <div className="sitemap-item">
          <Link href="/" className="link-s underline">Home</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/portraits" className="link-s underline">Portraits</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/about" className="link-s underline">About</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/contact" className="link-s underline">Contact</Link>
        </div>
      </div>
    </div>
  )
}
