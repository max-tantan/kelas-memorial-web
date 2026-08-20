import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { CHAPTERS, FINAL_COMMIT } from '../data/content'
import type { Chapter } from '../data/content'

function TypedText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, text.length, {
      duration: Math.min(1.4, 0.6 + text.length * 0.012),
      ease: 'linear',
      onUpdate: (v) => setShown(Math.round(v)),
      onComplete: () => setShown(text.length),
    })
    return () => controls.stop()
  }, [inView, text])

  return (
    <span ref={ref} className="typed">
      {text.slice(0, shown)}
      {shown < text.length && (
        <span className="typed__caret" aria-hidden="true" />
      )}
    </span>
  )
}

function CommitCard({ chapter, index }: { chapter: Chapter; index: number }) {
  const fromLeft = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, x: fromLeft ? -80 : 80, rotate: fromLeft ? -2 : 2 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="commit"
    >
      <div className={`commit__header commit__header--${chapter.color}`}>
        <span className="commit__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="commit__branch">{chapter.branch}</span>
        <span className="commit__year">{chapter.year}</span>
      </div>

      <div className="commit__body">
        <p className="commit__meta">
          commit <span className="commit__hash">{chapter.hash}</span>
          <span className="commit__date">{chapter.date}</span>
        </p>
        <p className="commit__meta">
          Author: PPLG 3 &lt;pplg3@smk.sch.id&gt;
        </p>

        <h3 className="commit__title">{chapter.title}</h3>

        <p className="commit__message">
          <TypedText text={chapter.message} />
        </p>

        <ul className="commit__changes">
          {chapter.changes.map((change, i) => (
            <motion.li
              key={change}
              initial={{ opacity: 0, x: fromLeft ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={change.startsWith('++') ? 'is-add' : 'is-del'}
            >
              <span className="commit__sign">
                {change.startsWith('++') ? '+' : '-'}
              </span>
              {change.slice(2)}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Timeline() {
  return (
    <section id="perjalanan" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">git log --oneline</span>
          <h2 className="section-title">
            Perjalanan <span className="text-yellow">3</span> Tahun
          </h2>
          <p className="section-desc">
            Tiga commit besar. Dari repo kosong sampai siap deploy. Geser ke
            bawah untuk membaca log perjalanan kelas kita — lengkap dengan
            semua perubahan yang pernah terjadi.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />

          {CHAPTERS.map((chapter, index) => (
            <div
              key={chapter.hash}
              className={`timeline__row ${
                index % 2 === 0 ? 'timeline__row--left' : 'timeline__row--right'
              }`}
            >
              <div className="timeline__dot" aria-hidden="true">
                {chapter.year.slice(-2)}
              </div>
              <CommitCard chapter={chapter} index={index} />
            </div>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
            className="final"
          >
            <div className="final__dot" aria-hidden="true">
              END
            </div>
            <div className="final__inner">
              <p className="final__prompt">
                <span className="final__dollar">$</span> git push origin
                kenangan
                <span className="final__cursor" aria-hidden="true" />
              </p>
              <h3 className="final__title">{FINAL_COMMIT.title}</h3>
              <p className="final__message">
                <TypedText text={FINAL_COMMIT.message} />
              </p>
              <p className="final__meta">
                {FINAL_COMMIT.hash} · {FINAL_COMMIT.branch} · {FINAL_COMMIT.date}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}