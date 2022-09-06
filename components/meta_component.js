// Meta Component

// Built-in Components
import Head from "next/head"

export default function MetaComponent({project, meta}) {
  {/* Global attributes */}
  const title = meta.title
  const description = meta.description
  const keywords = meta.keywords
  const url = meta.url
  const type_of = project.type_of
  const image = meta.image
  const author = project.global_attributes.find(({uid}) => uid === "vVJh6fY3hXPpTi1mnhu2g6wG").value
  const twitter_card = project.global_attributes.find(({uid}) => uid === "r5BSc98jYfUZbNLxZPVSesHP").value
  const twitter_handle = project.global_attributes.find(({uid}) => uid === "dZabogRgkov9zRRh7oj47r8q").value

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={url} />
      {/* SEO */}
      <title>{title}</title>
      <meta name="description"          content={description} />
      <meta name="keywords"             content={keywords} />
      <link rel="canonical"             href={url} />
      <meta name="author"               content={author} />
      {/* Open Graph */}
      <meta property="og:type"          content={type_of} />
      <meta property="og:title"         content={title} />
      <meta property="og:description"   content={description} />
      <meta property="og:image"         content={image} />
      <meta property="og:url"           content={url} />
      {/* Twitter */}
      <meta name="twitter:card"         content={twitter_card} />
      <meta name="twitter:site"         content={twitter_handle} />
      <meta name="twitter:title"        content={title} />
      <meta name="twitter:description"  content={description} />
      <meta name="twitter:image"        content={image} />
      {/* Pinterest */}
      <meta name="p:domain_verify"      content="4798813e2e3fdec2ffbb1fae9109b056"/>
      {/* Preloaders */}
      <link rel="dns-prefetch" href="https://use.typekit.net/sjv6gba.css" />
    </Head>
  )
}
