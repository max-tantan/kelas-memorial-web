import { motion } from 'framer-motion'
import messagesData from '../data/messages.json'
import type { Message } from '../data/types'

const MESSAGES = messagesData.messages as Message[]

export default function Messages() {
  return (
    <section id="pesan" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">cat kesan-pesan.txt</span>
          <h2 className="section-title">
            Kesan & <span className="text-blue">Pesan</span>
          </h2>
          <p className="section-desc">
            Sticky notes dari murid-murid yang nggak sempat nulis buku kenangan.
          </p>
        </motion.div>

        <div className="messages">
          {MESSAGES.map((message, index) => (
            <motion.div
              key={message.author}
              initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: message.rotate, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 16,
                delay: (index % 3) * 0.06,
              }}
              className="messages__item"
            >
              <div
                className="note"
                style={{ background: message.color }}
              >
                <p className="note__text">{message.text}</p>
                <p className="note__author">— {message.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}