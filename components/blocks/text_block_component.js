// Text Block Component

// Built-in components
import React, { useContext, useState, useEffect } from "react"
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";


export default function TextBlockComponent({block}) {
  return (
    <div className="writer-block">
      {parse(sanitizeHtml(block.text))}
    </div>
  )
}
