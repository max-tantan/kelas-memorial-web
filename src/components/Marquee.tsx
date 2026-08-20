import { motion } from 'framer-motion'

type MarqueeProps = {
  items: string[]
  reverse?: boolean
  color?: string
  duration?: number
}

export default function Marquee({
  items,
  reverse = false,
  color = 'var(--yellow)',
  duration = 22,
}: MarqueeProps) {
  const row = [...items, ...items, ...items]

  return (
    <div className="marquee" style={{ background: color }}>
      <motion.div
        className="marquee__track"
        animate={{ x: reverse ? ['0%', '33%'] : ['0%', '-33%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
    </div>
  )
}