import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Fade from "@material-ui/core/Fade"
import Popover from "@material-ui/core/Popover"
import { Tooltip, Typography } from "@material-ui/core"

const Header = (props) => {
  const [showTutorials, setShowTutorials] = useState(false)
  const [hover, setHover] = useState(null)

  return (
    <>
      <Fade in={!showTutorials} timeout={250}>
        <div>
          <header id="header" style={props.timeout ? { display: "none" } : {}}>
            <div className="logo">
              {/*<span className="icon fa-diamond"></span>*/}
              {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
              <img
                src="static/images/recording@8x.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="content">
              <div className="inner">
                <h1>DungeonDJ</h1>
                <p>Automate your ambience</p>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <a
                    href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/dungeondj.dmg"
                    // href="javascript:;"
                    // onClick={() => {
                    //   props.onOpenArticle("download")
                    // }}
                    aria-label="Mac Download"
                    style={{ backgroundColor: "black" }}
                  >
                    Mac
                  </a>
                </li>
                <li>
                  <Tooltip
                    title={`
                        Windows installations will trigger a warning screen as we
                        have not yet purchased a Windows code signing
                        certificate. You can bypass this warning screen via
                        clicking "more info" > "run anyway"`}
                  >
                    <a
                      href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/dungeondj.exe"
                      // onClick={() => {
                      //   props.onOpenArticle("work")
                      // }}
                      style={{ backgroundColor: "black" }}
                      onMouseEnter={(e) => {
                        setHover(e)
                      }}
                      onMouseLeave={() => {
                        setHover(null)
                      }}
                    >
                      Windows
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <a
                    onClick={() => setShowTutorials(true)}
                    style={{ backgroundColor: "black", cursor: "pointer" }}
                  >
                    Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.patreon.com/dungeon_dj"
                    style={{ backgroundColor: "black" }}
                  >
                    Patreon
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </Fade>
      <Fade in={showTutorials} timeout={250}>
        <div
          style={{
            position: "absolute",
          }}
        >
          <div
            id="wrapper"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div
              style={{
                cursor: "pointer",
                marginBottom: "8px",
                height: "30px",
                width: "30px",
              }}
              onClick={() => setShowTutorials(false)}
            >
              <FontAwesomeIcon size="2x" icon={faArrowLeft} />
            </div>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLpItlhmfZ62nKmChUmY65dok_mz2BPo5g"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Fade>
    </>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
