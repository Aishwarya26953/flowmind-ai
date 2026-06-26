'use client'

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

type Toast = {
  id: string
  message: string
  variant: 'success' | 'error' | 'info'
}

type ToastContextValue = {
  toasts: Toast[]
  pushToast: (t: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const pushToast = useCallback(
    (t: Omit<Toast, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const toast: Toast = { ...t, id }
      setToasts((prev) => [...prev, toast])
      window.setTimeout(() => removeToast(id), 3200)
    },
    [removeToast]
  )

  const value = useMemo(() => ({ toasts, pushToast, removeToast }), [toasts, pushToast, removeToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToasts() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToasts must be used within ToastProvider')
  return ctx
}

export function ToastViewport() {
  const { toasts, removeToast } = useToasts()

  if (toasts.length === 0) return null

  return (
    <div
      aria-live="polite"
      aria-relevant="additions"
      className="fixed top-5 right-5 z-[70] flex flex-col gap-3 w-[min(420px,calc(100vw-24px))]"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="glass rounded-2xl p-4 border"
          style={{
            borderColor:
              t.variant === 'success'
                ? 'rgba(16,185,129,0.35)'
                : t.variant === 'error'
                  ? 'rgba(239,68,68,0.35)'
                  : 'rgba(37,99,235,0.25)',
            background:
              t.variant === 'success'
                ? 'rgba(16,185,129,0.08)'
                : t.variant === 'error'
                  ? 'rgba(239,68,68,0.08)'
                  : 'rgba(37,99,235,0.06)',
          }}
          role="status"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="text-sm" style={{ color: 'var(--text-primary)' }}>
              {t.message}
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => removeToast(t.id)}
              className="text-xs font-semibold px-2 py-1 rounded-lg transition-all"
              style={{ color: 'var(--text-muted)' }}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

