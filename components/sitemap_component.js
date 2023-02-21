// Sitemap Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function SitemapComponent() {
  return (
    <div className="sitemap flex-h-center">
      <div className="sitemap-box">
        <div className="sitemap-item">
          <Link href="/" className="link-xs">Home</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/portraits" className="link-xs">Portraits</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/about" className="link-xs">About</Link>
        </div>
        <div className="sitemap-item">
          <Link href="/contact" className="link-xs">Contact</Link>
        </div>
      </div>
    </div>
  )
}
