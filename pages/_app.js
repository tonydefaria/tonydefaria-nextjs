// App

// Built-in Components
import React, { useEffect } from "react"

// Stylesheets
import "../styles/composer.scss"

export default function MyApp({ Component, pageProps}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  // Effect
  useEffect(() => {
    // Prevent from saving images.
    document.addEventListener("contextmenu", function(event) {
      if (event.target.nodeName === "IMG") {
        event.preventDefault()
      }
    }, false)
  }, [])

  return (
    getLayout(<Component {...pageProps} />)
  )
}
