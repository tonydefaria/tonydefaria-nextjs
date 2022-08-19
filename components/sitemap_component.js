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
            <a className="link-s link-grey-blue">Link</a>
          </Link>
        </div>
        <div className="sitemap-item">
          <Link href="/">
            <a className="link-s link-grey-blue">Link</a>
          </Link>
        </div>
        <div className="sitemap-item">
          <Link href="/">
            <a className="link-s link-grey-blue">Link</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
