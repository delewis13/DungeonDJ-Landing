import Head from "next/head"
import stylesheet from "styles/main.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
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

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      })
    }, 350)
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
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
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <Link href="/">
              <FontAwesomeIcon size="3x" icon={faArrowLeft} />
            </Link>
          </div>

          <div id="wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLpItlhmfZ62nKmChUmY65dok_mz2BPo5g"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

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
        </div>
      </div>
    )
  }
}

export default IndexPage
