import React from "react"
import Link from "next/link"

import site from "../site.config"

const Footer = () => (
  <footer id="footer">
    <ul className="footer-links">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/support">
          <a>Support</a>
        </Link>
      </li>
      <li>
        <Link href="/privacy">
          <a>Privacy</a>
        </Link>
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
    <p className="copyright">
      &copy; {new Date().getFullYear()} {site.operator}. Design based on Dimension by{" "}
      <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
