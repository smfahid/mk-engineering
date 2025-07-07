import Image from "next/image"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">MK Engineering</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in construction and interior design, we have established ourselves as a
                trusted partner for residential and commercial projects across the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled professionals combines traditional craftsmanship with modern techniques to deliver
                exceptional results that exceed expectations. From concept to completion, we ensure every project
                reflects our commitment to quality and excellence.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Craftsmanship</h3>
                  <p className="text-sm text-gray-600">Skilled professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Timely Delivery</h3>
                  <p className="text-sm text-gray-600">Projects completed on schedule</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Client-Focused</h3>
                  <p className="text-sm text-gray-600">Your vision is our priority</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
                  <p className="text-sm text-gray-600">Rigorous quality control standards</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/about-team.jpg" alt="MK Engineering team" fill className="object-cover" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600 font-medium">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
