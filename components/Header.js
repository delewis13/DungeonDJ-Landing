import React from "react"
import PropTypes from "prop-types"
import Fade from "@material-ui/core/Fade"
import Snackbar from "@material-ui/core/Snackbar"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import ErrorIcon from "@material-ui/icons/Error"

import site from "../site.config"

const DownloadNote = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", padding: "0.25rem" }}>
    <ErrorIcon style={{ margin: "auto", marginBottom: "0.5rem" }} />
    <Typography style={{ fontSize: "0.7rem" }}>{children}</Typography>
  </div>
)

DownloadNote.propTypes = {
  children: PropTypes.node,
}

const Links = () => {
  const [showSnackbar, setShowSnackbar] = React.useState(false)
  const onDownload = () => setShowSnackbar(true)

  return (
    <nav>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        message={
          <Typography variant="body2" style={{ cursor: "pointer" }} onClick={() => setShowSnackbar(false)}>
            Your download will start in a few seconds
          </Typography>
        }
      />
      <ul>
        <li>
          <Tooltip title={<DownloadNote>Needs a Mac with Apple silicon (M1 or later).</DownloadNote>}>
            <a href={site.downloads.mac} aria-label="Download for Mac" onClick={onDownload}>
              Mac
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip
            title={
              <DownloadNote>
                The Windows installer isn&apos;t code-signed yet, so Windows shows a SmartScreen warning. Click
                &quot;More info&quot;, then &quot;Run anyway&quot;.
              </DownloadNote>
            }
          >
            <a href={site.downloads.windows} aria-label="Download for Windows" onClick={onDownload}>
              Windows
            </a>
          </Tooltip>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#demo">Tutorial</a>
        </li>
        {site.discordUrl && (
          <li>
            <a href={site.discordUrl}>Discord</a>
          </li>
        )}
        <li>
          <a href={site.patreonUrl}>Patreon</a>
        </li>
      </ul>
    </nav>
  )
}

const Header = ({ title, subtitle, showLinks }) => (
  <Fade in timeout={250}>
    <header id="header">
      <div className="logo">
        <img src="/static/images/logo@32x.png" alt="" style={{ width: "100%" }} />
      </div>
      <div className="content">
        <div className="inner">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {showLinks && <Links />}
    </header>
  </Fade>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showLinks: PropTypes.bool,
}

export default Header
