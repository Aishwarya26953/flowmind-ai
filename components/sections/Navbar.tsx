'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useScrolled } from '@/hooks'
import SignInModal from '@/components/auth/SignInModal'
import { useAuth } from '@/components/auth/AuthProvider'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] || 'F'
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : ''
  return (first + last).toUpperCase()
}

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const [signinOpen, setSigninOpen] = useState(false)

  const { user, signOut } = useAuth()

  const avatarText = useMemo(() => (user ? initialsFromName(user.name) : 'FM'), [user])

  const openSignin = () => setSigninOpen(true)
  const closeSignin = () => setSigninOpen(false)

  const handleNavActionClick = () => {
    setOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 40px rgba(37, 99, 235, 0.08)' : 'none',
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="FlowMind AI home">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden transition-transform duration-200 group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            <span className="text-white font-black text-xs tracking-tight relative z-10">FM</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-base tracking-tight" style={{ color: 'var(--text-primary)' }}>
              FlowMind
            </span>
            <span className="text-[10px] font-semibold tracking-widest" style={{ color: '#2563EB' }}>
              AI
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)'
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <a
                href="#dashboard"
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)'
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Dashboard
              </a>
              <button
                type="button"

                className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(37,99,235,0.06)',
                  border: '1px solid rgba(37,99,235,0.15)',
                  color: 'var(--text-primary)',
                }}
                aria-label="User avatar"
                onClick={() => {
                  // no dropdown in demo
                }}
              >
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full font-black text-xs"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', color: 'white' }}
                >
                  {avatarText}
                </span>
                <span className="text-sm font-semibold hidden lg:inline">{user.name.split(' ')[0]}</span>
              </button>
              <button
                type="button"
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onClick={() => signOut()}
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onClick={openSignin}
                aria-label="Open sign in"
              >
                Sign In
              </button>
              <a
                href="#pricing"
                className="relative text-sm font-semibold px-5 py-2.5 rounded-xl text-white overflow-hidden group transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
                }}
              >
                <span className="relative z-10">Get Started</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                />
              </a>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300 origin-center"
              style={{
                width: i === 1 ? (open ? '20px' : '14px') : '20px',
                background: scrolled || open ? 'var(--text-primary)' : 'var(--text-primary)',
                transform:
                  i === 0 ? (open ? 'translateY(6px) rotate(45deg)' : 'none') :
                  i === 2 ? (open ? 'translateY(-6px) rotate(-45deg)' : 'none') : 'none',
                opacity: i === 1 ? (open ? 0 : 1) : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '340px' : '0',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: open ? '1px solid rgba(37, 99, 235, 0.1)' : 'none',
        }}
      >
        <ul className="px-6 py-5 flex flex-col gap-1" role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onClick={handleNavActionClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)'
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            </li>
          ))}

          <li className="pt-3 mt-2 border-t" style={{ borderColor: 'rgba(37, 99, 235, 0.1)' }}>
            {user ? (
              <a
                href="#dashboard"
                className="block text-center text-sm font-semibold px-5 py-3 rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                onClick={() => setOpen(false)}
              >
                Dashboard
              </a>
            ) : (
              <button
                type="button"
                className="block w-full text-center text-sm font-semibold px-5 py-3 rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                onClick={() => {
                  setOpen(false)
                  openSignin()
                }}
                aria-label="Open sign in modal"
              >
                Get Started Free
              </button>
            )}
          </li>
        </ul>
      </div>

      <SignInModal open={signinOpen} onClose={closeSignin} />
    </header>
  )
}

