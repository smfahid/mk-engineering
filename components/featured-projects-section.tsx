import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Skyline Business Center",
    category: "Commercial Construction",
    location: "Financial District",
    completedDate: "2023",
    image: "/images/project-1.jpg",
    description: "A 20-story commercial building with state-of-the-art facilities and LEED Gold certification.",
  },
  {
    id: 2,
    title: "Green Valley Residences",
    category: "Residential Construction",
    location: "Suburban Hills",
    completedDate: "2023",
    image: "/images/project-2.jpg",
    description: "Luxury residential complex with 50 units featuring modern amenities and landscaped gardens.",
  },
  {
    id: 3,
    title: "Executive Office Suite",
    category: "Interior Design",
    location: "Corporate Tower",
    completedDate: "2023",
    image: "/images/project-3.jpg",
    description: "Sophisticated executive office interior with premium materials and custom furniture.",
  },
]

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our most remarkable construction and interior design projects that showcase our commitment
            to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.completedDate}
                  </div>
                </div>

                <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 group">
                  <Link href={`/completed-projects/${project.id}`} className="flex items-center justify-center w-full">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/completed-projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
