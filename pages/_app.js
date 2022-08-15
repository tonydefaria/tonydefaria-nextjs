// App

// Built-in Components
import React, { useEffect } from "react"

export default function MyApp({ Component, pageProps}) {
  // Layout
  const Layout = Component.Layout ? Component.Layout : React.Fragment

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
