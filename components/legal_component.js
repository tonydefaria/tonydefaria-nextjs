// Legal Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function LegalComponent() {
  return (
    <div className="legal flex-h-center">
      <div className="legal-box">
        <div className="legal-item">
          <Link href="/disclaimer" className="link-xs underline">Disclaimer</Link>
        </div>
      </div>
    </div>
  )
}
