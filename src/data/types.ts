export type NavLink = {
  label: string
  href: string
}

export type HeroContent = {
  kicker: string
  titleTop: string
  titleBottom: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
  stamp: string
  marquee: string[]
}

export type Chapter = {
  year: string
  hash: string
  branch: string
  title: string
  date: string
  message: string
  changes: string[]
  color: string
}

export type FinalCommit = {
  hash: string
  branch: string
  title: string
  date: string
  message: string
}

export type Stat = {
  value: number
  suffix: string
  label: string
}

export type StatBar = {
  label: string
  value: number
}

export type Member = {
  name: string
  nickname: string
  emoji: string
  role: string
  quote: string
  color: string
}

export type HeatmapLevels = string[]

export type HeatmapMonth = {
  label: string
  col: number
}

export type MemoryHeatmap = number[][]

export type Polaroid = {
  file: string
  caption: string
  emoji: string
  color: string
  rotate: number
  featured?: boolean
}

export type Quote = {
  text: string
  source: string
}

export type Message = {
  author: string
  text: string
  color: string
  rotate: number
}

export type TerminalCommands = Record<string, string[]>

export type FooterContent = {
  line: string
  farewell: string
  class: string
  note: string
  marquee: string[]
}