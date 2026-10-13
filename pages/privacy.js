import React from "react"

import ContactOptions from "../components/ContactOptions"
import Layout from "../components/Layout"
import site from "../site.config"

const PrivacyPage = () => (
  <Layout
    title="Privacy policy"
    description="What the DungeonDJ app and website collect, why, and how to have it deleted."
    path="/privacy"
    variant="page"
  >
    <article className="panel">
      <h2 className="major">Privacy policy</h2>
      <p className="meta">Last updated {site.privacyUpdated}</p>

      <p>
        This policy covers the {site.name} desktop app and this website. It explains what we collect, why we collect
        it, and how to have it deleted. {site.name} is made and run by {site.operator} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;).
      </p>

      <h3>The short version</h3>
      <ul>
        <li>Your microphone audio is processed on your computer. It is never recorded or sent to us.</li>
        <li>We store the account details Google or Patreon share when you sign in, and a record of when you use the app.</li>
        <li>
          The app sends crash reports to Sentry and records how the app window is used with FullStory, so we can find
          and fix problems.
        </li>
        <li>We don&apos;t sell your data and there are no ads.</li>
      </ul>

      <h3>Your microphone</h3>
      <p>
        {site.name} listens for your phrases with Picovoice Porcupine, a speech detector that runs entirely on your
        computer. Audio is checked as it arrives and then discarded. It isn&apos;t saved and it isn&apos;t sent to us
        or anyone else.
      </p>
      <p>
        The microphone test in Settings records a three-second clip so you can hear yourself back. That clip stays on
        your computer.
      </p>
      <p>
        When you create a phrase, the text of the phrase (for example &ldquo;roll initiative&rdquo;) is sent to our
        server, which trains a detector for it. Trained detectors are stored by phrase text and aren&apos;t linked to
        your account.
      </p>

      <h3>Your account</h3>
      <p>You sign in with Google or Patreon. We store what that service shares with us:</p>
      <ul>
        <li>
          <strong>Google:</strong> your name, email address, profile picture, Google account ID, language setting and
          whether your email is verified.
        </li>
        <li>
          <strong>Patreon:</strong> your name, email address, profile picture, Patreon account ID and which{" "}
          {site.name} tiers you support.
        </li>
      </ul>
      <p>
        We also store the sign-in tokens Google and Patreon give us. They keep you signed in and let us check your
        Patreon membership.
      </p>

      <h3>How you use the app</h3>
      <p>Each time you open the app it checks in with our server. We record:</p>
      <ul>
        <li>when you signed in or opened the app (the most recent 250 times),</li>
        <li>which days you used the app, which is how the 14-day trial is counted,</li>
        <li>when your Patreon tier changes,</li>
        <li>when your account was created, and</li>
        <li>any ratings you give sounds.</li>
      </ul>
      <p>
        We use this to run your trial, decide what your account can access, and count how many people sign up, keep
        using the app and become supporters.
      </p>
      <p>
        Sound searches are sent to our server, which passes them on to Freesound, OpenGameArt or YouTube. When you
        download audio from YouTube, your computer downloads it directly from YouTube.
      </p>
      <p>
        Your sounds, phrases, playlists and settings are stored on your computer. They aren&apos;t uploaded to us.
      </p>

      <h3>Crash reports and session recordings</h3>
      <p>
        <strong>Sentry.</strong> When something goes wrong, the app sends an error report to Sentry. A report includes
        the error, the app version, your operating system, and the app&apos;s state at the time, which can include
        your username, account ID, and the names of your sounds and phrases.
      </p>
      <p>
        <strong>FullStory.</strong> The app uses FullStory to record how its window is used: what is on screen, where
        you click, and what you type into the app. Recordings are linked to your account ID and username. We use them
        to see what led up to a bug. FullStory doesn&apos;t record your microphone, and it can&apos;t see anything
        outside the {site.name} window.
      </p>

      <h3>Bug reports</h3>
      <p>
        If you send a bug report from the app, we receive your title and description, your account details, and the
        app&apos;s log files. Logs can include sound and phrase names, file locations on your computer, and the names of
        your audio devices.
      </p>

      <h3>Who else handles your data</h3>
      <ul>
        <li>
          <strong>Hetzner</strong> hosts our server and database.
        </li>
        <li>
          <strong>Sentry</strong> and <strong>FullStory</strong> receive crash reports and session recordings, as
          described above.
        </li>
        <li>
          <strong>Google</strong> and <strong>Patreon</strong> handle sign-in and memberships under their own privacy
          policies.
        </li>
        <li>
          <strong>GitHub</strong> serves app downloads and updates, so it sees your IP address when the app checks for
          an update.
        </li>
        <li>
          <strong>Freesound</strong>, <strong>OpenGameArt</strong> and <strong>YouTube</strong> receive the searches and
          downloads you make.
        </li>
      </ul>

      <h3>This website</h3>
      <p>
        This site is hosted on GitHub Pages, which logs visitors&apos; IP addresses for security. Pages load fonts from
        Google Fonts and embed videos from YouTube in its privacy-enhanced mode. We don&apos;t run analytics or set
        cookies on this site.
      </p>

      <h3>Keeping and deleting your data</h3>
      <p>
        We keep your account data for as long as you have an account. To delete your account and everything we hold
        about you on our server, or to get a copy of it, contact us using any of the options below. Uninstalling the app
        removes the app itself; your sounds and settings stay on your computer until you delete them.
      </p>

      <h3>Changes</h3>
      <p>
        If this policy changes, we&apos;ll update the date at the top of this page. For significant changes we&apos;ll
        also tell you in the app.
      </p>

      <h3>Contact</h3>
      <ContactOptions />
    </article>
  </Layout>
)

export default PrivacyPage
