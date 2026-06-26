'use client'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }} aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.06) 50%, rgba(6,182,212,0.05) 100%)',
            border: '1px solid rgba(37,99,235,0.15)',
          }}
        >
          {/* Background glows */}
          <div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animationDelay: '2s',
            }}
          />
          {/* Top border gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #2563EB, #7C3AED, transparent)' }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: '#2563EB',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Get started in 60 seconds
            </div>

            <h2
              id="cta-heading"
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Ready to automate{' '}
              <span className="gradient-text">your business?</span>
            </h2>

            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
              Join 10,000+ teams already saving hundreds of hours every month with FlowMind AI.
              Start for free — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
                }}
              >
                <span>Start for Free</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-1"
                style={{
                  color: 'var(--text-primary)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  background: 'rgba(37,99,235,0.05)',
                }}
                onClick={() => alert('Demo scheduling would open here in production')}
              >
                Schedule Demo
              </button>
            </div>

            <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
              Free plan · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}