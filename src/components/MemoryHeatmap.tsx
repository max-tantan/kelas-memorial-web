import { motion } from 'framer-motion'
import heatmapData from '../data/heatmap.json'
import type { MemoryHeatmap } from '../data/types'

const GRID = heatmapData.grid as MemoryHeatmap
const LEVELS = heatmapData.levels
const MONTHS = heatmapData.months

const DAY_LABELS = ['SEN', '', 'RAB', '', 'JUM', '', '']

const LEVEL_LABEL = [
  'nggak ada kenangan tercatat',
  'kenangan biasa-biasa aja',
  'sehari penuh tawa',
  'kenangan legendary',
  'hari paling tak terlupakan 🔥',
]

const START = new Date(2023, 6, 3)

function dateFor(week: number, day: number) {
  const d = new Date(START)
  d.setDate(d.getDate() + week * 7 + day)
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function Cell({ level, week, day }: { level: number; week: number; day: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 22,
        delay: week * 0.03 + day * 0.012,
      }}
      className="heat__cell-wrap"
    >
      <motion.div
        whileHover={{ scale: 1.5, zIndex: 1 }}
        className={`heat__cell heat__cell--l${level}`}
        style={{ background: LEVELS[level] }}
      >
        <span className="heat__tooltip" role="tooltip">
          {dateFor(week, day)} · {LEVEL_LABEL[level]}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function MemoryHeatmap() {
  return (
    <section id="peta-kenangan" className="section heat">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">git log --graph --all --count=kenangan</span>
          <h2 className="section-title">
            Peta <span className="text-red">Kenangan</span>
          </h2>
          <p className="section-desc">
            Tiap kotak adalah satu hari di repo kehidupan kami. Semakin pekat
            warnanya, semakin keras tawanya. Hover untuk dengar cerita singkat.
          </p>
        </motion.div>

        <div className="heat__scroll">
          <div className="heatmap">
            <div className="heat__months" aria-hidden="true">
              <span />
              {MONTHS.map((m) => (
                <span
                  key={m.label}
                  className="heat__month"
                  style={{ gridColumnStart: m.col + 2 }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            <div className="heat__grid">
              {GRID.map((week, w) => (
                <div
                  key={w}
                  className={`heat__row heat__row--d${w}`}
                  aria-label={DAY_LABELS[w] || undefined}
                >
                  <span className="heat__day">{DAY_LABELS[w]}</span>
                  <div className="heat__week">
                    {week.map((level, d) => (
                      <Cell key={d} level={level} week={d} day={w} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="heat__legend">
          <span className="heat__legend-label">sedikit</span>
          <div className="heat__legend-swatch">
            {LEVELS.map((color, i) => (
              <span
                key={i}
                className="heat__cell"
                style={{ background: color }}
              />
            ))}
          </div>
          <span className="heat__legend-label">tak terlupakan</span>
        </div>
      </div>
    </section>
  )
}