import Hero from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <Testimonials />
      <CTASection />
    </main>
  )
}
