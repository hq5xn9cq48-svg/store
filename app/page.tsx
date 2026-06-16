import { CursorGlow } from '@/components/cursor-glow'
import { SiteNavbar } from '@/components/site-navbar'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { WhySection } from '@/components/why-section'
import { TrendingSection } from '@/components/trending-section'
import { ReviewsSection } from '@/components/reviews-section'
import { PricingSection } from '@/components/pricing-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <CursorGlow />
      <SiteNavbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <WhySection />
        <TrendingSection />
        <ReviewsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
