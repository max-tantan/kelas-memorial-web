import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import Marquee from './Marquee'
import { HERO } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
} as const

const item = {
  hidden: { y: 60, opacity: 0, rotate: -3 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 220, damping: 20 },
  },
} as const

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__canvas" aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 9], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      <div className="hero__content container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero__inner"
        >
          <motion.div variants={item}>
            <span className="sticker">{HERO.kicker}</span>
          </motion.div>

          <motion.h1 variants={item} className="hero__title">
            <span className="hero__title-line hero__title-line--yellow">
              {HERO.titleTop}
            </span>
            <span className="hero__title-line hero__title-line--ink">
              {HERO.titleBottom}
              <span className="hero__stamp">{HERO.stamp}</span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="hero__subtitle">
            {HERO.subtitle}
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#perjalanan" className="brutal-btn">
              ↓ {HERO.ctaPrimary}
            </a>
            <a href="#galeri" className="brutal-btn brutal-btn--ink">
              {HERO.ctaSecondary}
            </a>
          </motion.div>

          <motion.p variants={item} className="hero__hint">
            scroll untuk membuka repo kenangan
          </motion.p>
        </motion.div>
      </div>

      <Marquee
        items={[
          'XII PPLG 3',
          '2023 — 2026',
          'GABUT KELAS',
          'NGODING',
          'MIE INSTAN',
          'DEADLINE',
          'PPLG FOREVER',
        ]}
      />
    </section>
  )
}