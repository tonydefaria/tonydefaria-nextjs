// Text Block Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";


export default function TextBlockComponent({block}) {
  return (
    <div className="writer-block">
      {parse(sanitizeHtml(block.text))}
    </div>
  )
}
