import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flowmind.ai'),
  title: 'FlowMind AI – Intelligent Automation Platform for the Future',
  description:
    'Build AI-powered workflows, automate repetitive tasks, connect your tools, and gain intelligent insights—all from one unified platform. Used by 500K+ teams worldwide.',
  keywords: [
    'AI automation platform', 'workflow automation', 'AI workflows', 'business automation',
    'intelligent automation', 'AI copilot', 'predictive analytics', 'enterprise AI',
  ],
  authors: [{ name: 'FlowMind AI' }],
  creator: 'FlowMind AI',
  openGraph: {
    type: 'website',
    url: 'https://flowmind.ai',
    title: 'FlowMind AI – Intelligent Automation Platform for the Future',
    description:
      'Build AI-powered workflows, automate repetitive tasks, connect your tools, and gain intelligent insights—all from one unified platform.',
    siteName: 'FlowMind AI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FlowMind AI Platform Dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowMind AI – Intelligent Automation Platform',
    description: 'Build AI-powered workflows that automate your entire business.',
    images: ['/og-image.png'],
    creator: '@flowmindai',
    site: '@flowmindai',
  },
  alternates: { canonical: 'https://flowmind.ai' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

import { AuthProvider } from '@/components/auth/AuthProvider'
import { ToastProvider, ToastViewport } from '@/components/ui/ToastProvider'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FlowMind AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Intelligent automation platform for the future. Build AI-powered workflows, automate tasks, and gain intelligent insights.',
  url: 'https://flowmind.ai',
  screenshot: 'https://flowmind.ai/og-image.png',
  featureList: [
    'AI Workflow Automation', 'AI Copilot', 'Smart Analytics',
    'Predictive Intelligence', 'API Integration', 'Enterprise Security',
  ],
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '199',
    priceCurrency: 'USD',
    offerCount: '3',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2847',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

