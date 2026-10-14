import React from "react"

import site from "../site.config"

const ContactOptions = () => (
  <ul>
    {site.supportEmail && (
      <li>
        Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </li>
    )}
    {site.discordUrl && (
      <li>
        Ask in the <a href={site.discordUrl}>{site.name} Discord</a>
      </li>
    )}
    <li>
      Send a message on <a href={site.patreonUrl}>Patreon</a>
    </li>
  </ul>
)

export default ContactOptions
