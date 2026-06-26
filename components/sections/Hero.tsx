'use client'
import { useMouseParallax } from '@/hooks'
import Link from 'next/link'

const STATS = [
  { value: '500K+', label: 'Automated Workflows', color: '#2563EB' },
  { value: '120+',  label: 'Countries',           color: '#7C3AED' },
  { value: '99.99%', label: 'Platform Uptime',    color: '#10b981' },
  { value: '10M+',  label: 'Tasks Automated',     color: '#f59e0b' },
]

export default function Hero() {
  const mouse = useMouseParallax(0.022)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
      aria-label="Hero section"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{ background: 'var(--gradient-hero)', backgroundSize: '300% 300%' }}
        />
        {/* Glows */}
        <div className="glow-orb animate-pulse-glow" style={{ width: 700, height: 700, top: '-15%', left: '-12%', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)' }} />
        <div className="glow-orb animate-pulse-glow" style={{ width: 550, height: 550, bottom: '-5%', right: '-8%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)', animationDelay: '2.5s' }} />
        <div className="glow-orb animate-pulse-glow" style={{ width: 350, height: 350, top: '45%', left: '48%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)', animationDelay: '1.2s' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />
      </div>

      {/* ── Parallax floating cards ── */}
      {[
        { top: '17%', left: '5%',  mx: -1.5, my: -1.3, icon: '⚡', label: 'Workflows Today', value: '+3.2k runs', color: '#2563EB', delay: '0s' },
        { top: '24%', right: '5%', mx: 1.6,  my: -1.1, icon: '🤖', label: 'AI Accuracy',     value: '99.1%',    color: '#7C3AED', delay: '0.8s' },
        { bottom: '24%', left: '4%', mx: -1.2, my: 1.4, icon: '📊', label: 'Reports Built',  value: '1,847',    color: '#06B6D4', delay: '1.6s' },
        { bottom: '22%', right: '4%', mx: 1.3, my: 1.5, icon: '🔒', label: 'Security Score', value: 'A+ SOC2',  color: '#10b981', delay: '0.4s' },
      ].map((card, i) => (
        <div
          key={i}
          className="absolute hidden lg:block"
          style={{
            top: card.top, left: card.left, right: card.right, bottom: card.bottom,
            transform: `translate(${mouse.x * card.mx}px, ${mouse.y * card.my}px)`,
            transition: 'transform 120ms linear',
          }}
        >
          <FloatingCard {...card} />
        </div>
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 animate-fade-up"
          style={{
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.2)',
            color: '#2563EB',
            animationDelay: '0.05s',
            opacity: 0,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2563EB', boxShadow: '0 0 8px #2563EB' }} />
          Introducing FlowMind AI 2.0 — Now with Predictive Intelligence
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black leading-[1.04] tracking-[-0.03em] mb-6 animate-fade-up"
          style={{ animationDelay: '0.18s', opacity: 0 }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Automate Smarter</span>
          <br />
          <span className="gradient-text">with FlowMind AI</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ color: 'var(--text-secondary)', animationDelay: '0.33s', opacity: 0, lineHeight: 1.75 }}
        >
          Build AI-powered workflows, automate repetitive tasks, connect your tools,
          and gain intelligent insights—all from one unified platform.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.48s', opacity: 0 }}
        >
          <Link
            href="/signin"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-semibold text-[0.95rem] overflow-hidden transition-all duration-200 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', boxShadow: '0 4px 32px rgba(37,99,235,0.35)' }}
          >
            <span className="relative z-10">Start Free</span>
            <svg className="relative z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />
          </Link>
          <button
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-[0.95rem] transition-all duration-200 hover:-translate-y-1"
            style={{ color: 'var(--text-primary)', border: '1px solid rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.05)' }}
            onClick={() => alert('Demo video would play here in production')}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M7 6l6 3-6 3V6z" fill="currentColor" />
            </svg>
            Watch Demo
          </button>
          <Link
            href="/signin"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[0.95rem] transition-all duration-200 hover:-translate-y-1"
            style={{ color: 'var(--text-secondary)', border: '1px solid rgba(37,99,235,0.15)', background: 'rgba(255,255,255,0.5)' }}
          >
            Book Demo
          </Link>
        </div>

        {/* Trust line */}
        <p
          className="mt-7 text-sm animate-fade-up"
          style={{ color: 'var(--text-muted)', animationDelay: '0.62s', opacity: 0 }}
        >
          No credit card required ·{' '}
          <span style={{ color: 'var(--text-secondary)' }}>500,000+</span> teams trust FlowMind AI ·{' '}
          SOC2 certified
        </p>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up"
          style={{ animationDelay: '0.75s', opacity: 0 }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="stat-card glass rounded-2xl py-5 px-4 text-center"
              style={{ border: `1px solid ${s.color}22` }}
            >
              <div className="text-2xl md:text-3xl font-black mb-1 tracking-tight" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hero browser mockup */}
        <div
          className="relative mt-14 mx-auto max-w-4xl animate-fade-up"
          style={{ animationDelay: '0.9s', opacity: 0 }}
        >
          {/* Glow behind window */}
          <div
            className="absolute inset-x-8 bottom-0 h-32 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(37,99,235,0.15)',
              boxShadow: '0 32px 100px rgba(37,99,235,0.15), 0 0 0 1px rgba(255,255,255,0.5)',
              background: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: 'rgba(37,99,235,0.1)', background: 'rgba(248, 250, 252, 0.9)' }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <div
                className="ml-4 flex-1 max-w-xs h-[22px] rounded-md flex items-center px-3 text-xs"
                style={{ background: 'rgba(37,99,235,0.06)', color: 'var(--text-muted)' }}
              >
                app.flowmind.ai/dashboard
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <span className="text-xs font-semibold" style={{ color: '#10b981' }}>Live</span>
              </div>
            </div>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({ icon, label, value, color, delay }: {
  icon: string; label: string; value: string; color: string; delay: string
}) {
  return (
    <div
      className="animate-float glass rounded-2xl px-5 py-4 min-w-[168px]"
      style={{
        animationDelay: delay,
        boxShadow: `0 8px 32px ${color}15, 0 0 0 1px ${color}15`,
        border: `1px solid ${color}25`,
        background: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
      <p className="text-sm font-bold" style={{ color }}>{value}</p>
    </div>
  )
}

function HeroDashboard() {
  const nodes = [
    { id: 1, x: 7,  y: 33, label: 'Trigger',   color: '#2563EB' },
    { id: 2, x: 28, y: 18, label: 'Filter',     color: '#7C3AED' },
    { id: 3, x: 28, y: 48, label: 'AI Model',   color: '#a78bfa' },
    { id: 4, x: 52, y: 33, label: 'Transform',  color: '#06B6D4' },
    { id: 5, x: 76, y: 18, label: 'Slack',      color: '#10b981' },
    { id: 6, x: 76, y: 48, label: 'Database',   color: '#f59e0b' },
  ]
  const edges: [number,number][] = [[1,2],[1,3],[2,4],[3,4],[4,5],[4,6]]

  return (
    <div style={{ background: 'rgba(248, 250, 252, 0.7)', minHeight: 260 }} className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>AI Workflow Builder</span>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>
            6 nodes active
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
            ● Running
          </span>
        </div>
      </div>
      <svg viewBox="0 0 100 68" className="w-full" style={{ height: 190 }} aria-hidden="true" role="img" aria-label="AI workflow diagram">
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="rgba(37,99,235,0.4)" />
          </marker>
        </defs>
        {edges.map(([from, to], i) => {
          const a = nodes.find(n => n.id === from)!
          const b = nodes.find(n => n.id === to)!
          const mx = (a.x + b.x) / 2 + 9
          const my = (a.y + b.y) / 2 + 3
          return (
            <path
              key={i}
              d={`M${a.x+9} ${a.y+3} Q${mx} ${my} ${b.x+2} ${b.y+3}`}
              fill="none" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5"
              strokeDasharray="2 1.5" markerEnd="url(#arr)"
            />
          )
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x} y={n.y-4} width={20} height={11} rx="2.5"
              fill={`${n.color}15`} stroke={n.color} strokeWidth="0.5" />
            <circle cx={n.x+1.5} cy={n.y+1.5} r="1.5" fill={n.color} opacity="0.9" />
            <text x={n.x+10} y={n.y+3} textAnchor="middle" fill={n.color} fontSize="2.8" fontWeight="700">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}