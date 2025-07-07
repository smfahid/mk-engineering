import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data - in real app, this would come from Supabase
const projectsData = {
  1: {
    id: 1,
    title: "Downtown Office Complex",
    location: "Downtown Business District",
    startDate: "2024-01-15",
    expectedCompletion: "2024-12-30",
    progress: 65,
    team: 25,
    category: "construction",
    client: "Skyline Developments",
    area: "50,000 sq ft",
    budget: "$15M",
    description:
      "A state-of-the-art 15-story office complex featuring sustainable design elements, smart building technology, and LEED Gold certification. The project includes underground parking, rooftop gardens, and modern office spaces designed for collaborative work environments.",
    status: "In Progress",
    features: [
      "LEED Gold Certified",
      "Smart Building Technology",
      "Underground Parking",
      "Rooftop Gardens",
      "High-Speed Elevators",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    timeline: [
      { phase: "Foundation", status: "completed", date: "Jan 2024" },
      { phase: "Structure", status: "completed", date: "Mar 2024" },
      { phase: "Exterior", status: "in-progress", date: "Jun 2024" },
      { phase: "Interior", status: "upcoming", date: "Sep 2024" },
      { phase: "Finishing", status: "upcoming", date: "Nov 2024" },
    ],
    updates: [
      {
        date: "2024-06-15",
        title: "Exterior Work Progress",
        description: "Glass facade installation 70% complete",
      },
      {
        date: "2024-06-01",
        title: "Structural Milestone",
        description: "All 15 floors structural work completed",
      },
      {
        date: "2024-05-15",
        title: "Safety Achievement",
        description: "500 days without workplace incidents",
      },
    ],
  },
  2: {
    id: 2,
    title: "Residential Villa Project",
    location: "Hillside Gardens",
    startDate: "2024-03-01",
    expectedCompletion: "2024-10-15",
    progress: 40,
    team: 12,
    category: "construction",
    client: "Private Client",
    area: "8,000 sq ft",
    budget: "$2.5M",
    description:
      "Luxury villa featuring contemporary architecture, premium finishes, and smart home integration.",
    status: "In Progress",
    features: [
      "Smart Home System",
      "Swimming Pool",
      "Home Theater",
      "Wine Cellar",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    timeline: [
      { phase: "Excavation", status: "completed", date: "Mar 2024" },
      { phase: "Foundation", status: "completed", date: "Apr 2024" },
      { phase: "Framing", status: "in-progress", date: "May 2024" },
      { phase: "Finishes", status: "upcoming", date: "Sep 2024" },
    ],
    updates: [
      {
        date: "2024-06-10",
        title: "Framing Progress",
        description: "Second floor framing 80% complete",
      },
    ],
  },
  3: {
    id: 3,
    title: "Shopping Mall Renovation",
    location: "Central Plaza",
    startDate: "2024-02-10",
    expectedCompletion: "2024-08-20",
    progress: 80,
    team: 18,
    category: "construction",
    client: "Metro Retail Group",
    area: "80,000 sq ft",
    budget: "$12M",
    description:
      "Complete renovation of an existing shopping mall with modern retail spaces and entertainment zone.",
    status: "Near Completion",
    features: ["Food Court", "Entertainment Zone", "Multi-level Parking"],
    images: ["/placeholder.svg?height=600&width=800"],
    timeline: [
      { phase: "Demo", status: "completed", date: "Feb 2024" },
      { phase: "Re-build", status: "in-progress", date: "Jun 2024" },
      { phase: "Fit-out", status: "upcoming", date: "Jul 2024" },
    ],
    updates: [
      {
        date: "2024-06-15",
        title: "Facade Installed",
        description: "Exterior glass 100% done",
      },
    ],
  },
  4: {
    id: 4,
    title: "Corporate Headquarters Interior",
    location: "Tech Park",
    startDate: "2024-04-01",
    expectedCompletion: "2024-07-30",
    progress: 55,
    team: 8,
    category: "interior",
    client: "TechCorp Industries",
    area: "15,000 sq ft",
    budget: "$800K",
    description:
      "Modern office interior design featuring collaborative workspaces and wellness areas.",
    status: "In Progress",
    features: ["Smart Lighting", "Open Office", "Biophilic Design"],
    images: ["/placeholder.svg?height=600&width=800"],
    timeline: [
      { phase: "Design", status: "completed", date: "Apr 2024" },
      { phase: "Construction", status: "in-progress", date: "Jun 2024" },
    ],
    updates: [
      {
        date: "2024-06-20",
        title: "Lighting Installed",
        description: "Smart lighting 60% complete",
      },
    ],
  },
  5: {
    id: 5,
    title: "Luxury Hotel Suites",
    location: "Waterfront District",
    startDate: "2024-03-15",
    expectedCompletion: "2024-09-10",
    progress: 30,
    team: 10,
    category: "interior",
    client: "Heritage Hotels",
    area: "25,000 sq ft",
    budget: "$1.2M",
    description:
      "High-end hotel suite interiors with premium materials and custom furniture.",
    status: "In Progress",
    features: ["Custom Furniture", "Premium Materials", "Ocean Views"],
    images: ["/placeholder.svg?height=600&width=800"],
    timeline: [{ phase: "Concept", status: "completed", date: "Mar 2024" }],
    updates: [],
  },
  6: {
    id: 6,
    title: "Restaurant Chain Interiors",
    location: "Multiple Locations",
    startDate: "2024-01-20",
    expectedCompletion: "2024-11-30",
    progress: 70,
    team: 15,
    category: "interior",
    client: "Gourmet Dining Co.",
    area: "12,000 sq ft",
    budget: "$950K",
    description:
      "Interior design for five restaurant locations with consistent branding and open-kitchen concepts.",
    status: "In Progress",
    features: ["Consistent Branding", "Open Kitchen", "Ambient Lighting"],
    images: ["/placeholder.svg?height=600&width=800"],
    timeline: [
      { phase: "Site 1", status: "completed", date: "Apr 2024" },
      { phase: "Site 2", status: "in-progress", date: "Jun 2024" },
      { phase: "Remaining", status: "upcoming", date: "Q3 2024" },
    ],
    updates: [
      {
        date: "2024-06-01",
        title: "Site 2 Halfway",
        description: "Walls and MEP completed",
      },
    ],
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData[params.id as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen w-full py-8 bg-gray-50">
      <div className="container w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/ongoing-projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Ongoing Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 capitalize">
                  {project.category}
                </Badge>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {project.status}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {project.progress}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>

          <Progress value={project.progress} className="h-3 mb-6" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />
              {project.location}
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" />
              Due: {new Date(project.expectedCompletion).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-2 text-blue-600" />
              {project.team} team members
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-blue-600" />
              {project.area}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Images */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {getStatusIcon(phase.status)}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span
                            className={`font-medium ${
                              phase.status === "completed"
                                ? "text-green-700"
                                : phase.status === "in-progress"
                                ? "text-blue-700"
                                : "text-gray-500"
                            }`}
                          >
                            {phase.phase}
                          </span>
                          <span className="text-sm text-gray-600">
                            {phase.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Updates */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.updates.map((update, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-600 pl-4"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-900">
                          {update.title}
                        </h4>
                        <span className="text-sm text-gray-600">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {update.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Client:</span>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Area:</span>
                  <p className="text-gray-600">{project.area}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Budget:</span>
                  <p className="text-gray-600">{project.budget}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Start Date:</span>
                  <p className="text-gray-600">
                    {new Date(project.startDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    Expected Completion:
                  </span>
                  <p className="text-gray-600">
                    {new Date(project.expectedCompletion).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-blue-200 text-blue-800"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Need More Information?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our project team for detailed updates and information.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
