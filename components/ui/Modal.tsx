'use client'

import React, { useEffect, useMemo, useRef } from 'react'

export function Modal({
  open,
  titleId,
  descriptionId,
  onClose,
  children,
}: {
  open: boolean
  titleId: string
  descriptionId?: string
  onClose: () => void
  children: React.ReactNode
}) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const lastActiveEl = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    lastActiveEl.current = document.activeElement as HTMLElement | null
    const t = window.setTimeout(() => {
      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelector<HTMLElement>(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      )
      focusable?.focus()
    }, 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'))

      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (open) return
    lastActiveEl.current?.focus?.()
  }, [open])

  const content = useMemo(() => {
    if (!open) return null
    return (
      <div
        className="fixed inset-0 z-[60]"
        role="presentation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(6px)' }} />
        <div className="relative min-h-full flex items-center justify-center p-6">
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="w-full max-w-lg glass rounded-[22px] border"
            style={{ borderColor: 'rgba(37,99,235,0.2)' }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }, [open, children, descriptionId, onClose, titleId])

  return content
}

