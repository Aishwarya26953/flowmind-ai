'use client'
import { useState, memo } from 'react'
import Link from 'next/link'
import { PLANS, getPrice, getMonthlyEquiv } from '@/lib/pricing'
import type { Currency, Billing } from '@/lib/pricing'

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const [currency, setCurrency] = useState<Currency>('USD')

  return (
    <section id="pricing" className="section-padding" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl font-black tracking-[-0.025em] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          <PricingControls billing={billing} setBilling={setBilling} currency={currency} setCurrency={setCurrency} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} currency={currency} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {['SOC2 Type II', 'GDPR Compliant', 'AES-256 Encryption', '99.99% Uptime SLA', 'Cancel Anytime'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7l3.5 3.5 6.5-7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingControls = memo(function PricingControls({
  billing, setBilling, currency, setCurrency,
}: {
  billing: Billing; setBilling: (b: Billing) => void
  currency: Currency; setCurrency: (c: Currency) => void
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <div
        className="flex items-center rounded-xl p-1 gap-1"
        style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}
        role="group" aria-label="Billing period"
      >
        {(['monthly', 'annual'] as Billing[]).map((b) => (
          <button
            key={b}
            onClick={() => setBilling(b)}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              background: billing === b ? 'linear-gradient(135deg, #2563EB, #7C3AED)' : 'transparent',
              color: billing === b ? 'white' : 'var(--text-secondary)',
              boxShadow: billing === b ? '0 4px 16px rgba(37,99,235,0.3)' : 'none',
            }}
            aria-pressed={billing === b}
          >
            {b === 'monthly' ? 'Monthly' : 'Annual'}
            {b === 'annual' && (
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold"
                style={{
                  background: billing === 'annual' ? 'rgba(255,255,255,0.2)' : 'rgba(16,185,129,0.15)',
                  color: billing === 'annual' ? 'white' : '#10b981',
                }}
              >
                Save 20%
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="appearance-none pl-4 pr-9 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
          style={{
            background: 'rgba(37,99,235,0.06)',
            border: '1px solid rgba(37,99,235,0.15)',
            color: 'var(--text-primary)',
          }}
          aria-label="Select currency"
        >
          <option value="USD">🇺🇸 USD</option>
          <option value="INR">🇮🇳 INR</option>
          <option value="EUR">🇪🇺 EUR</option>
        </select>
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4l4 4 4-4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
})

const PlanCard = memo(function PlanCard({
  plan, billing, currency,
}: { plan: typeof PLANS[0]; billing: Billing; currency: Currency }) {
  const price = getPrice(plan, currency, billing)
  const monthlyEquiv = getMonthlyEquiv(plan, currency, billing)

  return (
    <div
      className="animated-border-card glass rounded-[20px] p-8 flex flex-col relative overflow-hidden"
      style={{
        borderColor: plan.highlighted ? 'rgba(37,99,235,0.3)' : 'var(--border-subtle)',
        boxShadow: plan.highlighted ? '0 8px 60px rgba(37,99,235,0.15)' : 'none',
      }}
    >
      {plan.highlighted && <div className="plan-highlight-line" />}

      {plan.badge && (
        <div
          className="self-start mb-5 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', color: 'white', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}
        >
          ⭐ {plan.badge}
        </div>
      )}
      {!plan.badge && <div className="mb-[52px]" />}

      <h3 className="text-xl font-black mb-1.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {plan.name}
      </h3>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {plan.description}
      </p>

      <div className="mb-1.5">
        <span
          className="text-4xl font-black tracking-tight transition-all duration-350"
          style={{ color: plan.highlighted ? '#2563EB' : 'var(--text-primary)' }}
        >
          {price}
        </span>
      </div>
      {monthlyEquiv
        ? <p className="text-xs mb-7 font-medium" style={{ color: '#10b981' }}>≈ {monthlyEquiv} billed annually</p>
        : <div className="mb-7" />
      }

      <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
        {plan.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
              style={{
                background: feat.included ? 'rgba(16,185,129,0.1)' : 'rgba(100,116,139,0.08)',
                color: feat.included ? '#10b981' : 'var(--text-muted)',
                border: `1px solid ${feat.included ? 'rgba(16,185,129,0.2)' : 'transparent'}`,
              }}
              aria-hidden="true"
            >
              {feat.included ? '✓' : '×'}
            </span>
            <span className="text-sm leading-snug" style={{ color: feat.included ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              {feat.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={`/signin?plan=${plan.id}`}
        className="block w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
        style={
          plan.highlighted
            ? { background: 'linear-gradient(135deg, #2563EB, #7C3AED)', color: 'white', boxShadow: '0 8px 28px rgba(37,99,235,0.3)' }
            : { background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.15)', color: 'var(--text-primary)' }
        }
      >
        {plan.cta}
      </Link>
    </div>
  )
})