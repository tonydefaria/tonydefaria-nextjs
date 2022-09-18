// Shop Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"

export default function ShopComponent() {

  return (
    <div className="shop">
      <div className="shop-box">
        <div className="shop-item">
          <Link href="/"><a className="button-shop">Shop</a></Link>
        </div>
      </div>
    </div>
  )
}
