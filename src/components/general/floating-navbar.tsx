import { FloatingNav } from '../aceternity/floating-navbar'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'About', link: '/about' },
]

export default function FloatingNavbar() {
  return <FloatingNav navItems={navItems} />
}
