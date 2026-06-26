'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { useToasts } from '@/components/ui/ToastProvider'
import { useAuth } from '@/components/auth/AuthProvider'


export default function SignInModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { signIn, isLoading: authLoading } = useAuth()
  const { pushToast } = useToasts()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [localSubmitting, setLocalSubmitting] = useState(false)

  useEffect(() => {
    if (!open) {
      setFieldError(null)
      setLocalSubmitting(false)
    }
  }, [open])

  const isSubmitting = localSubmitting || authLoading

  const titleId = 'signin-modal-title'
  const descId = 'signin-modal-desc'

  const validate = useMemo(() => {
    return () => {
      const e = email.trim()
      if (!e) return 'Email is required.'
      const looksEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
      if (!looksEmail) return 'Enter a valid email address.'
      if (!password) return 'Password is required.'
      if (password.length < 6) return 'Password must be at least 6 characters.'
      return null
    }
  }, [email, password])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFieldError(null)

    const err = validate()
    if (err) {
      setFieldError(err)
      return
    }

    setLocalSubmitting(true)
    await signIn({ email: email.trim(), password })
    pushToast({ variant: 'success', message: 'Welcome back to FlowMind AI' })
    setLocalSubmitting(false)
    onClose()
  }

  return (
    <Modal
      open={open}
      titleId={titleId}
      descriptionId={descId}
      onClose={() => {
        if (isSubmitting) return
        onClose()
      }}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 id={titleId} className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
              Sign in to FlowMind AI
            </h2>
            <p id={descId} className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              Demo-only authentication. Your login is stored locally.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign in modal"
            className="rounded-xl px-3 py-2 transition-all"
            style={{ color: 'var(--text-muted)', background: 'rgba(37,99,235,0.05)' }}
            disabled={isSubmitting}
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="signin-email" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}

            />

          </div>

          <div>
            <label htmlFor="signin-password" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}


            />
          </div>

          {fieldError && (
            <div
              role="alert"
              className="rounded-xl px-4 py-3 text-sm"
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.25)',
                color: '#dc2626',
              }}
            >
              {fieldError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', boxShadow: '0 8px 28px rgba(37,99,235,0.3)' }}
          >
            {isSubmitting ? 'Signing you in…' : 'Sign In'}
          </button>

          <div className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            By signing in, you agree to FlowMind AI terms. (Demo only)
          </div>
        </form>
      </div>
    </Modal>
  )
}

