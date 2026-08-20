import { motion } from 'framer-motion'
import Marquee from './Marquee'
import { FOOTER } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <Marquee
        items={['SELAMAT JALAN', 'PPLG 3', 'SAMPAI JUMPA', 'KENANGAN TETAP ADA', 'GABUT FOREVER']}
        color="var(--red)"
        reverse
      />

      <div className="footer__main">
        <div className="container footer__inner">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="footer__code">
              <span className="footer__prompt">$</span> {FOOTER.line}
              <span className="footer__cursor" aria-hidden="true" />
            </p>

            <h2 className="footer__farewell">
              {FOOTER.farewell}{' '}
              <span className="text-yellow">{FOOTER.class}</span>
              <span className="footer__stamp" aria-hidden="true">
                ✓ DONE — repo ditutup
              </span>
            </h2>

            <p className="footer__note">{FOOTER.note}</p>

            <div className="footer__tags">
              <span className="sticker">#PPLG3</span>
              <span className="sticker">#Tahun2026</span>
              <span className="sticker">#SampaiJumpa</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>XII PPLG 3 © 2026</span>
          <span>
            <a href="#top">kembali ke atas ↑</a>
          </span>
        </div>
      </div>
    </footer>
  )
}