import { motion } from 'framer-motion'
import FlipCard from './FlipCard'
import { MEMBERS } from '../data/content'
import type { Member } from '../data/content'

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 18,
        delay: (index % 4) * 0.07,
      }}
    >
      <FlipCard
        className="roster__card"
        front={
          <div className="roster__front" style={{ background: member.color }}>
            <span className="roster__emoji" aria-hidden="true">
              {member.emoji}
            </span>
            <h3 className="roster__nick">{member.nickname}</h3>
            <p className="roster__role">{member.role}</p>
            <span className="roster__hint">hover balik kartu ↗</span>
          </div>
        }
        back={
          <div className="roster__back">
            <p className="roster__quote">“{member.quote}”</p>
            <p className="roster__realname">{member.name}</p>
          </div>
        }
      />
    </motion.div>
  )
}

export default function Roster() {
  return (
    <section id="anggota" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="sticker">git blame --who_runs_the_show</span>
          <h2 className="section-title">
            Anggota <span className="text-blue">Kelas</span>
          </h2>
          <p className="section-desc">
            Tiga puluh enam contributor dalam satu repo. Ini sebagian yang
            paling sering muncul di git log — hvover kartunya buat baca komentar
            mereka di codereview kehidupan.
          </p>
        </motion.div>

        <div className="roster">
          {MEMBERS.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="roster__more"
        >
          …dan{" "}
          <span className="roster__more-num">24 contributor</span> lainnya yang
          nggak muat di layar 💛
        </motion.p>
      </div>
    </section>
  )
}