// Shop Component

// Built-in components
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
