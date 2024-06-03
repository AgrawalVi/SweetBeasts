import { FloatingNav } from '../aceternity/floating-navbar'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]

export default function FloatingNavbar() {
  return (
    <FloatingNav navItems={navItems} />
    // <div className="sticky top-2 left-0 right-0">
    //   <div className="absolute left-0 right-0 text-center"></div>
    // </div>
  )
}
