'use client'

const COMPANIES = [
  { name: 'NovaTech',   icon: '◈' },
  { name: 'SkyLabs',    icon: '◉' },
  { name: 'QuantumX',   icon: '⬡' },
  { name: 'FutureSoft', icon: '◎' },
  { name: 'CloudAxis',  icon: '◐' },
  { name: 'PixelCore',  icon: '▣' },
  { name: 'NexaScale',  icon: '◈' },
  { name: 'Loopify',    icon: '◉' },
]

const doubled = [...COMPANIES, ...COMPANIES]

export default function TrustedCompanies() {
  return (
    <section className="py-20 overflow-hidden" aria-label="Trusted by companies">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--text-muted)' }}>
          Trusted by engineers at world-class companies
        </p>
      </div>

      {/* Divider */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }}
        />

        <div className="flex animate-scroll-left items-center" style={{ width: 'max-content' }}>
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-6 px-7 py-3.5 rounded-2xl whitespace-nowrap transition-all duration-200"
              style={{
                border: '1px solid rgba(37,99,235,0.12)',
                background: 'rgba(255, 255, 255, 0.8)',
                minWidth: 140,
              }}
            >
              <span className="text-base" style={{ color: 'rgba(37,99,235,0.6)' }}>{c.icon}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-4xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {[
            { num: '500K+', desc: 'Active Workflows' },
            { num: '4.9/5', desc: 'Average Rating' },
            { num: '< 200ms', desc: 'Avg. Response Time' },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-2xl md:text-3xl font-black mb-1 gradient-text-brand">{s.num}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}