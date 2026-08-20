export const NAV_LINKS = [
  { label: 'Perjalanan', href: '#perjalanan' },
  { label: 'Statistik', href: '#statistik' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Pesan', href: '#pesan' },
]

export const HERO = {
  kicker: 'SEKOLAH MENENGAH KEJURUAN — PPLG',
  titleTop: 'XII PPLG 3',
  titleBottom: 'MEMORIAL',
  subtitle:
    'Tiga tahun, satu layar. Dari print("halo") pertama sampai deploy masa depan — semua kenangan di-commit di sini.',
  ctaPrimary: 'Lihat Perjalanan',
  ctaSecondary: 'Buka Galeri',
  stamp: 'MEMORIAL 2026',
}

export type Chapter = {
  year: string
  hash: string
  branch: string
  title: string
  date: string
  message: string
  changes: string[]
  color: 'yellow' | 'blue' | 'green' | 'red'
}

export const CHAPTERS: Chapter[] = [
  {
    year: 'KELAS 10',
    hash: '1a2b3c4',
    branch: 'main',
    title: 'INIT: kelas 10',
    date: '2023 – 2024',
    message:
      'Bab pertama. Muka-muka baru, nama-nama yang masih tertukar, dan HTML pertama yang belum paham bedanya <div> dan <span>. Semua masih rookie, dan itu justru serunya.',
    changes: [
      '++ 36 murid baru bergabung',
      '++ 1 wali kelas yang sabar',
      '++ mie instan stok awal (1 dus/kelas)',
      '++ print("halo dunia") pertama',
      '-- ketakutan tampil di depan kelas',
    ],
    color: 'yellow',
  },
  {
    year: 'KELAS 11',
    hash: '5d6e7f8',
    branch: 'dev',
    title: 'FEAT: kelas 11',
    date: '2024 – 2025',
    message:
      'Mulai serius: JavaScript, PHP, database, dan begadang demi deadline. Proyek kelompok pertama, PKL, lomba, sampai nongkrong di depan kelas sambil ngoding bareng.',
    changes: [
      '++ skill baru: JavaScript + database',
      '++ pengalaman PKL di dunia nyata',
      '++ proyek kelompok (dan drama deadline)',
      '++ teman begadang yang setia',
      '-- tidur siang yang teratur',
    ],
    color: 'blue',
  },
  {
    year: 'KELAS 12',
    hash: '9a0b1c2',
    branch: 'release',
    title: 'RELEASE: kelas 12',
    date: '2025 – 2026',
    message:
      'Bab terakhir. Fix bug terakhir, ujian, tugas akhir, dan persiapan menuju dunia nyata. Sedih sih, tapi lihat — kita akhirnya siap di-deploy.',
    changes: [
      '++ kelulusan & tugas akhir',
      '++ impian + rencana masa depan',
      '++ #include <kenangan>',
      '-- waktu di bangku sekolah',
      '-- alasan ketemu tiap hari',
    ],
    color: 'green',
  },
]

export const FINAL_COMMIT = {
  hash: 'e1e2e3f',
  branch: 'main → origin/kenangan',
  title: 'git push origin kenangan',
  date: 'Mei 2026',
  message:
    'Semua sudah ter-push. Repo kelas kita ditutup, tapi kenangannya nggak akan pernah di-delete.',
}

export const STATS = [
  { value: 36, suffix: '', label: 'murid satu angkatan' },
  { value: 3, suffix: '', label: 'tahun bersama' },
  { value: 1095, suffix: '+', label: 'hari saling menemani' },
  { value: 999, suffix: '+', label: 'kenangan & meme tak terduga' },
]

export const STAT_BARS = [
  { label: 'kenangan', value: 100 },
  { label: 'tawa & drama', value: 100 },
  { label: 'mie instan terpakai', value: 100 },
  { label: 'tidur saat pelajaran', value: 68 },
]

export type Polaroid = {
  file: string
  caption: string
  emoji: string
  color: string
  rotate: number
  featured?: boolean
}

export const GALLERY: Polaroid[] = [
  {
    file: 'mpls-2023.png',
    caption: 'MPLS — wajah masih polos',
    emoji: '🥱',
    color: '#ffd1dc',
    rotate: -3,
  },
  {
    file: 'pertama-ngoding.png',
    caption: 'HTML pertama: halaman "Kenalin Diri"',
    emoji: '💻',
    color: '#c9f2c7',
    rotate: 2,
  },
  {
    file: 'tugas-kelompok.jpg',
    caption: 'Drama deadline + mie instan',
    emoji: '🍜',
    color: '#fff3b0',
    rotate: -2,
  },
  {
    file: 'pkl-bareng.jpg',
    caption: 'PKL: pertama ngerasain kerja',
    emoji: '💼',
    color: '#b8e4f0',
    rotate: 3,
  },
  {
    file: 'nongkrong-ngoding.3gp',
    caption: 'Nongkrong sambil ngoding',
    emoji: '🛋️',
    color: '#dcd3ff',
    rotate: -4,
  },
  {
    file: 'lomba-11.jpg',
    caption: 'Lomba — kalah menang tetep makan',
    emoji: '🏆',
    color: '#ffd1dc',
    rotate: 2,
  },
  {
    file: 'foto-bersama-12.png',
    caption: 'Kelas 12, versi paling dewasa',
    emoji: '🎓',
    color: '#c9f2c7',
    rotate: -2,
  },
  {
    file: 'tugas-akhir.gif',
    caption: 'Tugas akhir: tidur? nanti dulu',
    emoji: '🔥',
    color: '#fff3b0',
    rotate: 3,
  },
  {
    file: 'kenangan-terakhir.jpg',
    caption: 'Yang terakhir, yang paling berat',
    emoji: '🫂',
    color: '#b8e4f0',
    rotate: -1,
    featured: true,
  },
]

export type Message = {
  author: string
  text: string
  color: string
  rotate: number
}

export const MESSAGES: Message[] = [
  {
    author: 'anon-01',
    text: 'Terima kasih sudah jadi teman gabut terbaik. Sampai jumpa di meetup alumni!',
    color: '#ffd1dc',
    rotate: -2,
  },
  {
    author: 'anon-02',
    text: 'Awalnya takut masuk kelas ini. Sekarang takut harus keluar. 😭',
    color: '#c9f2c7',
    rotate: 1,
  },
  {
    author: 'anon-03',
    text: 'Yang diinget bukan materi, tapi tawa pas deadline nempel.',
    color: '#fff3b0',
    rotate: -1,
  },
  {
    author: 'anon-04',
    text: 'Bang Wali, maaf kalau kami sering bikin begah. Kami sayang Bapak/Ibu!',
    color: '#b8e4f0',
    rotate: 2,
  },
  {
    author: 'anon-05',
    text: 'Semoga kita semua berhasil di commit masing-masing.',
    color: '#dcd3ff',
    rotate: -3,
  },
  {
    author: 'anon-06',
    text: 'Satu kelas, satu repo, satu cerita. Jangan lupa update status.',
    color: '#ffd1dc',
    rotate: 2,
  },
]

export const FOOTER = {
  line: 'console.log("sampai jumpa di commit berikutnya")',
  farewell: 'SELAMAT JALAN',
  class: 'PPLG 3',
  note: 'Dibuat dengan kopi & kenangan oleh murid-murid PPLG 3 — 2026',
}