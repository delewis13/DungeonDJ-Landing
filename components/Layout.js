import React from "react"
import Head from "next/head"
import Link from "next/link"
import PropTypes from "prop-types"
import stylesheet from "styles/main.scss"

import Footer from "./Footer"
import site from "../site.config"

const OG_IMAGE = `${site.url}/static/images/og-image.png`

const Layout = ({ title, description, path, variant, children }) => {
  const [loading, setLoading] = React.useState("is-loading")

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(""), 100)
    return () => clearTimeout(timeoutId)
  }, [])

  const fullTitle = title ? `${title} | ${site.name}` : `${site.name}: ${site.tagline}`
  const pageDescription = description || site.description

  return (
    <div className={`body ${loading}`}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${site.url}${path}`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />
        <link rel="canonical" href={`${site.url}${path}`} />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/static/images/logo@8x.png" />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div id="bg" />

      <div id="wrapper" className={variant}>
        {variant === "page" && (
          <Link href="/">
            <a className="brand">
              <img src="/static/images/logo@32x.png" alt="" />
              {site.name}
            </a>
          </Link>
        )}
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["home", "page", "center"]),
  children: PropTypes.node,
}

Layout.defaultProps = {
  variant: "center",
}

export default Layout
