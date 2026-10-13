import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"

const OAuthPage = () => (
  <Layout title="Signed in" path="/oauth">
    <Header subtitle="Login successful, head back to the app" />
  </Layout>
)

export default OAuthPage
