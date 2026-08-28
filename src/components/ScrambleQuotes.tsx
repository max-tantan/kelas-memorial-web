import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import quotesData from '../data/quotes.json'
import type { Quote } from '../data/types'

const QUOTES = quotesData.quotes as Quote[]

const CHARS = '!<>-_\\/[]{}—=+*^?#ABCXYZ0123456789'

function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text)
  const [decoded, setDecoded] = useState(0)

  useEffect(() => {
    let frame = 0
    const total = Math.max(text.length * 2, 24)
    const delay = 1_400 / total

    const id = setInterval(() => {
      frame += 1
      const reveal = Math.max(decoded, Math.round((frame / total) * text.length))
      setDecoded(reveal)

      const next = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < reveal) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplay(next)
      if (frame >= total) {
        setDisplay(text)
        setDecoded(text.length)
        clearInterval(id)
      }
    }, delay)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <span className="quote__text" aria-label={text}>
      {display}
    </span>
  )
}

const AUTO_NEXT_MS = 5_500

export default function ScrambleQuotes() {
  const [index, setIndex] = useState(0)
  const [runKey, setRunKey] = useState(0)
  const [advancing, setAdvancing] = useState(false)

  const quote = QUOTES[index]

  function go(next: number) {
    setIndex(((next % QUOTES.length) + QUOTES.length) % QUOTES.length)
    setAdvancing(true)
    setRunKey((k) => k + 1)
  }

  return (
    <section id="kutipan" className="section quotes-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">cat /dev/kenangan</span>
          <h2 className="section-title">
            Kutipan <span className="text-green">Kelas</span>
          </h2>
        </motion.div>

        <motion.div
          key={runKey}
          initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
          className="quote-card"
        >
          <span className="quote-card__pin" aria-hidden="true">
            📌
          </span>

          <blockquote className="quote-card__body">
            <ScrambleText text={quote.text} />
          </blockquote>

          <footer className="quote-card__foot">
            <span className="quote-card__source">— {quote.source}</span>
            <span className="quote-card__count">
              {index + 1}/{QUOTES.length}
            </span>
          </footer>

          <div className="quote-card__progress" aria-hidden="true">
            <motion.div
              key={`${runKey}-bar`}
              className="quote-card__progress-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTO_NEXT_MS / 1000, ease: 'linear' }}
              onAnimationComplete={() => {
                if (!advancing) go(index + 1)
                setAdvancing(false)
              }}
            />
          </div>
        </motion.div>

        <div className="quote-card__nav">
          <button
            type="button"
            className="brutal-btn"
            onClick={() => go(index - 1)}
          >
            ← prev
          </button>
          <button
            type="button"
            className="brutal-btn brutal-btn--ink"
            onClick={() => go(index + 1)}
          >
            next →
          </button>
        </div>
      </div>
    </section>
  )
}