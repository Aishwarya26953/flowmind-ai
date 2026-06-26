export type Currency = 'USD' | 'INR' | 'EUR'
export type Billing = 'monthly' | 'annual'

export interface PlanFeature {
  text: string
  included: boolean
}

export interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: { USD: number; INR: number; EUR: number }
  badge?: string
  features: PlanFeature[]
  cta: string
  highlighted: boolean
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
  EUR: '€',
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    monthlyPrice: { USD: 0, INR: 0, EUR: 0 },
    features: [
      { text: '5 AI Workflows', included: true },
      { text: '1,000 automation runs/mo', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Email Support', included: true },
      { text: 'API Access', included: false },
      { text: 'Voice AI', included: false },
      { text: 'Custom Integrations', included: false },
      { text: 'SLA Guarantee', included: false },
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams who need more power',
    monthlyPrice: { USD: 49, INR: 4099, EUR: 45 },
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited Workflows', included: true },
      { text: '50,000 automation runs/mo', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Full API Access', included: true },
      { text: 'Voice AI', included: true },
      { text: 'Custom Integrations', included: false },
      { text: 'SLA Guarantee', included: false },
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: { USD: 199, INR: 16599, EUR: 185 },
    features: [
      { text: 'Unlimited Workflows', included: true },
      { text: 'Unlimited automation runs', included: true },
      { text: 'Custom Analytics & Reports', included: true },
      { text: '24/7 Dedicated Support', included: true },
      { text: 'Full API Access', included: true },
      { text: 'Voice AI', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'SLA Guarantee', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function getPrice(plan: Plan, currency: Currency, billing: Billing): string {
  if (plan.monthlyPrice[currency] === 0) return 'Free'
  const monthly = plan.monthlyPrice[currency]
  const price = billing === 'annual' ? Math.round(monthly * 12 * 0.8) : monthly
  const symbol = CURRENCY_SYMBOLS[currency]
  return billing === 'annual'
    ? `${symbol}${price}/yr`
    : `${symbol}${price}/mo`
}

export function getMonthlyEquiv(plan: Plan, currency: Currency, billing: Billing): string | null {
  if (plan.monthlyPrice[currency] === 0 || billing === 'monthly') return null
  const monthly = plan.monthlyPrice[currency]
  const perMonth = Math.round(monthly * 0.8)
  return `${CURRENCY_SYMBOLS[currency]}${perMonth}/mo`
}
