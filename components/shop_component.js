// Shop Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function ShopComponent() {
  return (
    <div className="shop">
      <div className="shop-box">
        <div className="shop-item">
          <Link href="/" className="button-shop">Shop</Link>
        </div>
      </div>
    </div>
  )
}
