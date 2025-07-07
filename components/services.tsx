import { Building, Home, Hammer, Palette, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Professional commercial building construction with modern techniques and quality materials.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom home construction tailored to your lifestyle and preferences.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior design solutions that reflect your personality and enhance functionality.",
    gradient: "from-pink-500 to-purple-600",
    bgGradient: "from-pink-50 to-purple-50",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we provide{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              comprehensive construction
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-semibold">
              interior design services
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 rounded-2xl overflow-hidden bg-gradient-to-br ${service.bgGradient}`}
            >
              {/* Hover Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10 pb-4">
                <div
                  className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className={`group-hover:bg-gradient-to-r ${service.gradient} group-hover:text-white transition-all duration-300 rounded-xl`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
