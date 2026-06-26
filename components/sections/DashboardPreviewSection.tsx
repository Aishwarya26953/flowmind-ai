'use client'
import { useIntersectionObserver } from '@/hooks'

const ACTIVITY = [
  { icon: '⚡', title: 'Lead enrichment workflow ran', time: '2s ago',  color: '#2563EB', status: 'success' },
  { icon: '🤖', title: 'AI Copilot summarized 47 emails', time: '18s ago', color: '#7C3AED', status: 'success' },
  { icon: '📊', title: 'Weekly analytics report generated', time: '1m ago', color: '#06B6D4', status: 'success' },
  { icon: '🔔', title: 'Anomaly detected in pipeline #3', time: '3m ago', color: '#f59e0b', status: 'warning' },
  { icon: '🚀', title: 'New workflow deployed to production', time: '7m ago', color: '#10b981', status: 'success' },
]

const CHART_BARS = [
  { h: 45, label: 'Mon' },
  { h: 72, label: 'Tue' },
  { h: 58, label: 'Wed' },
  { h: 90, label: 'Thu' },
  { h: 65, label: 'Fri' },
  { h: 82, label: 'Sat' },
  { h: 95, label: 'Sun' },
]

export default function DashboardPreviewSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1)

  return (
    <section
      id="dashboard"
      className="section-padding overflow-hidden"
      aria-labelledby="dashboard-heading"
      ref={ref}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06B6D4', display: 'inline-block' }} />
            Platform Preview
          </span>
          <h2
            id="dashboard-heading"
            className="text-4xl md:text-5xl font-black tracking-[-0.025em] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Your command center for{' '}
            <span className="gradient-text">intelligent automation</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A unified dashboard that gives you complete visibility and control over every AI workflow.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div
          className="relative rounded-[24px] overflow-hidden transition-all duration-700"
          style={{
            border: '1px solid rgba(37,99,235,0.15)',
            boxShadow: '0 40px 120px rgba(37,99,235,0.12), 0 0 0 1px rgba(255,255,255,0.6)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            background: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Browser bar */}
          <div
            className="flex items-center gap-2.5 px-5 py-3.5 border-b"
            style={{ background: 'rgba(248, 250, 252, 0.95)', borderColor: 'rgba(37,99,235,0.1)' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <div
              className="ml-4 flex-1 max-w-[280px] h-[22px] rounded-lg flex items-center px-3 text-xs"
              style={{ background: 'rgba(37,99,235,0.06)', color: 'var(--text-muted)' }}
            >
              🔒 app.flowmind.ai/dashboard
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                ● 3,241 runs
              </span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ background: 'rgba(248, 250, 252, 0.9)' }}>
            {/* Left sidebar */}
            <div className="hidden md:block border-r p-5" style={{ borderColor: 'rgba(37,99,235,0.1)' }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Navigation
              </div>
              {[
                { icon: '⚡', label: 'Workflows', active: true },
                { icon: '🤖', label: 'AI Copilot', active: false },
                { icon: '📊', label: 'Analytics', active: false },
                { icon: '🔗', label: 'Integrations', active: false },
                { icon: '🛡️', label: 'Security', active: false },
                { icon: '⚙️', label: 'Settings', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 cursor-default"
                  style={{
                    background: item.active ? 'rgba(37,99,235,0.08)' : 'transparent',
                    border: item.active ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
                  }}
                >
                  <span className="text-base">{item.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: item.active ? '#2563EB' : 'var(--text-muted)' }}
                  >
                    {item.label}
                  </span>
                  {item.active && (
                    <span
                      className="ml-auto text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ background: 'rgba(37,99,235,0.12)', color: '#2563EB' }}
                    >
                      12
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Main area */}
            <div className="md:col-span-2 p-6">
              {/* Metric cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Total Runs', value: '3,241', change: '+12%', color: '#2563EB' },
                  { label: 'Success Rate', value: '99.1%', change: '+0.3%', color: '#10b981' },
                  { label: 'Time Saved', value: '847h', change: '+34h', color: '#7C3AED' },
                  { label: 'AI Decisions', value: '18.4K', change: '+2.1k', color: '#06B6D4' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-3.5"
                    style={{ background: `${m.color}08`, border: `1px solid ${m.color}18` }}
                  >
                    <div className="text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
                    <div className="text-xl font-black mb-0.5" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-xs font-semibold" style={{ color: '#10b981' }}>↑ {m.change}</div>
                  </div>
                ))}
              </div>

              {/* Chart + Activity */}
              <div className="grid md:grid-cols-5 gap-4">
                {/* Bar chart */}
                <div
                  className="md:col-span-3 rounded-xl p-4"
                  style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.1)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Workflow Runs — This Week
                    </span>
                    <span className="text-xs" style={{ color: '#10b981' }}>↑ 23% vs last week</span>
                  </div>
                  <div className="flex items-end gap-2" style={{ height: 80 }}>
                    {CHART_BARS.map((bar) => (
                      <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                          className="db-bar w-full rounded-t-md"
                          style={{
                            height: `${bar.h}%`,
                            background: bar.h === 95
                              ? 'linear-gradient(180deg, #2563EB, #7C3AED)'
                              : `rgba(37,99,235,${0.2 + bar.h * 0.003})`,
                          }}
                        />
                        <span className="text-[9px]" style={{ color: 'var(--text-muted)' }}>{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="md:col-span-2 flex flex-col gap-2">
                  <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Recent Activity
                  </div>
                  {ACTIVITY.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 db-row-in"
                      style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                    >
                      <span
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                        style={{ background: `${a.color}12` }}
                      >
                        {a.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs leading-snug truncate" style={{ color: 'var(--text-secondary)' }}>
                          {a.title}
                        </p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{a.time}</p>
                      </div>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: a.status === 'warning' ? '#f59e0b' : '#10b981' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}