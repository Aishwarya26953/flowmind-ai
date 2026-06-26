import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustedCompanies from '@/components/sections/TrustedCompanies'
import Features from '@/components/sections/Features'
import Workflow from '@/components/sections/Workflow'
import DashboardPreviewSection from '@/components/sections/DashboardPreviewSection'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Workflow />
        <DashboardPreviewSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
