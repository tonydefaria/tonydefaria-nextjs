// Brand Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function BrandComponent() {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Link href="/">
            <a className="brand-link link"></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
