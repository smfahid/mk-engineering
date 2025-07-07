import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building, Home, Hammer, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Professional commercial building construction with modern techniques and quality materials.",
    image: "/images/service-construction.jpg",
    features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"],
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom home construction tailored to your lifestyle and preferences.",
    image: "/images/service-construction.jpg",
    features: ["Custom Homes", "Townhouses", "Apartments", "Luxury Villas"],
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior design solutions that reflect your personality and enhance functionality.",
    image: "/images/service-interior.jpg",
    features: ["Space Planning", "Furniture Selection", "Color Schemes", "Lighting Design"],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
    image: "/images/service-renovation.jpg",
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Office Upgrades", "Complete Makeovers"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive construction and interior design services tailored to
            meet your specific needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
