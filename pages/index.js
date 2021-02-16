import React from "react"
import Head from "next/head"
import stylesheet from "styles/main.scss"

import Header from "../components/Header"
import Main from "../components/Main"
// import Footer from "../components/Footer"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: false,
      loading: "is-loading",
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <div className={`body ${this.state.loading}`}>
        <Head>
          <title>DungeonDJ</title>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/images/recording@8x.png"
          />
        </Head>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div
          id="bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(
                ${
                  process.env.NODE_ENV === "production"
                    ? `${process.env.BACKEND_URL}/static/images/background.png`
                    : "/static/images/background.png"
                }
              )`,
          }}
        />

        <div id="wrapper">
          <Header timeout={this.state.timeout} />
        </div>
      </div>
    )
  }
}

export default IndexPage
