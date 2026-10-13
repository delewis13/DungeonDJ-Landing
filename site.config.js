// Everything on the site that you might need to change, in one place.
// Leave a value empty and the section that uses it is hidden.
const RELEASES = "https://github.com/delewis13/DungeonDJ-Release/releases/latest/download"

module.exports = {
  url: "https://dungeon-dj.com",
  name: "DungeonDJ",
  tagline: "Voice-controlled sound for your tabletop games",
  description:
    "DungeonDJ is a voice-controlled soundboard for tabletop RPGs. Say a phrase at the table and the right music and sound effects start playing. Speech is recognised on your computer.",
  operator: "Daniel Lewis",
  supportEmail: "",
  discordUrl: "",
  patreonUrl: "https://www.patreon.com/dungeon_dj",
  // YouTube video ID for the hero demo. Until there is one, the tutorial playlist is shown.
  demoVideoId: "",
  tutorialPlaylistId: "PLpItlhmfZ62nKmChUmY65dok_mz2BPo5g",
  // [{ src: "static/images/screenshots/library.png", alt: "Sound library" }], 16:10 works best.
  screenshots: [],
  downloads: {
    mac: `${RELEASES}/DungeonDJ-Setup.dmg`,
    windows: `${RELEASES}/DungeonDJ-Setup.exe`,
  },
  privacyUpdated: "13 October 2026",
}
