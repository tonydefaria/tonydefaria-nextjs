// Image Block Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import Image from "next/image"

export default function ImageBlockComponent({block}) {
  return (
    <div className="writer-block">
      <figure>
        <picture>
          <Image
            src={block.image}
            width={block.image_width}
            height={block.image_height}
            quality={100}
            alt={`Tony de Faria - Image Block - ${block.uid}`}
            title="Tony de Faria"
            priority="true"
            sizes="(max-width: 959px) 75vw, (min-width: 960px) 65vw, 100vw"
          />
        </picture>
        <figcaption>{block.caption}</figcaption>
      </figure>
    </div>
  )
}
