'use client'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks'

const STEPS = [
  {
    id: 1,
    icon: '🔌',
    title: 'Connect Apps',
    description: 'Link your tools in seconds. 200+ native integrations including Slack, Salesforce, Google Workspace, and any REST API.',
    color: '#2563EB',
    metric: '200+ integrations',
  },
  {
    id: 2,
    icon: '🧩',
    title: 'Build Workflow',
    description: 'Drag-and-drop visual editor. Build complex multi-step workflows with conditional logic, loops, and parallel execution.',
    color: '#7C3AED',
    metric: '< 5 min to first workflow',
  },
  {
    id: 3,
    icon: '🧠',
    title: 'Train AI',
    description: 'FlowMind learns from your data. Add AI nodes to classify, predict, summarize, and make intelligent decisions automatically.',
    color: '#06B6D4',
    metric: '98.7% prediction accuracy',
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Deploy & Monitor',
    description: 'One-click deploy. Monitor every run in real-time with rich traces, logs, and AI-powered anomaly detection.',
    color: '#10b981',
    metric: '99.99% uptime SLA',
  },
]

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0)
  const { ref, isVisible } = useIntersectionObserver(0.12)

  return (
    <section id="workflow" className="section-padding" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="section-label">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            How It Works
          </span>
          <h2
            id="workflow-heading"
            className="text-4xl md:text-5xl font-black tracking-[-0.025em] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            From idea to deployed AI{' '}
            <span className="gradient-text">in minutes</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Four simple steps to turn any repetitive process into an intelligent, self-improving automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Step list */}
          <div className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <button
                key={step.id}
                className="glass rounded-[20px] p-6 text-left w-full transition-all duration-300"
                style={{
                  borderColor: activeStep === i ? `${step.color}40` : 'var(--border-subtle)',
                  boxShadow: activeStep === i ? `0 8px 40px ${step.color}18` : 'none',
                  transform: activeStep === i ? 'translateX(6px)' : 'none',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 100}ms`,
                }}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setActiveStep(i)}
                aria-current={activeStep === i ? 'step' : undefined}
              >
                <div className="flex items-start gap-4">
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl relative"
                      style={{
                        background: activeStep === i ? `${step.color}15` : 'rgba(37,99,235,0.04)',
                        border: `1px solid ${activeStep === i ? `${step.color}35` : 'var(--border-subtle)'}`,
                        transition: 'all 300ms ease',
                      }}
                    >
                      {step.icon}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="w-px flex-1 mt-1 transition-all duration-300"
                        style={{
                          height: 20,
                          background: activeStep >= i ? step.color : 'var(--border-subtle)',
                          opacity: activeStep >= i ? 0.6 : 0.3,
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${step.color}12`, color: step.color }}
                      >
                        Step {step.id}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ background: 'rgba(37,99,235,0.05)', color: 'var(--text-muted)' }}
                      >
                        {step.metric}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual */}
          <div
            className="glass rounded-[20px] overflow-hidden sticky top-24"
            style={{
              border: `1px solid ${STEPS[activeStep].color}25`,
              boxShadow: `0 24px 80px ${STEPS[activeStep].color}12`,
              transition: 'border-color 400ms ease, box-shadow 400ms ease',
              minHeight: 420,
            }}
          >
            <WorkflowVisual step={activeStep} />
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowVisual({ step }: { step: number }) {
  const color = ['#2563EB','#7C3AED','#06B6D4','#10b981'][step]
  const title = ['Connect Apps','Build Workflow','Train AI','Deploy & Monitor'][step]
  const items = [
    [{ icon:'💼', label:'Salesforce', status:'Connected' }, { icon:'💬', label:'Slack', status:'Connected' }, { icon:'📧', label:'Gmail', status:'Ready' }],
    [{ icon:'⚡', label:'Trigger node', status:'Active' }, { icon:'🔀', label:'Condition split', status:'Active' }, { icon:'🔁', label:'Loop iterator', status:'Idle' }],
    [{ icon:'🧠', label:'Classify intent', status:'Training' }, { icon:'📝', label:'Summarize text', status:'Ready' }, { icon:'🎯', label:'Route decision', status:'Active' }],
    [{ icon:'✅', label:'3,241 runs today', status:'Live' }, { icon:'📊', label:'99.99% success rate', status:'Healthy' }, { icon:'🔔', label:'0 alerts', status:'Clear' }],
  ][step]

  return (
    <div
      className="p-8 flex flex-col gap-6"
      style={{ background: 'rgba(248, 250, 252, 0.8)', minHeight: 420 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color }}>
            Step {step + 1}
          </div>
          <div className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{title}</div>
        </div>
        <div
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
        >
          {['Configuring','Building','Training','Monitoring'][step]}
        </div>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300"
            style={{
              background: i === 0 ? `${color}10` : 'rgba(37,99,235,0.03)',
              border: `1px solid ${i === 0 ? `${color}28` : 'var(--border-subtle)'}`,
              boxShadow: i === 0 ? `0 0 20px ${color}12` : 'none',
              animationDelay: `${i * 80}ms`,
            }}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="flex-1 text-sm font-medium" style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
              {item.label}
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: i === 0 ? `${color}15` : 'rgba(37,99,235,0.05)',
                color: i === 0 ? color : 'var(--text-muted)',
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-auto">
        <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
          <span>Progress</span>
          <span style={{ color }}>{(step + 1) * 25}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(37,99,235,0.08)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${(step + 1) * 25}%`, background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          />
        </div>
        <div className="flex justify-between text-xs mt-2.5" style={{ color: 'var(--text-muted)' }}>
          {['Connect','Build','Train','Deploy'].map((s, i) => (
            <span key={s} style={{ color: i <= step ? color : 'var(--text-muted)', fontWeight: i === step ? 700 : 400 }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}