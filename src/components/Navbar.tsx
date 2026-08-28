import { motion } from 'framer-motion'
import navData from '../data/navbar.json'
import type { NavLink } from '../data/types'

const NAV_LINKS = navData.links as NavLink[]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="nav"
    >
      <div className="nav__bar">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-box">PPLG.3</span>
        </a>

        <nav className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <span className="nav__badge">MEMORIAL '26</span>
      </div>
    </motion.header>
  )
}