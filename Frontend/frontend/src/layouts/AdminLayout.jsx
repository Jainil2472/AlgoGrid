import { useState } from 'react'
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

function Navigation({ closeMenu }) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    toast.success('You have been signed out.')
    closeMenu?.()
    navigate('/login')
  }

  return (
    <div className="flex h-full flex-col p-4">
      <NavLink to="/dashboard" className="flex items-center gap-2.5 px-2 py-2" onClick={closeMenu}>
        <span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-sm font-bold text-white">L</span>
        <span className="text-[15px] font-semibold tracking-[-0.03em] text-slate-950">LeadDesk <span className="font-medium text-slate-400">Mini</span></span>
      </NavLink>

      <nav className="mt-8 space-y-1" aria-label="Admin navigation">
        <NavLink
          to="/dashboard"
          onClick={closeMenu}
          className={({ isActive }) => `flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}
        >
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
      </nav>

      <button type="button" onClick={handleLogout} className="mt-auto flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-700">
        <LogOut size={18} /> Logout
      </button>
    </div>
  )
}

/** Consistent responsive frame for authenticated screens. */
function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white lg:block">
        <Navigation />
      </aside>

      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur lg:hidden">
        <span className="text-[15px] font-semibold tracking-[-0.03em] text-slate-950">LeadDesk <span className="font-medium text-slate-400">Mini</span></span>
        <button type="button" aria-label="Open navigation menu" className="grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={21} />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button type="button" className="absolute inset-0 bg-slate-950/30" aria-label="Close navigation menu" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="relative h-full w-72 bg-white shadow-2xl">
            <button type="button" aria-label="Close navigation menu" className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={19} />
            </button>
            <Navigation closeMenu={() => setIsMobileMenuOpen(false)} />
          </aside>
        </div>
      )}

      <main className="lg:pl-64"><Outlet /></main>
    </div>
  )
}

export default AdminLayout
