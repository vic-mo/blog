interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Wallpaper Symmetry',
    description: `An interactive wallpaper collection exploring symmetry patterns and designs.
    Browse through various wallpapers showcasing different symmetry groups and mathematical patterns.`,
    imgSrc: '/static/images/wallpapers.png',
    href: 'https://wallpapers.vicmo.xyz',
  },
  {
    title: 'Monkey Language Interpreter',
    description: `A complete implementation of the Monkey programming language from monkeylang.org,
    featuring an online playground where you can write and execute Monkey code directly in your browser.`,
    imgSrc: '/static/images/monkey-lang.png',
    href: 'https://monkey.vicmo.xyz',
  },
  {
    title: 'CHIP-8 Emulator',
    description: `A web-based CHIP-8 emulator built with Vue.js and WebAssembly. Features a library of 99+ games,
    custom ROM upload, speed controls, and runs classic CHIP-8 programs directly in your browser.`,
    imgSrc: '/static/images/chip8.png',
    href: 'https://chip8.vicmo.xyz',
  },
]

export default projectsData
