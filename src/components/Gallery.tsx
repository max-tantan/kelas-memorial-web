import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import galleryData from '../data/gallery.json'
import type { Polaroid } from '../data/types'

const GALLERY = galleryData.photos as Polaroid[]

function PolaroidCard({ photo, index }: { photo: Polaroid; index: number }) {
  const featured = Boolean(photo.featured)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: photo.rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 130, damping: 17, delay: (index % 3) * 0.08 }}
      className={`gallery__item ${featured ? 'gallery__item--featured' : ''}`}
    >
      <TiltCard className="polaroid">
        <div
          className="polaroid__photo"
          style={{ background: photo.color }}
          aria-hidden="true"
        >
          <span className="polaroid__emoji">{photo.emoji}</span>
          <span className="polaroid__flash">📸</span>
          {featured && <span className="polaroid__stamp">FAVORIT</span>}
        </div>
        <div className="polaroid__info">
          <p className="polaroid__file">{photo.file}</p>
          <p className="polaroid__caption">{photo.caption}</p>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="galeri" className="section gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">ls ./kenangan</span>
          <h2 className="section-title">
            Galeri <span className="text-red">Kenangan</span>
          </h2>
          <p className="section-desc">
            Snapshot-snapshot yang nggak akan pernah di-delete dari repo kami.
            Hover untuk melihat dari sisi lain.
          </p>
        </motion.div>
      </div>

      <div className="gallery-board">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((photo, index) => (
              <PolaroidCard key={photo.file} photo={photo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}