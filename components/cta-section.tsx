import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Dream Project?</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Let's discuss your vision and bring it to life. Contact us today for a free consultation and discover how we
            can transform your space into something extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-6">
              <a href="tel:+15551234567" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:info@mkengineering.com"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-semibold">info@mkengineering.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
