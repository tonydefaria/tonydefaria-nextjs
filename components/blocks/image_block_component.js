// Image Block Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import Image from "next/future/image"

export default function ImageBlockComponent({block}) {
  return (
    <div key={block.uid} className="writer-block">
      <figure>
        <picture>
          <Image
            src={block.image}
            width={block.width}
            height={block.height}
            quality={100}
            alt={`Tony de Faria - Portrait - ${block.uid}`}
            title="Tony de Faria"
            priority="true"
            sizes="(max-width: 959px) 75vw, (min-width: 960px) 50vw, 100vw"
          />
        </picture>
        <figcaption>{block.caption}</figcaption>
      </figure>
    </div>
  )
}
