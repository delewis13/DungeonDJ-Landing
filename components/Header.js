import PropTypes from "prop-types"

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
      <img src="static/images/recording@8x.png" style={{ width: "100%" }} />
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
            href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/DungeonDJ.dmg"
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
          <a
            href="https://github.com/delewis13/DungeonDJ-UI/releases/latest/download/DungeonDJ-Setup.exe"
            // onClick={() => {
            //   props.onOpenArticle("work")
            // }}
            style={{ backgroundColor: "black" }}
          >
            Windows
          </a>
        </li>
        <li>
          <a
            href="https://www.patreon.com/dungeon_dj"
            style={{ backgroundColor: "black" }}
            // href="javascript:;"
            // onClick={() => {
            //   props.onOpenArticle("about")
            // }}
          >
            Patreon
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
