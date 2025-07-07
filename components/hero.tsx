"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-construction.jpg" alt="Construction site" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Excellence <br />
            <span className="text-blue-400">Since 2009</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional construction and interior design services. Creating spaces that inspire and endure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" asChild className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: (555) 123-4567
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-300 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-300 mt-1">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-gray-300 mt-1">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
