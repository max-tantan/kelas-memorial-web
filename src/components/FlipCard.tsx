import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { ReactNode } from 'react'

type FlipCardProps = {
  front: ReactNode
  back: ReactNode
  className?: string
  magnetic?: number
}

export default function FlipCard({
  front,
  back,
  className,
  magnetic = 6,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const tx = useSpring(
    useTransform(px, [0, 1], [-magnetic, magnetic]),
    { stiffness: 260, damping: 22 },
  )
  const ty = useSpring(
    useTransform(py, [0, 1], [-magnetic, magnetic]),
    { stiffness: 260, damping: 22 },
  )

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function onPointerLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: tx, y: ty }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((v) => !v)
        }
      }}
    >
      <motion.div
        className="flip"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip__face flip__face--front">{front}</div>
        <div className="flip__face flip__face--back">{back}</div>
      </motion.div>
    </motion.div>
  )
}