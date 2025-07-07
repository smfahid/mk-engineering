import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Award,
  Eye,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Mock data – replace with Supabase fetch in production                     */
/* -------------------------------------------------------------------------- */
const completedProjectsData = {
  /* --------------------------- CONSTRUCTION (1-3) -------------------------- */
  1: {
    id: 1,
    title: "Skyline Business Center",
    location: "Financial District",
    completedDate: "2023-11-15",
    duration: "18 months",
    area: "50,000 sq ft",
    category: "construction",
    client: "Skyline Developments",
    budget: "$20 M",
    description:
      "Prestigious 20-story commercial building, LEED Gold certified with smart-building technology and rooftop gardens.",
    features: [
      "LEED Gold Certified",
      "Smart Building Technology",
      "Underground Parking",
      "Rooftop Gardens",
      "Energy-Efficient Systems",
    ],
    images: Array(6).fill("/placeholder.svg?height=600&width=800"),
    achievements: [
      "LEED Gold Certification",
      "Best Commercial Building 2023",
      "Sustainable Design Award",
    ],
    testimonial: {
      text: "MK Engineering delivered beyond our expectations. Their attention to detail made this project a landmark.",
      author: "John Smith",
      position: "CEO, Skyline Developments",
    },
  },
  2: {
    id: 2,
    title: "Green Valley Residences",
    location: "Suburban Hills",
    completedDate: "2023-09-30",
    duration: "24 months",
    area: "75,000 sq ft",
    category: "construction",
    client: "Green Valley Properties",
    budget: "$12 M",
    description:
      "Luxury residential complex with 50 modern units, landscaped gardens, pool and community facilities.",
    features: [
      "Swimming Pool",
      "Fitness Center",
      "Landscaped Gardens",
      "Community Center",
    ],
    images: Array(5).fill("/placeholder.svg?height=600&width=800"),
    achievements: [
      "Best Residential Development 2023",
      "Community Choice Award",
    ],
    testimonial: {
      text: "Quality of construction and attention to resident needs is exceptional – a model for future projects.",
      author: "Sarah Johnson",
      position: "Project Director, Green Valley Properties",
    },
  },
  3: {
    id: 3,
    title: "Metro Shopping Complex",
    location: "City Center",
    completedDate: "2023-12-20",
    duration: "15 months",
    area: "80,000 sq ft",
    category: "construction",
    client: "Metro Retail Group",
    budget: "$18 M",
    description:
      "Modern shopping complex with multi-level parking, food court and entertainment zone.",
    features: ["Food Court", "Entertainment Zone", "Multi-level Parking"],
    images: Array(5).fill("/placeholder.svg?height=600&width=800"),
    achievements: ["Retail Project of the Year 2023"],
    testimonial: {
      text: "A seamless renovation that boosted visitor numbers by 30%.",
      author: "Michael Lee",
      position: "COO, Metro Retail Group",
    },
  },
  /* ----------------------------- INTERIOR (4-6) ---------------------------- */
  4: {
    id: 4,
    title: "Executive Office Suite",
    location: "Corporate Tower",
    completedDate: "2023-10-10",
    duration: "4 months",
    area: "5,000 sq ft",
    category: "interior",
    client: "TechCorp Industries",
    budget: "$500 K",
    description:
      "Sophisticated executive office interior blending premium materials with cutting-edge technology.",
    features: ["Custom Furniture", "Smart Lighting", "Acoustic Solutions"],
    images: Array(4).fill("/placeholder.svg?height=600&width=800"),
    achievements: ["Interior Design Excellence Award"],
    testimonial: {
      text: "The new suite transformed how we work – elegant and highly functional.",
      author: "Emily Chen",
      position: "CEO, TechCorp Industries",
    },
  },
  5: {
    id: 5,
    title: "Boutique Hotel Interiors",
    location: "Historic District",
    completedDate: "2023-08-25",
    duration: "8 months",
    area: "25,000 sq ft",
    category: "interior",
    client: "Heritage Hotels",
    budget: "$2 M",
    description:
      "Elegant boutique-hotel interiors that blend modern comfort with preserved historic charm.",
    features: ["Historic Preservation", "Luxury Amenities", "Custom Artwork"],
    images: Array(4).fill("/placeholder.svg?height=600&width=800"),
    achievements: ["Best Hospitality Interior 2023"],
    testimonial: {
      text: "Guests consistently praise the elevated design experience.",
      author: "Lisa Thompson",
      position: "General Manager, Heritage Hotels",
    },
  },
  6: {
    id: 6,
    title: "Fine Dining Restaurant",
    location: "Gourmet District",
    completedDate: "2023-07-15",
    duration: "3 months",
    area: "3,000 sq ft",
    category: "interior",
    client: "Gourmet Dining Co.",
    budget: "$350 K",
    description:
      "Upscale restaurant interior featuring open kitchen, wine wall and ambient lighting.",
    features: ["Open Kitchen", "Wine Display", "Ambient Lighting"],
    images: Array(4).fill("/placeholder.svg?height=600&width=800"),
    achievements: ["Best Fine-Dining Interior 2023"],
    testimonial: {
      text: "The ambiance has elevated our brand and customer experience.",
      author: "Robert Wilson",
      position: "Owner, Gourmet Dining Co.",
    },
  },
} as const;
/* -------------------------------------------------------------------------- */

type ProjectType =
  (typeof completedProjectsData)[keyof typeof completedProjectsData];

export default function CompletedProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project: ProjectType | undefined =
    completedProjectsData[params.id as keyof typeof completedProjectsData];

  if (!project) notFound();

  /* ---------- helpers ---------- */
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="min-h-screen w-full py-8 bg-gray-50">
      <div className="container w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* back button ----------------------------------------------------- */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/completed-projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Completed Projects
            </Link>
          </Button>
        </div>

        {/* header ---------------------------------------------------------- */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 capitalize">
                  {project.category}
                </Badge>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Completed
                </Badge>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-semibold text-blue-600">
                Project Completed
              </div>
              <div className="text-sm text-gray-600">
                {formatDate(project.completedDate)}
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />{" "}
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" /> Duration:{" "}
              {project.duration}
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-blue-600" /> {project.area}
            </div>
            <div className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />{" "}
              {project.budget}
            </div>
          </dl>
        </header>

        {/* main ------------------------------------------------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left / main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* hero image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* overview */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* gallery */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative h-48 rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${project.title} – image ${i + 2}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* achievements */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Project Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                    >
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">{ach}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* testimonial */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Client Testimonial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  “{project.testimonial.text}”
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">
                      {project.testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {project.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {project.testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* right / sidebar */}
          <aside className="space-y-6">
            {/* details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Client:</span>{" "}
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Area:</span>{" "}
                  <p className="text-gray-600">{project.area}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Budget:</span>{" "}
                  <p className="text-gray-600">{project.budget}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Duration:</span>{" "}
                  <p className="text-gray-600">{project.duration}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Completed:</span>{" "}
                  <p className="text-gray-600">
                    {formatDate(project.completedDate)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* features */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* similar projects */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Similar Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Interested in similar work? View our other {project.category}{" "}
                  projects.
                </p>
                <Button
                  className="w-full bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/completed-projects">View All Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* contact */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Ready to create something amazing? Let’s discuss your vision.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
