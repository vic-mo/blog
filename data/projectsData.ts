interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Chess Engine',
    description: `A fully-featured chess engine that you can play against directly in your browser.`,
    imgSrc: '/static/images/chess.png',
    href: 'https://chess.vicmo.xyz',
  },
  {
    title: 'Monkey Language Interpreter & Compiler',
    description: `A complete implementation of the Monkey programming language from monkeylang.org,
    featuring an online playground where you can write and execute Monkey code directly in your browser.`,
    imgSrc: '/static/images/monkey-lang.png',
    href: 'https://monkey.vicmo.xyz',
  },
  {
    title: 'Wallpaper Symmetry',
    description: `An interactive wallpaper collection exploring symmetry patterns and designs.
    Browse through various wallpapers showcasing different symmetry groups and mathematical patterns.`,
    imgSrc: '/static/images/wallpapers.png',
    href: 'https://wallpapers.vicmo.xyz',
  },
  {
    title: 'CHIP-8 Emulator',
    description: `A CHIP-8 emulator built with Rust, Vue.js and WebAssembly. Features multiple games,
    custom ROM upload, speed controls, and runs classic CHIP-8 programs directly in your browser.`,
    imgSrc: '/static/images/chip8.png',
    href: 'https://chip8.vicmo.xyz',
  },
  {
    title: 'Enigma M4 Machine',
    description: `An interactive Enigma M4 machine simulator. Configure the four rotors and plugboard settings
    to encrypt and decrypt messages.`,
    imgSrc: '/static/images/enigma.png',
    href: 'https://enigma.vicmo.xyz',
  },
]

export default projectsData
