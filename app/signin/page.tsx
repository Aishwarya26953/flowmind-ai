'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            <span className="text-white font-black text-xs">FM</span>
          </div>
          <span className="font-bold text-base tracking-tight" style={{ color: 'var(--text-primary)' }}>FlowMind</span>
        </Link>

        <div
          className="glass rounded-[20px] p-8"
          style={{ border: '1px solid var(--border-subtle)', boxShadow: '0 24px 80px rgba(37,99,235,0.1)' }}
        >
          <h1 className="text-2xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>Welcome back</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>Sign in to your FlowMind AI account</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', boxShadow: '0 8px 28px rgba(37,99,235,0.3)' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs mt-6" style={{ color: 'var(--text-muted)' }}>
            Don&#39;t have an account? <Link href="#pricing" className="font-semibold" style={{ color: '#2563EB' }}>Start free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}