import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Construction",
    image: "/placeholder.svg?height=400&width=600",
    description: "A state-of-the-art office complex with sustainable design features.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Luxury Villa Interior",
    category: "Interior Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Elegant interior design for a luxury villa with contemporary aesthetics.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Residential Complex",
    category: "Construction",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern residential complex with premium amenities and facilities.",
    gradient: "from-emerald-500 to-teal-600",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover some of our most{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              remarkable construction
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              interior design projects
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 rounded-2xl bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <Button
                  variant="ghost"
                  className={`group-hover:bg-gradient-to-r ${project.gradient} group-hover:text-white transition-all duration-300 rounded-xl p-0 h-auto font-semibold`}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/completed-projects">
              View All Projects
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
