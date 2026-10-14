// Checks the static export in `.site-check/` (see `yarn test`). Run after a production export.
const assert = require("assert")
const fs = require("fs")
const path = require("path")

const site = require("../site.config")

const OUT = path.join(__dirname, "..", ".site-check")

const read = (page) => {
  const file = path.join(OUT, page)
  assert.ok(fs.existsSync(file), `${page} was not exported`)
  return fs.readFileSync(file, "utf8")
}

const article = (html) => {
  const match = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)
  assert.ok(match, "page has no <article>")
  return match[1]
}

const attr = (html, selector) => {
  const match = html.match(selector)
  return match && match[1]
}

const tests = []
const test = (name, fn) => tests.push({ name, fn })

const pages = ["index.html", "privacy.html", "support.html", "oauth.html"]

test("every page is exported", () => {
  pages.forEach(read)
})

test("every page has a description and share preview", () => {
  for (const page of pages) {
    const html = read(page)
    assert.ok(attr(html, /<meta name="description" content="([^"]+)"/), `${page}: description`)
    assert.ok(attr(html, /<meta property="og:title" content="([^"]+)"/), `${page}: og:title`)
    assert.ok(attr(html, /<meta property="og:description" content="([^"]+)"/), `${page}: og:description`)
    assert.strictEqual(attr(html, /<meta name="twitter:card" content="([^"]+)"/), "summary_large_image", page)

    const image = attr(html, /<meta property="og:image" content="([^"]+)"/)
    assert.ok(image && image.startsWith(`${site.url}/`), `${page}: og:image must be absolute, got ${image}`)
    const local = path.join(OUT, image.slice(site.url.length + 1))
    assert.ok(fs.existsSync(local), `${page}: og:image ${image} is not in the export`)
  }
})

test("download buttons point at the release feed the app updates from", () => {
  const html = read("index.html")
  assert.ok(html.includes(`href="${site.downloads.mac}"`), "mac download")
  assert.ok(html.includes(`href="${site.downloads.windows}"`), "windows download")
  assert.ok(site.downloads.mac.includes("/DungeonDJ-Release/releases/latest/download/"))
  assert.ok(site.downloads.windows.includes("/DungeonDJ-Release/releases/latest/download/"))
  assert.ok(!html.includes("DungeonDJ-UI"), "stale DungeonDJ-UI link")
})

test("every page links to privacy and support", () => {
  for (const page of pages) {
    const html = read(page)
    assert.ok(html.includes('href="/privacy"'), `${page}: privacy link`)
    assert.ok(html.includes('href="/support"'), `${page}: support link`)
  }
})

test("privacy policy covers what the app collects", () => {
  const policy = article(read("privacy.html")).toLowerCase()
  const phrases = ["microphone", "fullstory", "sentry", "announcekit", "google", "patreon", "bug report", "ip address"]
  for (const phrase of [...phrases, "to delete your account"]) {
    assert.ok(policy.includes(phrase), `privacy policy should mention ${phrase}`)
  }
})

test("Discord and support email appear only when configured", () => {
  for (const page of ["index.html", "support.html"]) {
    const html = read(page)
    if (site.discordUrl) {
      assert.ok(html.includes(`href="${site.discordUrl}"`), `${page}: discord link`)
    } else {
      assert.ok(!/discord\.(gg|com)\//.test(html), `${page}: discord link without a configured URL`)
    }
  }
  const support = read("support.html")
  if (site.supportEmail) {
    assert.ok(support.includes(`href="mailto:${site.supportEmail}"`), "support email")
  } else {
    assert.ok(!support.includes("mailto:"), "mailto link without a configured address")
  }
})

test("demo video falls back to the tutorial playlist", () => {
  const html = read("index.html")
  const expected = site.demoVideoId
    ? `https://www.youtube-nocookie.com/embed/${site.demoVideoId}`
    : `https://www.youtube-nocookie.com/embed/videoseries?list=${site.tutorialPlaylistId}`
  assert.ok(html.includes(`src="${expected}"`), `video embed ${expected}`)
})

test("configured screenshots are rendered and exist", () => {
  const html = read("index.html")
  for (const shot of site.screenshots) {
    assert.ok(html.includes(`src="${shot.src}"`), `screenshot ${shot.src}`)
    assert.ok(fs.existsSync(path.join(OUT, shot.src)), `screenshot file ${shot.src}`)
  }
})

test("no template placeholder text ships", () => {
  for (const page of pages) {
    const html = read(page)
    assert.ok(!/lorem ipsum|next\.js starter/i.test(html), `${page}: template text`)
    assert.ok(html.includes('href="https://html5up.net"'), `${page}: CC BY 3.0 credit for the Dimension template`)
  }
})

test("every local image referenced by a page exists", () => {
  for (const page of pages) {
    const html = read(page)
    const attrs = [...html.matchAll(/(?:src|href)="\/?(static\/images\/[^"?#]+)"/g)]
    const styles = [...html.matchAll(/url\(["']?\/?(static\/images\/[^"')?#]+)/g)]
    const refs = [...attrs, ...styles].map((m) => m[1])
    assert.ok(refs.some((ref) => ref.endsWith("background.png")), `${page}: background image not found in CSS`)
    for (const ref of refs) {
      assert.ok(fs.existsSync(path.join(OUT, ref)), `${page}: missing ${ref}`)
    }
  }
})

let failed = 0
for (const { name, fn } of tests) {
  try {
    fn()
    console.log(`ok   ${name}`)
  } catch (e) {
    failed += 1
    console.log(`FAIL ${name}\n     ${e.message}`)
  }
}
console.log(`\n${tests.length - failed}/${tests.length} passed`)
process.exit(failed ? 1 : 0)
