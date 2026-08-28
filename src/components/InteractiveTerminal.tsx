import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  TERMINAL_BOOT,
  TERMINAL_CMD,
  TERMINAL_FALLBACK,
} from '../data/content'

type Line = {
  text: string
  kind: 'cmd' | 'out'
}

const PROMPT = 'pplg3@memorial:~$'

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(
    TERMINAL_BOOT.map((text) => ({ text, kind: 'out' })),
  )
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase()
    setLines((l) => [...l, { text: raw.trim(), kind: 'cmd' }])
    setValue('')
    setHistory((h) => [raw.trim(), ...h])
    setHistoryIndex(-1)

    if (cmd === 'clear') {
      setTimeout(() => setLines([]), 50)
      return
    }

    const output = TERMINAL_CMD[cmd] ?? TERMINAL_FALLBACK
    output.forEach((text, i) => {
      setTimeout(() => {
        setLines((l) => [...l, { text, kind: 'out' }])
      }, 140 * (i + 1))
    })
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (value.trim()) runCommand(value)
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(historyIndex + 1, history.length - 1)
      if (next >= 0) {
        setHistoryIndex(next)
        setValue(history[next])
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = historyIndex - 1
      setHistoryIndex(next < 0 ? -1 : next)
      setValue(next < 0 ? '' : history[next])
    }
  }

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">./main.sh --interactive</span>
          <h2 className="section-title">
            Terminal <span className="text-yellow">Kenangan</span>
          </h2>
          <p className="section-desc">
            Jangan cuma baca — coba ketik! Ini mesin waktu yang bisa bicara.
            Mulai dengan{' '}
            <code className="inline-code">help</code> atau{" "}
            <code className="inline-code">kenangan</code>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="terminal live-term"
        >
          <div className="terminal__bar">
            <span className="terminal__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="terminal__title">kenangan@memorial — bash</span>
            <span className="terminal__close">✕</span>
          </div>

          <div
            ref={scrollRef}
            className="terminal__body live-term__body"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) =>
              line.kind === 'cmd' ? (
                <motion.p
                  key={`${i}-${line.text}`}
                  className="terminal__line live-term__line"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="terminal__prompt">{PROMPT}</span> {line.text}
                </motion.p>
              ) : (
                <motion.p
                  key={`${i}-${line.text}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="terminal__line live-term__line--out"
                >
                  {line.text}
                </motion.p>
              ),
            )}

            <form
              className="live-term__input-row"
              onSubmit={(e) => {
                e.preventDefault()
                if (value.trim()) runCommand(value)
              }}
            >
              <span className="terminal__prompt">{PROMPT}</span>
              <input
                ref={inputRef}
                className="live-term__input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="perintah terminal kenangan"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}