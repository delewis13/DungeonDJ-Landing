import React from "react"

import site from "../site.config"

const videoSrc = site.demoVideoId
  ? `https://www.youtube-nocookie.com/embed/${site.demoVideoId}`
  : `https://www.youtube-nocookie.com/embed/videoseries?list=${site.tutorialPlaylistId}`

const steps = [
  {
    title: "Build your soundboard",
    text:
      "Add your own music and effects, download audio from YouTube, or search free libraries such as Freesound and OpenGameArt. Group sounds into playlists and categories so background tracks cross-fade instead of piling up.",
  },
  {
    title: "Teach it a phrase",
    text:
      "Type a phrase like \u201croll initiative\u201d and connect it to the sounds it should start. DungeonDJ trains a detector for that exact phrase.",
  },
  {
    title: "Say it at the table",
    text:
      "Speak the phrase during your session and the battle music starts. No tabbing out, no hunting for the right track. Global hotkeys stop or restart sounds without leaving your game.",
  },
]

const features = [
  "Speech is recognised on your computer. Your microphone audio never leaves it.",
  "A 14-day free trial that only counts the days you open the app.",
  "Keep going after the trial by supporting DungeonDJ on Patreon.",
  "Available for Mac (Apple silicon) and Windows.",
]

const Showcase = () => (
  <div className="showcase">
    <section id="demo" className="panel">
      <h2 className="major">See it in action</h2>
      <div className="video">
        <iframe
          src={videoSrc}
          title="DungeonDJ demo"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>

    <section id="about" className="panel">
      <h2 className="major">How it works</h2>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <ul className="features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>

    {site.screenshots.length > 0 && (
      <section id="screenshots" className="panel wide">
        <h2 className="major">Screenshots</h2>
        <div className="screenshots">
          {site.screenshots.map((shot) => (
            <a key={shot.src} href={shot.src}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </a>
          ))}
        </div>
      </section>
    )}
  </div>
)

export default Showcase
