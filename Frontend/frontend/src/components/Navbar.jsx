import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

/** Public-site navigation with an accessible, compact mobile menu. */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-100 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-lg">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          onClick={closeMenu}
        >
          <span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-sm font-bold tracking-tight text-white shadow-sm shadow-blue-600/30 transition-transform duration-200 group-hover:-rotate-3">
            L
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.03em] text-slate-950">
            LeadDesk <span className="font-medium text-slate-400">Mini</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950 focus:outline-none focus:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Admin login
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-slate-700 transition-colors hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-blue-600 md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-slate-50 px-5 pb-5 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/login"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              onClick={closeMenu}
            >
              Admin login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
