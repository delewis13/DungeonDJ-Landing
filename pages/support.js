import React from "react"

import ContactOptions from "../components/ContactOptions"
import Layout from "../components/Layout"
import site from "../site.config"

const tutorialUrl = `https://www.youtube.com/playlist?list=${site.tutorialPlaylistId}`

const faqs = [
  {
    question: "Windows says it protected my PC. Is the installer safe?",
    answer: (
      <p>
        The Windows installer isn&apos;t code-signed yet, so SmartScreen warns about it. Click &ldquo;More info&rdquo;,
        then &ldquo;Run anyway&rdquo;. Only download {site.name} from this website.
      </p>
    ),
  },
  {
    question: "Which Macs are supported?",
    answer: <p>Macs with Apple silicon (M1 or later). Intel Macs aren&apos;t supported.</p>,
  },
  {
    question: "DungeonDJ doesn't react when I say my phrase.",
    answer: (
      <ol>
        <li>
          Hover the microphone icon in the bottom-right corner of the app to check the listener and microphone are
          both on. Click it to turn the microphone on.
        </li>
        <li>Make sure you have at least one phrase set up.</li>
        <li>Run the microphone test in Settings to check the right microphone is selected and picking you up.</li>
        <li>
          On a Mac, check {site.name} is allowed under System Settings &rarr; Privacy &amp; Security &rarr; Microphone.
        </li>
        <li>Say the phrase clearly, at a normal volume.</li>
        <li>If you use the &ldquo;Hold To Toggle Microphone&rdquo; hotkey, hold it for a second before you speak.</li>
      </ol>
    ),
  },
  {
    question: "Sounds play when nobody said the phrase.",
    answer: (
      <ul>
        <li>Lower the sensitivity of the phrase that keeps triggering.</li>
        <li>Set up the &ldquo;Hold To Toggle Microphone&rdquo; hotkey in Settings so DungeonDJ only listens while you hold it.</li>
        <li>
          If you have a lot of phrases, split them into separate libraries. Every active phrase adds a chance of a
          false trigger.
        </li>
      </ul>
    ),
  },
  {
    question: "Why does the Mac app ask for Accessibility permission?",
    answer: (
      <p>
        So its hotkeys work while another app is in front, without you switching windows mid-game. macOS only lets
        apps listen for keys in the background if you allow it under System Settings &rarr; Privacy &amp; Security
        &rarr; Accessibility. Without it the rest of the app still works, but hotkeys don&apos;t.
      </p>
    ),
  },
  {
    question: "How does the free trial work?",
    answer: (
      <p>
        You get 14 days of full access, and only the days you open the app count. After that, support {site.name} on{" "}
        <a href={site.patreonUrl}>Patreon</a> to keep access. Link your Patreon account from the app&apos;s Settings
        page, or choose Patreon when you sign in.
      </p>
    ),
  },
  {
    question: "How do I back up my setup?",
    answer: (
      <p>
        Go to Settings &rarr; Profile and save your profile. Keep that file somewhere safe, along with a copy of your
        sounds folder.
      </p>
    ),
  },
  {
    question: "How do I report a bug?",
    answer: (
      <p>
        Hover the speech-bubble icon in the bottom-right corner of the app and choose &ldquo;Report A Bug&rdquo;. That
        sends us the app&apos;s logs along with your description, which is usually what we need to fix it.
      </p>
    ),
  },
]

const SupportPage = () => (
  <Layout
    title="Support"
    description="Help with installing and using DungeonDJ, answers to common questions, and how to contact us."
    path="/support"
    variant="page"
  >
    <article className="panel">
      <h2 className="major">Support</h2>
      <p>
        New to {site.name}? The <a href={tutorialUrl}>tutorial videos</a> walk through setting up your first sounds and
        phrases. The app also has guided tours and a searchable FAQ on its Help page.
      </p>

      <h3>Common questions</h3>
      {faqs.map(({ question, answer }) => (
        <section key={question} className="faq">
          <h4>{question}</h4>
          {answer}
        </section>
      ))}

      <h3>Still stuck?</h3>
      <p>Get in touch and we&apos;ll help:</p>
      <ContactOptions />
    </article>
  </Layout>
)

export default SupportPage
