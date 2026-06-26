'use client'
import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#06b6d4' }}>
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about FlowMind AI.
          </p>
        </div>

        <dl className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: open === i ? 'rgba(6,182,212,0.3)' : 'var(--border-subtle)',
                boxShadow: open === i ? '0 0 24px rgba(6,182,212,0.1)' : 'none',
              }}
            >
              <dt>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: open === i ? 'rgba(6,182,212,0.15)' : 'rgba(37,99,235,0.06)',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke={open === i ? '#06b6d4' : 'var(--text-muted)'} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '200px' : '0' }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}