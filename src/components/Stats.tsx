import { useEffect, useRef, useState } from 'react'
import { animate, useInView, motion } from 'framer-motion'
import { STATS, STAT_BARS } from '../data/content'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(value),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('id-ID')}
      {suffix}
    </span>
  )
}

const CARD_COLORS = ['brutal-card--yellow', 'brutal-card--red', 'brutal-card--blue', 'brutal-card--green']

export default function Stats() {
  return (
    <section id="statistik" className="stats">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head section-head--light"
        >
          <span className="sticker">$ sysinfo --kelas</span>
          <h2 className="section-title">
            Angka <span className="text-yellow">Kelas</span> Kami
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="terminal"
        >
          <div className="terminal__bar">
            <span className="terminal__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="terminal__title">sysinfo — PPLG3@2026</span>
            <span className="terminal__close">✕</span>
          </div>

          <div className="terminal__body">
            <p className="terminal__line">
              <span className="terminal__prompt">$</span> sysinfo --kelas
            </p>
            <p className="terminal__line terminal__line--dim">
              membaca memori kelas... berhasil
            </p>

            <div className="stats__grid">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ type: 'spring', stiffness: 140, damping: 16, delay: i * 0.08 }}
                  className={`brutal-card stats__card ${CARD_COLORS[i % CARD_COLORS.length]}`}
                >
                  <p className="stats__value">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="stats__label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="term-bars">
              {STAT_BARS.map((bar, i) => (
                <div key={bar.label} className="term-bar">
                  <div className="term-bar__head">
                    <span className="term-bar__label">{bar.label}</span>
                    <span className="term-bar__value">{bar.value}%</span>
                  </div>
                  <div className="term-bar__track">
                    <motion.div
                      className="term-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + i * 0.12 }}
                      style={{
                        background:
                          bar.value === 100
                            ? 'var(--green)'
                            : 'var(--yellow)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}