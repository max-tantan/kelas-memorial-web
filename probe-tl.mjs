import { chromium } from 'playwright-core'

const exe = '/home/fatanala/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell'
const browser = await chromium.launch({ executablePath: exe })

for (const width of [1440, 1024, 900, 800, 500]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  const out = await page.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    const timeline = document.querySelector('.timeline')
    timeline.scrollIntoView({ block: 'start', behavior: 'instant' })
    await wait(1200)
    return [...document.querySelectorAll('.timeline__row')].map((row) => {
      const r = row.getBoundingClientRect()
      const card = row.querySelector('.commit').getBoundingClientRect()
      const line = document.querySelector('.timeline__line').getBoundingClientRect()
      return {
        cls: row.className,
        rowLeft: Math.round(r.left),
        cardLeft: Math.round(card.left),
        cardRight: Math.round(card.right),
        lineX: Math.round(line.left + line.width / 2),
        side: card.center < line.left + line.width / 2 ? 'LEFT' : 'RIGHT',
      }
    })
  })
  console.log(`width=${width}:`, JSON.stringify(out))
  await page.close()
}
await browser.close()