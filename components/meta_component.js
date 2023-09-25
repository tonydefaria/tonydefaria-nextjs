// Meta Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import Head from "next/head";

export default function MetaComponent({ project, meta }) {
  const {
    title,
    description,
    keywords,
    url,
    image,
  } = meta;

  const typeOf = project.type_of;
  const author = project.global_attributes.find(({ uid }) => uid === "vVJh6fY3hXPpTi1mnhu2g6wG").value;
  const twitterCard = project.global_attributes.find(({ uid }) => uid === "r5BSc98jYfUZbNLxZPVSesHP").value;
  const twitterHandle = project.global_attributes.find(({ uid }) => uid === "dZabogRgkov9zRRh7oj47r8q").value;

  return (
    <Head>
      {/* Languages */}
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Application */}
      <meta name="application-name" content={project.title}/>

      {/* Open Graph */}
      <meta property="og:type" content={typeOf} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Pinterest */}
      {/* <meta name="p:domain_verify" content="4798813e2e3fdec2ffbb1fae9109b056" /> */}

      {/* Preloaders */}
      <link rel="dns-prefetch" href="https://use.typekit.net/sjv6gba.css" />
    </Head>
  );
}
