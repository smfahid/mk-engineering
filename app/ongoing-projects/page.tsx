"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ModernTabs } from "@/components/modern-tabs"

const constructionProjects = [
  {
    id: 1,
    title: "Downtown Office Complex",
    location: "Downtown Business District",
    startDate: "2024-01-15",
    expectedCompletion: "2024-12-30",
    progress: 65,
    team: 25,
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern 15-story office complex with sustainable design features and smart building technology.",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Residential Villa Project",
    location: "Hillside Gardens",
    startDate: "2024-03-01",
    expectedCompletion: "2024-10-15",
    progress: 40,
    team: 12,
    image: "/placeholder.svg?height=300&width=400",
    description: "Luxury villa with contemporary architecture and premium finishes.",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    location: "Central Plaza",
    startDate: "2024-02-10",
    expectedCompletion: "2024-08-20",
    progress: 80,
    team: 18,
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete renovation of existing shopping mall with modern retail spaces.",
    status: "Near Completion",
  },
]

const interiorProjects = [
  {
    id: 4,
    title: "Corporate Headquarters Interior",
    location: "Tech Park",
    startDate: "2024-04-01",
    expectedCompletion: "2024-07-30",
    progress: 55,
    team: 8,
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern office interior design with collaborative spaces and wellness areas.",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Luxury Hotel Suites",
    location: "Waterfront District",
    startDate: "2024-03-15",
    expectedCompletion: "2024-09-10",
    progress: 30,
    team: 10,
    image: "/placeholder.svg?height=300&width=400",
    description: "High-end hotel suite interiors with premium materials and custom furniture.",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Restaurant Chain Interiors",
    location: "Multiple Locations",
    startDate: "2024-01-20",
    expectedCompletion: "2024-11-30",
    progress: 70,
    team: 15,
    image: "/placeholder.svg?height=300&width=400",
    description: "Interior design for 5 restaurant locations with consistent branding.",
    status: "In Progress",
  },
]

export default function OngoingProjectsPage() {
  const [activeTab, setActiveTab] = useState("construction")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-600 text-white"
      case "Near Completion":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "from-green-500 to-green-600"
    if (progress >= 50) return "from-blue-500 to-blue-600"
    return "from-orange-500 to-orange-600"
  }

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
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              <TrendingUp className="inline h-4 w-4 mr-1" />
              {project.status}
            </div>
          </div>

          <div className="absolute top-4 left-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {category === "construction" ? "🏗️ Construction" : "🎨 Interior"}
            </div>
          </div>

          {/* Progress Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm font-medium">Progress</span>
                <span className="text-white text-sm font-bold">{project.progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(project.progress)} transition-all duration-1000`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
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
              <span className="truncate font-medium">
                Due: {new Date(project.expectedCompletion).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <Users className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
              <span className="truncate font-medium">{project.team} team members</span>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg" asChild>
              <Link href={`/ongoing-projects/${project.id}`}>
                View Details
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
            Ongoing <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at our current construction and interior design projects in progress, showcasing innovation and
            excellence in every detail.
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
            {constructionProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="construction" />
            ))}
          </div>
        )}

        {activeTab === "interior" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {interiorProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="interior" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
