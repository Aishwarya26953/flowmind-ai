'use client'
const TESTIMONIALS = [

  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'NovaTech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4',
    rating: 5,
    text: 'FlowMind AI transformed our data pipeline completely. We automated 80% of manual workflows in the first week. The AI copilot is genuinely intelligent — it suggested optimizations we hadn\'t thought of.',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Head of Engineering',
    company: 'SkyLabs',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=c0aede',
    rating: 5,
    text: 'Migrated from our old automation stack in 3 days. The predictive intelligence feature alone saves us 20 hours a week. The dashboard is a joy to work in every single day.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'VP of Operations',
    company: 'QuantumX',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=ffd5dc',
    rating: 5,
    text: 'Enterprise security compliance was our biggest concern. SOC2 certified out of the box, GDPR compliant, and the audit logs are incredibly detailed. Our legal team signed off immediately.',
  },
  {
    id: 4,
    name: 'James O\'Brien',
    role: 'Founder',
    company: 'FutureSoft',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=d1f4cc',
    rating: 5,
    text: 'The API integration builder is unlike anything I\'ve used. Auto-generated schemas, built-in retry logic — we connected to 14 internal APIs in an afternoon. Absolutely game-changing.',
  },
  {
    id: 5,
    name: 'Aiko Tanaka',
    role: 'Data Scientist',
    company: 'CloudAxis',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aiko&backgroundColor=ffdfbf',
    rating: 5,
    text: 'Smart analytics replaced our entire BI stack. The AI-generated insights surface things we didn\'t know to ask for. The accuracy is remarkable — 98%+ on our classification tasks.',
  },
  {
    id: 6,
    name: 'Diego Reyes',
    role: 'Product Lead',
    company: 'PixelCore',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=diego&backgroundColor=b6e3f4',
    rating: 5,
    text: 'Voice commands are a killer feature for our ops team. They can trigger complex workflows hands-free during live demos. The multi-language support works flawlessly in Portuguese.',
  },
]

const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1l1.5 3.5 3.5.5-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"
            fill={i < count ? '#f59e0b' : 'rgba(245,158,11,0.15)'}
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding overflow-hidden" style={{ background: 'var(--bg-primary)' }} aria-labelledby="testimonials-heading">

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="section-label">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
          Customer Stories
        </span>
        <h2
          id="testimonials-heading"
          className="text-4xl md:text-5xl font-black tracking-[-0.025em] mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          Loved by{' '}
          <span className="gradient-text">10,000+ teams</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          See how teams worldwide use FlowMind AI to reclaim their time and make smarter decisions.
        </p>
      </div>

      {/* Row 1 */}
      <div className="relative scroll-row mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />
        <div className="flex animate-scroll-left gap-5" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </div>
      </div>

      {/* Row 2 (reversed) */}
      <div className="relative scroll-row">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />
        <div className="flex gap-5" style={{ width: 'max-content', animation: 'scroll-left 44s linear infinite reverse' }}>
          {[...doubled].reverse().map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <article
      className="glass card-hover rounded-[20px] p-6 flex flex-col gap-4"
      style={{ width: 340, flexShrink: 0 }}
    >
      <div className="flex items-center justify-between">
        <StarRating count={testimonial.rating} />
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
        >
          {testimonial.company}
        </span>
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'rgba(37,99,235,0.1)' }}>
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(124,58,237,0.18))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(15,23,42,0.75)',
                fontWeight: 800,
                fontSize: 12,
              }}
              aria-label={`Avatar for ${testimonial.name}`}
              role="img"
            >
              {testimonial.name
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((p) => p[0])
                .join('')}
            </div>

        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
    </article>
  )
}