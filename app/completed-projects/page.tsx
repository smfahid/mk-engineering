"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Award, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ModernTabs } from "@/components/modern-tabs"

const completedConstructionProjects = [
  {
    id: 1,
    title: "Skyline Business Center",
    location: "Financial District",
    completedDate: "2023-11-15",
    duration: "18 months",
    area: "50,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "A 20-story commercial building with state-of-the-art facilities and LEED Gold certification.",
    features: ["LEED Gold Certified", "Smart Building Technology", "Underground Parking"],
    client: "Skyline Developments",
  },
  {
    id: 2,
    title: "Green Valley Residences",
    location: "Suburban Hills",
    completedDate: "2023-09-30",
    duration: "24 months",
    area: "75,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Luxury residential complex with 50 units featuring modern amenities and landscaped gardens.",
    features: ["Swimming Pool", "Fitness Center", "Children's Play Area"],
    client: "Green Valley Properties",
  },
  {
    id: 3,
    title: "Metro Shopping Complex",
    location: "City Center",
    completedDate: "2023-12-20",
    duration: "15 months",
    area: "80,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern shopping complex with retail spaces, food court, and entertainment zone.",
    features: ["Multi-level Parking", "Food Court", "Entertainment Zone"],
    client: "Metro Retail Group",
  },
]

const completedInteriorProjects = [
  {
    id: 4,
    title: "Executive Office Suite",
    location: "Corporate Tower",
    completedDate: "2023-10-10",
    duration: "4 months",
    area: "5,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Sophisticated executive office interior with premium materials and custom furniture.",
    features: ["Custom Furniture", "Premium Materials", "Smart Lighting"],
    client: "TechCorp Industries",
  },
  {
    id: 5,
    title: "Boutique Hotel Interiors",
    location: "Historic District",
    completedDate: "2023-08-25",
    duration: "8 months",
    area: "25,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Elegant boutique hotel interior design blending modern comfort with historic charm.",
    features: ["Historic Preservation", "Luxury Amenities", "Custom Artwork"],
    client: "Heritage Hotels",
  },
  {
    id: 6,
    title: "Fine Dining Restaurant",
    location: "Gourmet District",
    completedDate: "2023-07-15",
    duration: "3 months",
    area: "3,000 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    description: "Upscale restaurant interior with sophisticated ambiance and premium finishes.",
    features: ["Open Kitchen Design", "Wine Display", "Ambient Lighting"],
    client: "Gourmet Dining Co.",
  },
]

export default function CompletedProjectsPage() {
  const [activeTab, setActiveTab] = useState("construction")

  const ProjectCard = ({ project, category }: { project: any; category: string }) => (
    <div className="group relative h-full">
      <Card className="relative h-full flex flex-col overflow-hidden rounded-lg border shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute top-4 right-4">
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">✓ Completed</div>
          </div>

          <div className="absolute top-4 left-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {category === "construction" ? "🏗️ Construction" : "🎨 Interior"}
            </div>
          </div>
        </div>

        <CardHeader className="flex-shrink-0 pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col flex-grow space-y-4 pt-0">
          <p className="text-gray-600 line-clamp-3 flex-shrink-0 leading-relaxed">{project.description}</p>

          <div className="space-y-3 flex-shrink-0">
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <MapPin className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
              <span className="truncate font-medium">{project.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <Calendar className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
              <span className="truncate font-medium">{new Date(project.completedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <Award className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
              <span className="truncate font-medium">{project.duration}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[3rem] items-start flex-shrink-0">
            {project.features.slice(0, 2).map((feature: string, index: number) => (
              <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-medium px-3 py-1">
                {feature}
              </Badge>
            ))}
            {project.features.length > 2 && (
              <Badge className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1">
                +{project.features.length - 2} more
              </Badge>
            )}
          </div>

          <div className="mt-auto pt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg" asChild>
              <Link href={`/completed-projects/${project.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                View Project
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Completed <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successfully completed construction and interior design projects that showcase our
            commitment to excellence and innovation.
          </p>
        </div>

        <div className="w-full mb-16">
          <ModernTabs
            tabs={[
              { id: "construction", label: "Construction Work", icon: "🏗️" },
              { id: "interior", label: "Interior Work", icon: "🎨" },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {activeTab === "construction" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {completedConstructionProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="construction" />
            ))}
          </div>
        )}

        {activeTab === "interior" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {completedInteriorProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="interior" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
