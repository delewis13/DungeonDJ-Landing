import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import Showcase from "../components/Showcase"
import site from "../site.config"

const IndexPage = () => (
  <Layout path="/" variant="home">
    <div className="hero">
      <Header title={site.name} subtitle={site.tagline} showLinks />
      <a className="scroll-cue" href="#demo" aria-label="See how it works">
        &darr;
      </a>
    </div>
    <Showcase />
  </Layout>
)

export default IndexPage
