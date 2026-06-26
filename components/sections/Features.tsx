'use client'
import { useState, useCallback } from 'react'
import { useMediaQuery, useIntersectionObserver } from '@/hooks'

interface FeatureCard {
  id: string
  icon: string
  title: string
  description: string
  color: string
  span?: 'wide' | 'tall' | 'normal'
  detail: string
  tag: string
}

const FEATURES: FeatureCard[] = [
  {
    id: 'copilot',
    icon: '🤖',
    title: 'AI Copilot',
    description: 'Conversational AI that understands your business context and executes complex tasks on command.',
    color: '#2563EB',
    span: 'wide',
    detail: 'Natural language commands, smart suggestions, context-aware automation.',
    tag: 'Intelligent',
  },
  {
    id: 'workflow',
    icon: '⚡',
    title: 'AI Workflow Automation',
    description: 'Visual drag-and-drop editor to build complex multi-step workflows — no code required.',
    color: '#7C3AED',
    span: 'tall',
    detail: 'Conditional logic, loops, parallel branches, 200+ app integrations.',
    tag: 'Core',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Smart Analytics',
    description: 'Real-time dashboards and AI-powered insights surfaced directly from your automation data.',
    color: '#06B6D4',
    span: 'normal',
    detail: 'Track performance, identify bottlenecks, optimize pipelines.',
    tag: 'Insights',
  },
  {
    id: 'predictive',
    icon: '🔮',
    title: 'Predictive Intelligence',
    description: 'ML models that learn your patterns and predict outcomes before they happen.',
    color: '#8b5cf6',
    span: 'normal',
    detail: 'Trend forecasting, anomaly detection, proactive alerts.',
    tag: 'ML',
  },
  {
    id: 'api',
    icon: '🔗',
    title: 'API Integration',
    description: 'Connect to any REST or GraphQL API with our intelligent connector builder.',
    color: '#f59e0b',
    span: 'wide',
    detail: 'Auto-generate schemas, handle auth, retry logic, rate-limit management.',
    tag: 'Connect',
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified. End-to-end encryption and granular role-based access.',
    color: '#10b981',
    span: 'normal',
    detail: 'AES-256, audit logs, SSO/SAML, RBAC, GDPR compliant.',
    tag: 'Secure',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Sync',
    description: 'Seamlessly sync data across AWS, GCP, Azure with zero configuration.',
    color: '#60a5fa',
    span: 'normal',
    detail: 'Automatic failover, regional replication, real-time sync.',
    tag: 'Scale',
  },
  {
    id: 'voice',
    icon: '🎙️',
    title: 'Voice Commands',
    description: 'Control your entire automation suite with natural voice commands.',
    color: '#ec4899',
    span: 'normal',
    detail: '20+ languages, command history, voice-to-workflow generation.',
    tag: 'New',
  },
  {
    id: 'monitoring',
    icon: '📡',
    title: 'Real-Time Monitoring',
    description: 'Live observability into every workflow run with intelligent alerting.',
    color: '#34d399',
    span: 'wide',
    detail: 'Traces, metrics, logs — unified in one pane of glass.',
    tag: 'Ops',
  },
]

export default function Features() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const { ref, isVisible } = useIntersectionObserver(0.08)

  const handleCardHover = useCallback((id: string | null) => {
    setActiveId(id)
    if (id && isMobile) setOpenAccordion(id)
  }, [isMobile])

  const toggleAccordion = useCallback((id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }, [])

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="section-label">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} />
            Platform Features
          </span>
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl font-black tracking-[-0.025em] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Everything you need to{' '}
            <span className="gradient-text">automate at scale</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            From simple task automation to enterprise-grade AI pipelines —
            FlowMind AI covers the full spectrum of intelligent automation.
          </p>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5" role="list" aria-label="Platform features">
          {FEATURES.map((feat) => (
            <BentoCard
              key={feat.id}
              feature={feat}
              isActive={activeId === feat.id}
              onHover={handleCardHover}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-3" role="list" aria-label="Platform features">
          {FEATURES.map((feat) => (
            <AccordionCard
              key={feat.id}
              feature={feat}
              isOpen={openAccordion === feat.id}
              onToggle={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoCard({ feature, isActive, onHover, isVisible }: {
  feature: FeatureCard
  isActive: boolean
  onHover: (id: string | null) => void
  isVisible: boolean
}) {
  const spanClass =
    feature.span === 'wide' ? 'col-span-2' :
    feature.span === 'tall' ? 'row-span-2' : 'col-span-1'

  return (
    <div
      role="listitem"
      className={`${spanClass} animated-border-card glass rounded-[20px] p-7 cursor-default overflow-hidden relative`}
      style={{
        minHeight: feature.span === 'tall' ? 300 : 200,
        transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease, opacity 400ms ease',
        borderColor: isActive ? `${feature.color}40` : 'var(--border-subtle)',
        boxShadow: isActive ? `0 8px 48px ${feature.color}18, 0 0 0 1px ${feature.color}15` : 'none',
        transform: isActive ? 'translateY(-5px)' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Tag */}
      <span
        className="absolute top-5 right-5 text-[10px] font-bold px-2 py-0.5 rounded-full"
        style={{ background: `${feature.color}12`, color: feature.color, border: `1px solid ${feature.color}25` }}
      >
        {feature.tag}
      </span>

      {/* Icon */}
      <div
        className="feature-icon-wrap mb-5"
        style={{ background: `linear-gradient(135deg, ${feature.color}18, ${feature.color}08)`, border: `1px solid ${feature.color}25` }}
      >
        <span className="text-2xl relative z-10">{feature.icon}</span>
      </div>

      <h3 className="text-lg font-bold mb-2.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {feature.description}
      </p>

      {/* Expandable detail */}
      <div
        className="overflow-hidden transition-all duration-350"
        style={{ maxHeight: isActive ? '72px' : '0', opacity: isActive ? 1 : 0, marginTop: isActive ? '14px' : 0 }}
      >
        <p className="text-xs font-medium leading-relaxed" style={{ color: feature.color }}>
          → {feature.detail}
        </p>
      </div>

      {/* Bottom corner glow */}
      <div
        className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at bottom right, ${feature.color}15, transparent 65%)`,
          opacity: isActive ? 1 : 0,
        }}
      />
    </div>
  )
}

function AccordionCard({ feature, isOpen, onToggle }: {
  feature: FeatureCard
  isOpen: boolean
  onToggle: (id: string) => void
}) {
  return (
    <div
      role="listitem"
      className="glass rounded-[20px] overflow-hidden transition-all duration-300"
      style={{
        borderColor: isOpen ? `${feature.color}30` : 'var(--border-subtle)',
        boxShadow: isOpen ? `0 4px 32px ${feature.color}12` : 'none',
      }}
    >
      <button
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
        onClick={() => onToggle(feature.id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-${feature.id}`}
      >
        <div
          className="feature-icon-wrap w-10 h-10 flex-shrink-0"
          style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}22` }}
        >
          <span className="text-xl">{feature.icon}</span>
        </div>
        <span className="font-semibold flex-1 text-sm" style={{ color: 'var(--text-primary)' }}>
          {feature.title}
        </span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full mr-2"
          style={{ background: `${feature.color}12`, color: feature.color }}
        >
          {feature.tag}
        </span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', color: 'var(--text-muted)' }}
        >
          <path d="M4 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        id={`accordion-${feature.id}`}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '180px' : '0' }}
      >
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
            {feature.description}
          </p>
          <p className="text-xs font-medium" style={{ color: feature.color }}>→ {feature.detail}</p>
        </div>
      </div>
    </div>
  )
}