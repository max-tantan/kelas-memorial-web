export const NAV_LINKS = [
  { label: 'Perjalanan', href: '#perjalanan' },
  { label: 'Anggota', href: '#anggota' },
  { label: 'Statistik', href: '#statistik' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Pesan', href: '#pesan' },
  { label: 'Terminal', href: '#terminal' },
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

export type Member = {
  name: string
  nickname: string
  emoji: string
  role: string
  quote: string
  color: string
}

export const MEMBERS: Member[] = [
  {
    name: 'Arif Darmawan',
    nickname: 'ARIF',
    emoji: '👨‍💻',
    role: 'fullstack gabut',
    quote: 'mie instan itu bahasa pemrograman tingkat tinggi',
    color: 'var(--note-yellow)',
  },
  {
    name: 'Bella Safitri',
    nickname: 'BELLA',
    emoji: '🎨',
    role: 'ui/ux accidental',
    quote: 'satu pixel geser dikit aja, bentar lagi deadline',
    color: 'var(--note-pink)',
  },
  {
    name: 'Candra Wijaya',
    nickname: 'CANDRA',
    emoji: '🎧',
    role: 'audio engineering nggak jelas',
    quote: 'playlist-nya nangis, ketikannya error terus',
    color: 'var(--note-blue)',
  },
  {
    name: 'Dewi Lestari',
    nickname: 'DEWI',
    emoji: '📊',
    role: 'data analyst dadakan',
    quote: 'diukur? nggak. kira-kira? iya.',
    color: 'var(--note-green)',
  },
  {
    name: 'Eko Prasetyo',
    nickname: 'EKO',
    emoji: '🤖',
    role: 'bot whisperer',
    quote: 'aku nggak ngoding, aku ngobrol sama mesin',
    color: 'var(--note-lilac)',
  },
  {
    name: 'Fitri Handayani',
    nickname: 'FITRI',
    emoji: '📱',
    role: 'mobile dev (iya, nanti jadi)',
    quote: 'aplikasinya jalan… di mimpi',
    color: 'var(--note-pink)',
  },
  {
    name: 'Galih Ramadhan',
    nickname: 'GALIH',
    emoji: '🕹️',
    role: 'game dev calon',
    quote: 'bug bukan bug, itu fitur tersembunyi',
    color: 'var(--note-yellow)',
  },
  {
    name: 'Hana Kartika',
    nickname: 'HANA',
    emoji: '🔍',
    role: 'tester rela bayar',
    quote: 'aku bukan nge-bug report, aku nulis novel',
    color: 'var(--note-green)',
  },
  {
    name: 'Ilham Nugroho',
    nickname: 'ILHAM',
    emoji: '☕',
    role: 'kopi + debugger',
    quote: 'kopinya habis, errornya nyangkut',
    color: 'var(--note-blue)',
  },
  {
    name: 'Joko Santoso',
    nickname: 'JOKO',
    emoji: '😴',
    role: 'bangunin backend',
    quote: 'server tidur, aku ikut tidur',
    color: 'var(--note-lilac)',
  },
  {
    name: 'Kirana Putri',
    nickname: 'KIRANA',
    emoji: '🌟',
    role: 'galeri & foto',
    quote: 'tiap frame = 1 kenangan ter-backup',
    color: 'var(--note-pink)',
  },
  {
    name: 'Lukman Hakim',
    nickname: 'LUKMAN',
    emoji: '🛠️',
    role: 'tukang rapihin code',
    quote: 'rapihin dulu biar nggak pusing besok',
    color: 'var(--note-yellow)',
  },
]

export type MemoryCell = {
  date: string
  level: number
}

export const HEATMAP_LEVELS = [
  'var(--paper)',
  'var(--note-green)',
  'var(--note-blue)',
  'var(--yellow)',
  'var(--red)',
]

export const HEATMAP_MONTHS = [
  { label: 'JUL', col: 0 },
  { label: 'NOV', col: 3 },
  { label: 'MAR', col: 7 },
  { label: 'JUL', col: 10 },
  { label: 'NOV', col: 13 },
  { label: 'MAR', col: 16 },
  { label: 'JUL', col: 19 },
  { label: 'NOV', col: 22 },
  { label: 'JAN', col: 23 },
  { label: 'MEI', col: 25 },
]

export const MEMORY_HEATMAP: number[][] = [
  [0, 0, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 2, 3, 3, 2, 2, 1],
  [0, 1, 2, 1, 2, 3, 2, 2, 3, 2, 2, 3, 2, 1, 2, 3, 3, 2, 3, 2, 2, 4, 4, 3, 3, 2],
  [0, 1, 2, 3, 4, 3, 3, 2, 3, 3, 2, 3, 3, 2, 1, 2, 3, 3, 4, 3, 3, 3, 4, 4, 3, 3],
  [1, 2, 3, 4, 4, 4, 3, 3, 3, 2, 3, 4, 4, 3, 2, 2, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3],
  [1, 2, 3, 3, 4, 4, 3, 2, 2, 3, 2, 3, 3, 2, 2, 3, 3, 3, 4, 4, 3, 3, 4, 4, 3, 3],
  [1, 2, 2, 3, 3, 3, 2, 2, 2, 1, 2, 2, 3, 2, 1, 2, 3, 3, 3, 3, 2, 3, 4, 3, 3, 2],
  [0, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 3, 3, 2, 2],
]

export type Quote = {
  text: string
  source: string
}

export const QUOTES: Quote[] = [
  {
    text: 'Deadline itu yang bikin kami akrab — siapa sangka takut jadi cinta.',
    source: 'anon #7',
  },
  {
    text: 'Mie instan kami bisa, JavaScript kami bisa — hidup memang penuh pilihan sulit.',
    source: 'anon #4',
  },
  {
    text: 'Tiga tahun terasa cepat. Mungkin karena streaming-nya nggak pernah buffering.',
    source: 'anon #2',
  },
  {
    text: 'Kelas ini bukan cuma kelas, tapi stack yang paling sulit di-uninstall.',
    source: 'anon #9',
  },
  {
    text: 'Kalau kenangan di-deploy, server mana yang sanggup?',
    source: 'anon #1',
  },
  {
    text: 'Sampai ketemu di commit berikutnya — jangan lupa git pull sahabat lama.',
    source: 'anon #12',
  },
]

export const TERMINAL_BOOT = [
  'PPLG3@memorial:~$ nc kenangan.local 8080',
  'membuka koneksi ke server kenangan...',
  'handshake OK · cipher: mieinstan-256',
  'selamat datang di Memorial XII PPLG 3',
  'ketik "help" untuk daftar perintah.',
]

export const TERMINAL_CMD: Record<string, string[]> = {
  help: [
    'perintah yang tersedia:',
    '  ls        · daftar folder kenangan',
    '  kenangan  · ambil 1 kenangan acak',
    '  mie       · status stok mie instan',
    '  wali      · info wali kelas',
    '  member    · jumlah anggota kelas',
    '  nasihat   · nasihat dadakan',
    '  whoami    · jati diri sejati',
    '  clear     · bersihkan layar',
    '  exit      · tutup sesi (tapi jangan, ya)',
  ],
  ls: [
    'drwxr-xr-x kenangan/',
    'drwxr-xr-x mpls/',
    'drwxr-xr-x pkl/',
    'drwxr-xr-x lomba/',
    'drwxr-xr-x deadline/',
    'drwxr-xr-x mie-instan/',
    '-rw------- tugas-akhir.tmp',
  ],
  kenangan: [
    'memutar kenangan acak...',
    '📼 2024, Pak Guru bilang "kumpulin 2 minggu lagi",',
    '   kami semua kumpul jam 23.59 malemnya.',
    '   Server selamat. Nyawa kami hampir nggak.',
  ],
  mie: [
    'stok mie instan: 100% 🔥',
    'sejak kelas 10, janji makan sehat: nggak pernah ter-commit.',
  ],
  wali: [
    'wali kelas: manusia paling sabar di repo ini',
    'status: sering begah, tapi nggak pernah push bilang capek.',
  ],
  member: ['36 murid. 1 repo. 0 yang mau terpisah.'],
  nasihat: [
    'nasihat hari ini:',
    'jangan lupa makan, jangan lupa solat,',
    'dan jangan commit kalau nggak kenyang.',
  ],
  whoami: ['kamu: kenangan yang belum selesai diceritakan.'],
  exit: ['sesi nggak bisa ditutup. kenangan nggak punya tombol close.'],
}

export const TERMINAL_FALLBACK = [
  'perintah tidak dikenal. coba "help".',
  '(atau ketik "mie" kalau lagi laper, jangan tanya kenapa)',
]